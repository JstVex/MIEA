import Image from "next/image";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-auto mt-20">
            <div className="my-auto">
                <div className="flex flex-col mx-10 lg:ml-10 lg:mr-0">
                    <div className="border-t-[6px] border-green-700 w-1/2"></div>
                    <div className="flex flex-col mt-8 space-y-8 leading-8">
                        <h2 className="text-4xl text-slate-700 font-bold">
                            At MIEA, we know, value and challenge each student
                        </h2>
                        <p className="font-light">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam quae veniam eaque reprehenderit odit aut ab officia. Aliquam pariatur quisquam, veniam illum sed odio voluptatem recusandae id adipisci? Error, debitis.
                        </p>
                        <p className="font-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto enim error quis corporis quos numquam natus placeat modi perferendis incidunt eius animi, facilis, debitis, officia iure qui ducimus mollitia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorum debitis, id tempora quam error autem quaerat non exercitationem explicabo consequatur.
                        </p>
                        <Link href='/' className="flex items-center text-green-800 space-x-2">
                            <div className="text-lg font-semibold ">
                                Read more
                            </div>
                            <MoveRight />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mx-auto  mt-10 lg:mt-0">
                <div className="relative overflow-hidden">
                    <Image
                        src='https://images.unsplash.com/photo-1700405936040-a593ec18ec78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D'
                        alt="hey"
                        width={500}
                        height={500}
                        className="w-[85vw] h-[60vw] lg:w-96 lg:h-[70vh]"
                    />
                </div>
                <div className="absolute bg-green-700 right-[55%] -bottom-[120%] lg:right-[21%] lg:-bottom-[56%] w-[85vw] h-[60vw] lg:w-96 lg:h-[70vh] transform translate-x-1/2 translate-y-1/2 -z-10"></div>
            </div>

        </div>
    );
}

export default AboutSection;