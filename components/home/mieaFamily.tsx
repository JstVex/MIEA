'use client'

import Image from "next/image";
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
                    <>
                        <Image
                            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhZHVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                            alt="Alumni"
                            width={500}
                            height={500}
                            className="w-[60rem] h-auto transition-opacity duration-500 ease-in-out opacity-100"
                        />
                        <div className="absolute left-0 bottom-0 w-full h-2/3 bg-gradient-to-b from-transparent to-black">
                            <div className="absolute bottom-6 left-6 right-6 text-white mx-16 space-y-6">
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
                        </div>
                    </>
                );
            case 'facilities':
                return (
                    <>
                        <Image
                            src="https://images.unsplash.com/photo-1585637071663-799845ad5212?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsYXNzcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
                            alt="Facilities"
                            width={500}
                            height={500}
                            className="w-[60rem] h-auto transition-opacity duration-500 ease-in-out opacity-100"
                        />
                        <div className="absolute left-0 bottom-0 w-full h-2/3 bg-gradient-to-b from-transparent to-black">
                            <div className="absolute bottom-6 left-6 right-6 text-white mx-16 space-y-6">
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
                        </div>
                    </>
                );
            default:
                return (
                    <>
                        <Image
                            src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhY2hlcnN8ZW58MHx8MHx8fDA%3D"
                            alt="Faculty"
                            width={500}
                            height={500}
                            className="w-[60rem] h-auto transition-opacity duration-500 ease-in-out opacity-100"
                        />
                        <div className="absolute left-0 bottom-0 w-full h-2/3 bg-gradient-to-b from-transparent to-black">
                            <div className="absolute bottom-6 left-6 right-6 text-white mx-16 space-y-6">
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
                        </div>
                    </>
                );
        }
    };

    return (
        <div className="my-24">
            <div className="mx-10 leading-8">
                <div className="border-t-[6px] border-green-700 w-1/4"></div>
                <h1 className="text-5xl text-slate-700 font-black mt-8">
                    Meet the MIEA Family
                </h1>
            </div>
            <div className="flex items-center justify-center my-20 mx-10">
                <div className="relative">
                    <div className="absolute bg-green-700 right-[55%] bottom-[45%] w-[60rem] h-full transform translate-x-1/2 translate-y-1/2 -z-10"></div>
                    <div className="absolute bg-black right-[95%] bottom-[75%] w-[18rem] h-[12rem] transform translate-x-1/2 translate-y-1/2 z-50">
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
        </div>
    );
}

export default MieaFamily;