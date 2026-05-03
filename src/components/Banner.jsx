"use client";

import Link from "next/link";
import Navbar from "./shared/Navbar";

const Banner = () => {
    return (
        <section
            className="relative h-screen w-full bg-cover bg-center"
            style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')",
                }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Navbar inside constrained container */}
                <Navbar />

            {/* CONTENT WRAPPER (controls max width) */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4">
                {/* Hero content */}
                <div className="flex flex-col items-center justify-center text-center text-white h-full">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-25">
                        Discover Your Perfect Aesthetic
                    </h1>

                    <Link
                        href="/all-tiles"
                        className="inline-block px-7 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition"
                    >
                        Browse Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;