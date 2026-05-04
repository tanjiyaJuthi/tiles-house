import Image from "next/image";
import { Tabs } from "@heroui/react";
import {ArrowUpRightFromSquare, Check} from '@gravity-ui/icons';
import Link from "next/link";

const TileDetailsPage = async ({ params }) => {
    const { tileId } = await params;

    const res = await fetch(
        `https://tiles-gallery-server-xjik.onrender.com/products/${tileId}`
    );
    const tile = await res.json();

    return (
        <div className="mt-21">

            {/* HERO */}
            <div className="relative w-full h-52 lg:h-96">
                <div className="absolute inset-0 bg-black/50 z-10" />

                <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    className="object-cover"
                />

                <div className="relative z-10 h-full max-w-7xl mx-auto px-4">
                    <div className="flex flex-col items-center justify-center text-center text-white h-full">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            {tile.title}
                        </h1>
                    </div>
                </div>
            </div>

            <Tabs className="w-full" variant="secondary">
                <div className="tab-container w-full">
                    <div className="max-w-7xl mx-auto">
                        <Tabs.ListContainer className="w-full">
                            <Tabs.List aria-label="Options" className="w-full justify-start">
                                <Tabs.Tab id="overview">
                                    Overview
                                    <Tabs.Indicator />
                                </Tabs.Tab>

                                <Tabs.Tab id="features">
                                    Features
                                    <Tabs.Indicator />
                                </Tabs.Tab>

                                <Tabs.Tab id="specification">
                                    Specification
                                    <Tabs.Indicator />
                                </Tabs.Tab>
                            </Tabs.List>
                        </Tabs.ListContainer>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto pt-18 text-left">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">
                        <div className="text-3xl">{tile.title}</div>
                        
                        <div className="flex gap-3 items-center">
                            <div>
                                <p className="font-semibold">Sizes:</p>
                                <p>{tile.dimensions}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Color:</p>
                                <p>{tile.color}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Effect:</p>
                                <p>{tile.effect}</p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-center">
                            <p>Share: </p>
                            <Link href="#">
                                <ArrowUpRightFromSquare className="w-4 h-4 group-hover:-translate-y-1 transition" />
                                Facebook
                            </Link>
                            <Link href="#">
                                <ArrowUpRightFromSquare className="w-4 h-4 group-hover:-translate-y-1 transition" />
                                Twitter
                            </Link>
                            <Link href="#">
                                <ArrowUpRightFromSquare className="w-4 h-4 group-hover:-translate-y-1 transition" />
                                Linkedin
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto pt-10">
                    <Tabs.Panel id="overview">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between items-center">
                            <Image
                                src={tile.image}
                                alt={tile.title}
                                width={500}
                                height={100}
                                className="w-full h-100"
                            />

                            <div className="space-y-5">
                                <h3 className="text-6xl text-mist-800">{tile.title}</h3>
                                <p className="text-gray-400 text-xl">{tile.overview.description}</p>
                            </div>
                        </div>
                    </Tabs.Panel>

                    <Tabs.Panel id="features">
                        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-10 justify-between items-center">
                            <Image
                                src={tile.image}
                                alt={tile.title}
                                width={500}
                                height={100}
                                className="w-full h-100"
                            />

                            <div className="space-y-5">
                                <h3 className="text-6xl text-mist-800">Features</h3>
                                <ul>
                                    {tile.features.map((feature, index) => (
                                        <li key={index} className="flex gap-2"><Check /> {feature}</li>
                                    ))}
                                </ul>
                                <p className="text-white text-xl">{tile.overview.description}</p>
                            </div>
                        </div>
                    </Tabs.Panel>

                    <Tabs.Panel id="specification">
                        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-10 justify-between items-center">
                            <Image
                                src={tile.image}
                                alt={tile.title}
                                width={500}
                                height={100}
                                className="w-full h-100"
                            />

                            <div className="space-y-5">
                                <h3 className="text-6xl text-mist-800">Specifications</h3>
                                <div>
                                    <p>Dimensions: {tile.specification.dimensions}</p>
                                    <p>Material : {tile.specification.material}</p>
                                    <p>Finish : {tile.specification.material}</p>
                                    <p>Usage : {tile.specification.usage}</p>
                                </div>
                                <p className="text-white text-xl">{tile.overview.description}</p>
                            </div>
                        </div>
                    </Tabs.Panel>
                </div>
            </Tabs>
        </div>
    );
};

export default TileDetailsPage;