"use client";

import { useState, useMemo } from "react";
import TileCard from "@/components/shared/TileCard";

const AllTilesClient = ({ tiles }) => {
    const [visibleCount, setVisibleCount] = useState(4);
    const [loading, setLoading] = useState(false);

    // input value (what user types)
    const [inputValue, setInputValue] = useState("");

    // actual applied search (used for filtering)
    const [search, setSearch] = useState("");

    const filteredTiles = useMemo(() => {
        if (!search.trim()) return tiles;

        return tiles.filter(tile =>
            tile.name?.toLowerCase().includes(search.toLowerCase()) ||
            tile.title?.toLowerCase().includes(search.toLowerCase()) ||
            tile.category?.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, tiles]);

    const handleSearchClick = () => {
        setSearch(inputValue);
        setVisibleCount(4); // reset pagination on new search
    };

    const loadMore = () => {
        setLoading(true);

        setTimeout(() => {
            setVisibleCount(prev =>
                Math.min(prev + 4, filteredTiles.length)
            );
            setLoading(false);
        }, 300);
    };

    return (
        <>
            {/* SEARCH BOX */}
            <div className="mt-10 flex justify-center gap-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleSearchClick();
                    }}
                    placeholder="Search tiles..."
                    className="w-full max-w-md px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />

                <button
                    onClick={handleSearchClick}
                    className="px-6 py-3 bg-mist-800 text-white hover:bg-gray-800 transition"
                >
                    Search
                </button>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                {filteredTiles.slice(0, visibleCount).map(tile => (
                    <TileCard tile={tile} key={tile.id} />
                ))}
            </div>

            {/* STATUS */}
            <p className="text-center text-sm text-gray-500 mt-10">
                Showing {Math.min(visibleCount, filteredTiles.length)} of {filteredTiles.length}
            </p>

            {/* LOAD MORE */}
            {visibleCount < filteredTiles.length && (
                <div className="flex justify-center mt-10">
                    <button
                        disabled={loading}
                        onClick={loadMore}
                        className="px-6 py-3 bg-mist-800 text-white hover:bg-gray-800 transition"
                    >
                        {loading ? "Loading..." : "Load More"}
                    </button>
                </div>
            )}
        </>
    );
};

export default AllTilesClient;