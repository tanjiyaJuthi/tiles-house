import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import FeaturedTiles from "@/components/FeaturedTiles";
import NewArrivals from "@/components/NewArrivals";

export default function Home() {
  return (
    <div className="text-mist-800">
      <Banner />
      <NewArrivals />
      <FeaturedTiles />
      <Categories/>
    </div>
  );
}
