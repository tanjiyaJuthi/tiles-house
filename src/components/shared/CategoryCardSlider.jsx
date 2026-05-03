'use client';

import { Link } from "@heroui/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// IMPORTANT: import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CategoryCardSlider = ({ categories }) => {
    return (
        <div className="relative w-full px-6">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={true}
                pagination={false}
                modules={[Navigation, Pagination]}
                className="mySwiper"
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {categories?.map((category) => (
                    <SwiperSlide key={category.id}>
                        <div className="relative w-full aspect-square">
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className="object-cover"
                                sizes="100"
                            />
                        </div>

                        <div className="space-y-2 mt-2">
                            <h2 className="font-semibold text-gray-500 text-xl">
                                {category.name}
                            </h2>

                            <Link href={`/all-categories/${category.id}`}>
                                View Details
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CategoryCardSlider;