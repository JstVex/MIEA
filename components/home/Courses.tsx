import Image from "next/image";
import Link from "next/link";

const Courses = () => {
    return (
        <div className="my-24">
            <div className="mx-10 leading-8">
                <div className="border-t-[6px] border-green-700 w-1/4"></div>
                <h1 className="text-5xl text-slate-700 font-black mt-8">
                    Trust your child&apos;s education with our courses.
                </h1>
                <div className="ml-24 mt-10 text-lg font-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum odio impedit animi quasi tenetur reprehenderit commodi autem, illo distinctio molestias vitae laborum suscipit repellendus assumenda ratione? Laudantium velit eum eaque.
                </div>
            </div>
            <div className="flex items-center justify-center my-20 space-x-10 mx-10">
                <div className="relative group">
                    <div className="absolute bg-green-700 right-[85%] bottom-[75%] w-[15rem] h-[15rem] transform translate-x-1/2 translate-y-1/2 -z-10"></div>
                    <Image
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JvdXAlMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D"
                        alt="courses"
                        width={500}
                        height={500}
                        className="w-[30rem] h-auto"
                    />
                    <div className="absolute left-0 bottom-0 w-full h-1/3 bg-gradient-to-b from-transparent to-black group-hover:h-full">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <h3 className="text-2xl font-bold">
                                    International General Certificate of Secondary Education
                                </h3>
                                <p className="my-3 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit sit quaerat laboriosam itaque modi non ratione doloremque. Iste temporibus odit quae laborum possimus recusandae.
                                </p>
                                <Link href="/" className="text-green-500 inline-block">
                                    Read more
                                </Link>
                            </div>
                        </div>
                    </div>
                    <p className="absolute px-4 text-xl font-semibold text-white bottom-4 z-50 group-hover:hidden">
                        O Level IGCSE
                    </p>
                </div>
                <div className="relative group">
                    <Image
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JvdXAlMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D"
                        alt="courses"
                        width={500}
                        height={500}
                        className="w-[30rem] h-auto"
                    />
                    <div className="absolute left-0 bottom-0 w-full h-1/3 bg-gradient-to-b from-transparent to-black group-hover:h-full">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <h3 className="text-2xl font-bold">
                                    International General Certificate of Secondary Education
                                </h3>
                                <p className="my-3 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit sit quaerat laboriosam itaque modi non ratione doloremque. Iste temporibus odit quae laborum possimus recusandae.
                                </p>
                                <Link href="/" className="text-green-500 inline-block">
                                    Read more
                                </Link>
                            </div>
                        </div>
                    </div>
                    <p className="absolute px-4 text-xl font-semibold text-white bottom-4 z-50 group-hover:hidden">
                        Pre IGCSE
                    </p>
                    <div className="absolute bg-green-700 left-[35%] bottom-[25%] w-[15rem] h-[15rem] transform translate-x-1/2 translate-y-1/2 -z-10"></div>
                </div>
            </div>
        </div>
    );
}

export default Courses;