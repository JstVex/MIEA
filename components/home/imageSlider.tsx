'use client'

import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const images = [
    '/images/slider/img1.jpg',
    '/images/slider/img2.jpg',
    '/images/slider/img3.jpg',
    '/images/slider/img4.jpg',
];

const texts = [
    'Fast pace schedule',
    'Top notch facilities',
    'Fantastic results',
    'Yearly guidance',
];

const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-[92vh] overflow-hidden">
            <div className="absolute z-50 left-0 top-0 min-w-[25rem] w-1/3 mt-[60vh] bg-gray-900 bg-opacity-80 text-white p-8">
                <h1 className="ml-3 sm:ml-12 pl-8 text-4xl font-bold uppercase text-white border-l-[6px] border-green-500 tracking-wide">
                    {texts[currentImage]}
                </h1>
            </div>
            <div className="w-full relative">
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        width={500}
                        height={500}
                        alt={`Image ${index + 1}`}
                        className={`absolute w-full h-[92vh] object-cover transition-transform duration-300 transform ${index === currentImage ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    />
                ))}
                <div className="absolute top-[82vh] left-4 flex items-center space-x-5">
                    <button
                        onClick={prevImage}
                        className="w-10 h-10 bg-black border border-white text-white rounded-full flex items-center justify-center text-xl focus:outline-none"
                    >
                        <ArrowLeft width={20} height={20} />
                    </button>
                    <button
                        onClick={nextImage}
                        className="w-10 h-10 bg-black border border-white text-white rounded-full flex items-center justify-center text-xl focus:outline-none"
                    >
                        <ArrowRight width={20} height={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
