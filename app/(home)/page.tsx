import AboutSection from "@/components/home/About";
import Courses from "@/components/home/Courses";
import ImageSlider from "@/components/home/imageSlider";

const Home = () => {
    return (
        <div>
            <ImageSlider />
            <AboutSection />
            <Courses />
        </div>
    );
}

export default Home;