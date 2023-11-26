import Image from "next/image";

interface InstructorProps {
    name: string;
    image: string;
    subject: string;
    description: string;
}

const Instructor: React.FC<InstructorProps> = ({ name, image, subject, description }) => {
    return (
        <div className="w-full md:w-[18rem] h-auto flex flex-col space-y-1 my-6 mx-5 sm:m-10">
            <Image
                src={image}
                alt="instructor"
                width={500}
                height={500}
                className="w-full h-[35rem] md:w-[18rem] md:h-[30rem] object-cover"
            />
            <div className="text-xl font-semibold tracking-wide pt-5">
                {name}
            </div>
            <div className="text-lg font-light tracking-wider p-0 m-0">
                {subject}
            </div>
            <div className="text-base leading-8 pt-3">
                {description}
            </div>
        </div>
    );
}

export default Instructor;