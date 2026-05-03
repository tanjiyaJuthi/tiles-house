import {Chip, Link} from "@heroui/react";
import Image from "next/image";

const CategoryCard = ({category}) => {
    return (
        <div className="">
            <div className="relative w-full aspect-square">
                <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                />

                <Chip size="sm" className="absolute right-2 top-2 rounded-none">{category.category}</Chip>
            </div>

            <div className="space-y-2 mt-2">
                <h2 className="font-bold text-xl">{category.name}</h2>

                <Link
                    href={`/all-categories/${category.id}`}
                    className="border border-mist-300 no-underline rounded-none inline-block px-5 py-2 bg-transparent transition-all duration-200 hover:opacity-90 hover:scale-105"
                >
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default CategoryCard;