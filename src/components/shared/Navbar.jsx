"use client";

import { useEffect, useState } from "react";
import { Avatar, Button, Link } from "@heroui/react";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // set initial state

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const {data, isPending} = useSession();

    // if(isPending) {
    //     return <div>Loading....</div>;
    // }

    const user = data?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    const isActive = !isHome || scrolled || isMenuOpen;
    const textColor = isActive ? "text-black" : "text-white";

    const primaryLinks = (
        <>
            <li>
                <Link className={`font-bold no-underline ${textColor}`} href="/">
                    Home
                </Link>
            </li>
            <li>
                <Link className={`font-bold no-underline ${textColor}`} href="/all-tiles">
                    All Tiles
                </Link>
            </li>
            <li>
                <Link className={`font-bold no-underline ${textColor}`} href="/all-categories">
                    All Categories
                </Link>
            </li>
            <li>
                <Link className={`font-bold no-underline ${textColor}`} href="/my-profile">
                    Profile
                </Link>
            </li>
        </>
    );

    const secondaryLinks = (
        <>
            { !user
                ? <>
                    <li>
                        <Link
                            href="/login"
                            className={`px-4 py-2 border no-underline rounded-none ${textColor}`}
                        >
                            Login
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/registration"
                            className="no-underline px-4 py-2 bg-rose-700 text-white rounded-none border border-rose-700"
                        >
                            Registration
                        </Link>
                    </li>
                </>
                : <>
                    <li className="flex items-center gap-2">
                        <Avatar size="md" className="w-8 h-8 rounded-none">
                            <Avatar.Image
                                alt="Profile Image"
                                src={user?.image}
                                className="object-cover"
                            />

                            <Avatar.Fallback className="flex items-center justify-center rounded-none">
                                {user?.name?.charAt(0)?.toUpperCase()}
                            </Avatar.Fallback>
                        </Avatar>
                    </li>
                    <li>
                        <Button
                            onClick={handleSignOut}
                            className="no-underline px-4 py-2 bg-rose-700 text-white rounded-none border border-rose-700"
                        >
                            Logged Out
                        </Button>
                    </li>
                </>
            }
        </>
    );

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b
            ${
                isActive
                    ? "bg-white text-black border-gray-200"
                    : "bg-transparent text-white border-white/20"
            }`}
        >
            <div className="max-w-7xl mx-auto">
                <div className={`flex py-6 items-center justify-between`}>

                    {/* Left side */}
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>

                        <Link
                            href="/"
                            className={`text-2xl font-bold no-underline ${textColor}`}
                        >
                            TilesHouse
                        </Link>
                    </div>

                    {/* Desktop nav */}
                    <ul className="hidden items-center gap-4 md:flex">
                        {primaryLinks}
                    </ul>

                    {/* Auth links */}
                    <ul className="flex items-center text-sm gap-2">
                        {secondaryLinks}
                    </ul>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div
                        id="mobile-menu"
                        className={`border-t border-separator md:hidden bg-white`}                    >
                        <ul className="flex flex-col gap-2 p-4">
                            {primaryLinks}
                        </ul>

                        <ul className="flex flex-col gap-2 p-4 border-t">
                            {secondaryLinks}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;