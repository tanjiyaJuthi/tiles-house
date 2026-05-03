import Image from "next/image";

const CategoryDetailsPage = async ({params}) => {
    const {categoryId} = await params;
    const res = await fetch(`https://tiles-gallery-server-xjik.onrender.com/categories/${categoryId}`);
    const category = await res.json();
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between items-center">
            <div className="relative h-96 w-full">
                <Image
                    alt={category.name}
                    src={category.image}
                    fill
                    className="object-cover"
                />
            </div>

            <div>
                <h2 className="text-xl">{category.name}</h2>
            </div>
        </div>
    );
};

export default CategoryDetailsPage;