"use client";

import { useState } from "react";
import TileCard from "@/components/shared/TileCard";

const AllTilesClient = ({ tiles }) => {
    const [visibleCount, setVisibleCount] = useState(4);
    const [loading, setLoading] = useState(false);

    const loadMore = () => {
        setLoading(true);

        setTimeout(() => {
            setVisibleCount(prev =>
                Math.min(prev + 4, tiles.length)
            );
            
            setLoading(false);
        }, 300);
    };

    return (
        <>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                {tiles.slice(0, visibleCount).map(tile => (
                    <TileCard tile={tile} key={tile.id} />
                ))}
            </div>

            <p className="text-center text-sm text-gray-500 mt-10">
                Showing {Math.min(visibleCount, tiles.length)} of {tiles.length}
            </p>

            {visibleCount < tiles.length && (
                <div className="flex justify-center mt-10">
                    <button
                        disabled={loading}
                        onClick={loadMore}
                        className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition"
                    >
                        {loading ? "Loading..." : "Load More"}
                    </button>
                </div>
            )}
        </>
    );
};

export default AllTilesClient;