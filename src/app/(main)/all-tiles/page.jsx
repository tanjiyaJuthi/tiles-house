import AllTilesClient from "@/components/AllTilesClient";
import Image from "next/image";

const AllTilesPage = async () => {
    const res = await fetch("https://tiles-gallery-server-xjik.onrender.com/products", {
        cache: "no-store",
    });

    const tiles = await res.json();

    return (
        <div className="mt-21">
            <div className="relative w-full h-52 lg:h-96">
                <div className="absolute inset-0 bg-black/50 z-10"></div>

                <Image
                    src="https://images.pexels.com/photos/6444255/pexels-photo-6444255.jpeg"
                    alt="all tiles"
                    fill
                    className="object-cover"
                />

                <div className="relative z-10 h-full max-w-7xl mx-auto px-4">
                    <div className="flex flex-col items-center justify-center text-center text-white h-full">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-5">
                            All Collections
                        </h1>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-5 lg:px-0">
                <AllTilesClient tiles={tiles} />
            </div>
        </div>
    );
};

export default AllTilesPage;