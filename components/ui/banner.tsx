import Image from "next/image";

interface BannerProps {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
}
const Banner: React.FC<BannerProps> = ({ title, description, imageUrl, imageAlt }) => {
    return (
        <div className="w-full relative">
            <Image
                src={imageUrl}
                alt={imageAlt}
                width={500}
                height={500}
                className="w-full h-[50vh] md:h-[65vh] lg:h-[75vh] object-cover"
            />
            <div className="md:absolute flex flex-col z-50 md:left-0 md:top-0 md:min-w-[25rem] w-full md:w-[600px] md:mt-[52.5vh] lg:mt-[62.5vh] bg-gray-900 text-white py-8 px-6 md:px-16">
                <div className="text-2xl md:text-4xl font-extrabold">
                    {title}
                </div>
                <div className="text-[0.9rem] md:text-base mt-5 font-light leading-relaxed">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default Banner;