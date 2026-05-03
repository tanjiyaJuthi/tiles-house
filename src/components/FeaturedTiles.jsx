import Link from "next/link";
import TileCard from "./shared/TileCard";

const FeaturedTiles = async () => {
    const res = await fetch('https://tiles-gallery-server-xjik.onrender.com/products');
    const tiles = await res.json();
    const featuredTiles = tiles.slice(0,4);

    return (
        <div className="max-w-7xl mx-auto mt-20">
            <div className="space-y-8 text-center">
                <div className="flex items-center justify-center gap-4 mt-5 w-full">
                    <span className="h-px flex-1 bg-gray-200"></span>
                    <h2 className="text-3xl font-bold whitespace-nowrap">
                        Featured Tiles
                    </h2>
                    <span className="h-px flex-1 bg-gray-200"></span>
                </div>

                <p className="text-gray-400">
                    Looking for the best tiles in Bangladesh? Explore the exclusive DBL Ceramics tiles collection, designed to bring lasting beauty and strength to your home. From glossy finishes to rustic textures, our tiles in BD suit every space living room, kitchen, bathroom, or outdoor area. Choose from a wide range of ceramic and porcelain tiles that enhance your interiors with elegance and durability you can trust.
                </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                {
                    featuredTiles.map(tile => <TileCard tile={tile} key={tile.id} />)
                }
            </div>
        </div>
    );
};

export default FeaturedTiles;