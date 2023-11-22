import AboutSection from "@/components/home/About";
import Courses from "@/components/home/Courses";
import ImageSlider from "@/components/home/imageSlider";
import MieaFamily from "@/components/home/mieaFamily";
import WhyChooseUs from "@/components/home/whyChooseUs";

const Home = () => {
    return (
        <div>
            <ImageSlider />
            <AboutSection />
            <Courses />
            <MieaFamily />
            <WhyChooseUs />
        </div>
    );
}

export default Home;