"use client";

import { useState } from "react";
import CategoryCard from "@/components/shared/CategoryCard";

const AllCategoryClient = ({ categories }) => {
    const [visibleCount, setVisibleCount] = useState(4);

    const loadMore = () => {
        setVisibleCount(prev =>
            Math.min(prev + 4, categories.length)
        );
    };

    return (
        <>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                {categories.slice(0, visibleCount).map(category => (
                    <CategoryCard
                        key={category.id || category._id}
                        category={category}
                    />
                ))}
            </div>

            <p className="text-center text-sm text-gray-500 mt-10">
                Showing {Math.min(visibleCount, categories.length)} of {categories.length}
            </p>

            {visibleCount < categories.length && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={loadMore}
                        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                    >
                        Load More
                    </button>
                </div>
            )}
        </>
    );
};

export default AllCategoryClient;