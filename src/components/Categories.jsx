import Link from "next/link";
import CategoryCardSlider from "./shared/CategoryCardSlider";

const Categories = async () => {
  const res = await fetch(
    "https://tiles-gallery-server-xjik.onrender.com/categories",
  );
  const categories = await res.json();

  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="flex items-center justify-center gap-4 mt-5 w-full">
        <span className="h-px flex-1 bg-gray-200"></span>
        <h2 className="text-3xl font-semibold whitespace-nowrap ">
          EXPLORE Tiles COLLECTIONS BY CATEGORY
        </h2>
        <span className="h-px flex-1 bg-gray-200"></span>
      </div>

      <div className="mt-10">
        <CategoryCardSlider categories={categories} />
      </div>

      <div className="mt-20 text-center">
        <Link
          href="/all-tiles"
          className="inline-block px-6 py-3 bg-mist-800 text-white no-underline  font-medium transition-all duration-200 hover:opacity-90 hover:scale-105"
        >
          Discover All
        </Link>
      </div>
    </div>
  );
};

export default Categories;
