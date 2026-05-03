import Link from "next/link";
import Marquee from "react-fast-marquee";

const NewArrivals = () => {
    return (
        <div className="w-full bg-mist-800 text-white py-3">
            <div className="max-w-7xl mx-auto px-4">
                
                <Marquee pauseOnHover speed={50} gradient={false}>
                    
                    <div className="flex items-center gap-10">
                        <p>🔥 New Arrivals: Marble Luxury Tiles</p>
                        <p>✨ Weekly Feature: Modern Geometric Patterns</p>
                        <p>🏡 Premium Ceramic Collection Now Live</p>

                        <p>🤝 Join the Community of Designers</p>

                        <p className="px-4 py-2 bg-rose-700">
                            <Link
                                href="/registration"
                                className="no-underline text-white rounded-none border border-rose-700"
                            >
                                Registration
                            </Link>
                        </p>
                    </div>

                </Marquee>

            </div>
        </div>
    );
};

export default NewArrivals;