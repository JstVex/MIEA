import Instructor from "@/components/about/instructor";
import Banner from "@/components/ui/banner";
import Body from "@/components/ui/body";

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
            <Banner
                title="Meet our instructors"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione minus architecto excepturi eligendi? Voluptates ab praesentium necessitatibus itaque iste illum"
                imageUrl="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHN8ZW58MHx8MHx8fDA%3D"
                imageAlt="Our instructors"
            />
            <Body className="mx-3 md:mx-5 lg:mx-5 flex justify-center flex-wrap">
                {instructors.map((instructor) => (
                    <Instructor
                        key={instructor.name}
                        name={instructor.name}
                        image={instructor.image}
                        subject={instructor.subject}
                        description={instructor.description}
                    />
                ))}
            </Body>
        </div>
    );
}

export default Instructors;