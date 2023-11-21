import Logo from "./logo";
import { NavigationMenuBar } from "./menu";
import MobileMenu from "./mobile";

const Navbar = () => {
    return (
        <div className="flex items-center">
            <div className="flex flex-1 items-center mt-1">
                <Logo />
                <NavigationMenuBar />
            </div>
            <MobileMenu />
        </div>
    );
}

export default Navbar;