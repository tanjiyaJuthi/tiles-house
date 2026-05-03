import {Chip, Link} from "@heroui/react";
import Image from "next/image";

const TileCard = ({tile}) => {
    return (
        <div className="">
            <div className="relative w-full aspect-square">
                <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                />

                <Chip size="sm" className="absolute right-2 top-2 rounded-none">{tile.category}</Chip>
            </div>

            <div className="space-y-2 mt-2">
                <div>
                    <h2 className="font-bold text-xl">{tile.title}</h2>

                    <p>{tile.dimensions}</p>
                </div>

                <Link
                    href={`/all-tiles/${tile.id}`}
                    className="border border-mist-300 no-underline rounded-none inline-block px-5 py-2 bg-transparent transition-all duration-200 hover:opacity-90 hover:scale-105"
                >
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default TileCard;