import Instructor from "@/components/about/instructor";
import Image from "next/image";

const instructors: { name: string; image: string; subject: string; description: string }[] = [
    {
        name: "May Thu Aung",
        image: "https://images.unsplash.com/photo-1517598024396-46c53fb391a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        subject: "Computer Science + Founder",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quod delectus ducimus facilis, ut corrupti, quia inventore quis omnis voluptas consectetur, ea voluptatum nulla ad consequatur sint officiis labore. Exercitationem!"
    },
    {
        name: "Sayar Kaung",
        image: "https://images.unsplash.com/photo-1517598024396-46c53fb391a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        subject: "Information Technology + Co-Founder",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quod delectus ducimus facilis, ut corrupti, quia inventore quis omnis voluptas consectetur, ea voluptatum nulla ad consequatur sint officiis labore. Exercitationem!"
    },
    {
        name: "May Thu Aung",
        image: "https://images.unsplash.com/photo-1517598024396-46c53fb391a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        subject: "Maths B + Further Pure Maths",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quod delectus ducimus facilis, ut corrupti, quia inventore quis omnis voluptas consectetur, ea voluptatum nulla ad consequatur sint officiis labore. Exercitationem!"
    },
    {
        name: "May Thu Aung",
        image: "https://images.unsplash.com/photo-1517598024396-46c53fb391a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        subject: "ESL + Language B",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quod delectus ducimus facilis, ut corrupti, quia inventore quis omnis voluptas consectetur, ea voluptatum nulla ad consequatur sint officiis labore. Exercitationem!"
    },
    {
        name: "May Thu Aung",
        image: "https://images.unsplash.com/photo-1517598024396-46c53fb391a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        subject: "Physics",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quod delectus ducimus facilis, ut corrupti, quia inventore quis omnis voluptas consectetur, ea voluptatum nulla ad consequatur sint officiis labore. Exercitationem!"
    },
    {
        name: "May Thu Aung",
        image: "https://images.unsplash.com/photo-1517598024396-46c53fb391a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        subject: "Chemistry",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quod delectus ducimus facilis, ut corrupti, quia inventore quis omnis voluptas consectetur, ea voluptatum nulla ad consequatur sint officiis labore. Exercitationem!"
    },
    {
        name: "May Thu Aung",
        image: "https://images.unsplash.com/photo-1517598024396-46c53fb391a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        subject: "Business",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quod delectus ducimus facilis, ut corrupti, quia inventore quis omnis voluptas consectetur, ea voluptatum nulla ad consequatur sint officiis labore. Exercitationem!"
    },
    {
        name: "May Thu Aung",
        image: "https://images.unsplash.com/photo-1517598024396-46c53fb391a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        subject: "Economy",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quod delectus ducimus facilis, ut corrupti, quia inventore quis omnis voluptas consectetur, ea voluptatum nulla ad consequatur sint officiis labore. Exercitationem!"
    },
]

const Instructors = () => {
    return (
        <div>
            <div className="w-full relative">
                <div className="absolute flex flex-col z-50 left-0 top-0 min-w-[25rem] w-[600px] mt-[62.5vh] bg-gray-900 text-white py-8 px-16">
                    <div className="text-4xl font-extrabold">
                        Meet our instructors
                    </div>
                    <div className="mt-5 font-light leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione minus architecto excepturi eligendi? Voluptates ab praesentium necessitatibus itaque iste illum
                    </div>
                </div>
                <Image
                    src={"https://images.unsplash.com/photo-1543269865-cbf427effbad?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHN8ZW58MHx8MHx8fDA%3D"}
                    alt="about us"
                    width={500}
                    height={500}
                    className="w-full h-[75vh] object-cover"
                />
            </div>
            <div className="mx-5 mt-[20vh] flex justify-center flex-wrap">
                {instructors.map((instructor) => (
                    <Instructor
                        key={instructor.name}
                        name={instructor.name}
                        image={instructor.image}
                        subject={instructor.subject}
                        description={instructor.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Instructors;