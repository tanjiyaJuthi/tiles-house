import Image from "next/image";

const CategoryDetailsPage = async ({params}) => {
    const {categoryId} = await params;
    const res = await fetch(`https://tiles-gallery-server-xjik.onrender.com/categories/${categoryId}`);
    const category = await res.json();

    const productRes = await fetch(`https://tiles-gallery-server-xjik.onrender.com/products`);
    const products = await productRes.json();

    const filteredTiles = products.filter(
        (tile) => tile.category.toLowerCase() === category.name.toLowerCase()
    );

    return (
        <div className="mt-21">
            <div className="relative w-full h-52 lg:h-96">
                <div className="absolute inset-0 bg-black/50 z-10" />

                <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                />

                <div className="relative z-10 h-full max-w-7xl mx-auto px-4">
                    <div className="flex flex-col items-center justify-center text-center text-white h-full">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            {category.name}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20">
                {filteredTiles.map((tile) => (
                    <div key={tile.id} className="border p-4 space-y-3 flex gap-10 items-center overflow-hidden mb-10">
                        <Image
                            src={tile.image}
                            alt={tile.title}
                            width={100}
                            height={100}
                            className="w-1/2 h-auto overflow-hidden"
                        />

                        <div className="space-y-5">
                            <h3 className="text-2xl font-semibold">{tile.title}</h3>
                            <div className="flex gap-20 items-center ">
                                <div>
                                    <p><span className="font-semibold">Category:</span> {tile.category}</p>
                                    <p><span className="font-semibold">Material:</span> {tile.material}</p>
                                </div>

                                <div>
                                    <p><span className="font-semibold">Price:</span> {tile.price} {tile.currency}</p>
                                    <p><span className="font-semibold">Color:</span> {tile.color}</p>
                                </div>

                                <div>
                                    <p><span className="font-semibold">Effect:</span> {tile.effect}</p>
                                    <p><span className="font-semibold">Dimensions:</span> {tile.dimensions}</p>
                                </div>
                            </div>
                            <div>
                                <span className="font-semibold">Description:</span> {tile.overview.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryDetailsPage;