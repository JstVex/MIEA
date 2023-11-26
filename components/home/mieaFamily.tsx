'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MieaFamily = () => {
    const [select, setSelect] = useState('faculty');

    const handleClick = (selected: string) => {
        setSelect(selected);
    };

    const getContent = () => {
        switch (select) {
            case 'alumni':
                return (
                    <div className="relative overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhZHVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                            alt="Alumni"
                            width={500}
                            height={500}
                            className="w-[60rem] h-auto transition-opacity duration-500 ease-in-out opacity-100"
                        />
                        <div className="absolute left-0 bottom-0 w-full h-2/3 bg-gradient-to-b from-transparent to-black">
                            <div className="hidden md:block absolute bottom-6 left-6 right-6 text-white mx-16 space-y-6">
                                <h3 className="text-3xl font-bold uppercase">
                                    Our Alumni
                                </h3>
                                <p className="my-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit sit quaerat laboriosam itaque modi non ratione doloremque. Iste temporibus odit quae laborum possimus recusandae.
                                </p>
                                <Link href="/" className="uppercase font-semibold cursor-pointer">
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            case 'facilities':
                return (
                    <div className="relative overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1585637071663-799845ad5212?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsYXNzcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
                            alt="Facilities"
                            width={500}
                            height={500}
                            className="w-[60rem] h-auto transition-opacity duration-500 ease-in-out opacity-100"
                        />
                        <div className="absolute left-0 bottom-0 w-full h-2/3 bg-gradient-to-b from-transparent to-black">
                            <div className="hidden md:block absolute bottom-6 left-6 right-6 text-white mx-16 space-y-6">
                                <h3 className="text-3xl font-bold uppercase">
                                    Our Facilities
                                </h3>
                                <p className="my-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit sit quaerat laboriosam itaque modi non ratione doloremque. Iste temporibus odit quae laborum possimus recusandae.
                                </p>
                                <Link href='/about/facilities' className="uppercase font-semibold cursor-pointer">
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="relative overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhY2hlcnN8ZW58MHx8MHx8fDA%3D"
                            alt="Faculty"
                            width={500}
                            height={500}
                            className="w-[60rem] h-auto transition-opacity duration-500 ease-in-out opacity-100"
                        />
                        <div className="absolute left-0 bottom-0 w-full h-2/3 bg-gradient-to-b from-transparent to-black">
                            <div className="hidden md:block absolute bottom-6 left-6 right-6 text-white mx-8 md:mx-16 space-y-6">
                                <h3 className="text-3xl font-bold uppercase">
                                    Our Faculty
                                </h3>
                                <p className="my-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit sit quaerat laboriosam itaque modi non ratione doloremque. Iste temporibus odit quae laborum possimus recusandae.
                                </p>
                                <Link href='/about/instructors' className="uppercase font-semibold cursor-pointer">
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    const getMobileContent = () => {
        switch (select) {
            case 'alumni':
                return (
                    <div className="md:hidden mx-5 mt-5">
                        <h3 className="text-3xl font-bold uppercase">
                            Our Alumni
                        </h3>
                        <p className="my-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit sit quaerat laboriosam itaque modi non ratione doloremque. Iste temporibus odit quae laborum possimus recusandae.
                        </p>
                        <div className="uppercase font-semibold cursor-pointer">
                            Learn more
                        </div>
                    </div>
                );
            case 'facilities':
                return (
                    <div className="md:hidden mx-5 mt-5">
                        <h3 className="text-3xl font-bold uppercase">
                            Our Facilities
                        </h3>
                        <p className="my-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit sit quaerat laboriosam itaque modi non ratione doloremque. Iste temporibus odit quae laborum possimus recusandae.
                        </p>
                        <div className="uppercase font-semibold cursor-pointer">
                            Learn more
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="md:hidden mx-5 mt-5">
                        <h3 className="text-3xl font-bold uppercase">
                            Our Faculty
                        </h3>
                        <p className="my-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit sit quaerat laboriosam itaque modi non ratione doloremque. Iste temporibus odit quae laborum possimus recusandae.
                        </p>
                        <div className="uppercase font-semibold cursor-pointer">
                            Learn more
                        </div>
                    </div>
                )
        }
    }

    return (
        <div className="my-24">
            <div className="mx-5 lg:mx-10 leading-8">
                <div className="border-t-[6px] border-green-700 w-1/4"></div>
                <h1 className="text-4xl md:text-5xl text-slate-700 font-black mt-8">
                    Meet the MIEA Family
                </h1>
            </div>
            <div className="lg:hidden bg-black w-full md:w-3/4 h-[7rem] mt-8 transform">
                <div className="text-white text-sm sm:text-base md:text-lg uppercase font-bold flex items-center space-x-5 sm:space-x-8 md:space-x-10 h-full ml-3 sm:ml-8 md:ml-14 tracking-wider">
                    <div className={`border-l-4 md:border-l-8 pl-4 md:pl-6 cursor-pointer transition-colors hover:border-l-green-500 ${select === 'faculty' ? 'border-l-green-500' : ''}`} onClick={() => handleClick('faculty')}>
                        Our faculty
                    </div>
                    <div className={`border-l-4 md:border-l-8 pl-4 md:pl-6 cursor-pointer transition-colors hover:border-l-green-500 ${select === 'alumni' ? 'border-l-green-500' : ''}`} onClick={() => handleClick('alumni')}>
                        Our Alumni
                    </div>
                    <div className={`border-l-4 md:border-l-8 pl-4 md:pl-6 cursor-pointer transition-colors hover:border-l-green-500 ${select === 'facilities' ? 'border-l-green-500' : ''}`} onClick={() => handleClick('facilities')}>
                        Our facilities
                    </div>
                </div>
            </div>
            {getMobileContent()}
            <div className="flex items-center justify-center my-10 lg:mb-20 lg:mt-16 mx-5 sm:mx-10">
                <div className="relative">
                    <div className="absolute bg-green-700 right-[80%] sm:right-[59%] md:right-[60%] lg:right-[55%] bottom-[35%] sm:bottom-[38%] md:bottom-[40%] lg:bottom-[45%] w-[30rem] min-[500px]:w-[38rem] sm:w-[40rem] md:w-[50rem] lg:w-[60rem] h-full transform translate-x-1/2 translate-y-1/2 -z-10"></div>
                    <div className="hidden lg:block absolute bg-black right-[95%] bottom-[75%] w-[18rem] h-[12rem] transform translate-x-1/2 translate-y-1/2 z-50">
                        <div className="text-white text-xl uppercase font-bold flex flex-col justify-evenly h-full ml-14">
                            <div className={`border-l-8 pl-6 cursor-pointer transition-colors hover:border-l-green-500 ${select === 'faculty' ? 'border-l-green-500' : ''}`} onClick={() => handleClick('faculty')}>
                                Our faculty
                            </div>
                            <div className={`border-l-8 pl-6 cursor-pointer transition-colors hover:border-l-green-500 ${select === 'alumni' ? 'border-l-green-500' : ''}`} onClick={() => handleClick('alumni')}>
                                Our Alumni
                            </div>
                            <div className={`border-l-8 pl-6 cursor-pointer transition-colors hover:border-l-green-500 ${select === 'facilities' ? 'border-l-green-500' : ''}`} onClick={() => handleClick('facilities')}>
                                Our facilities
                            </div>
                        </div>
                    </div>
                    {getContent()}
                </div>
            </div>
        </div >
    );
}

export default MieaFamily;