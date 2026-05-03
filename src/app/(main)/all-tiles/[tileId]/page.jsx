import Image from "next/image";

const TileDetailsPage = async ({params}) => {
    const {tileId} = await params;
    const res = await fetch(`https://tiles-gallery-server-xjik.onrender.com/products/${tileId}`);
    const tile = await res.json();

    console.log(tile);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between items-center">
            <div className="relative h-96 w-full">
                <Image
                    alt={tile.title}
                    src={tile.image}
                    fill
                    className="object-cover"
                />
            </div>

            <div>
                <h2 className="text-xl">{tile.name}</h2>
            </div>
        </div>
    );
};

export default TileDetailsPage;