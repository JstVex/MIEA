import AboutSection from "@/components/home/About";
import Courses from "@/components/home/Courses";
import ImageSlider from "@/components/home/imageSlider";
import MieaFamily from "@/components/home/mieaFamily";

const Home = () => {
    return (
        <div>
            <ImageSlider />
            <AboutSection />
            <Courses />
            <MieaFamily />
        </div>
    );
}

export default Home;