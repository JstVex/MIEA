import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={'/'}>
            <Image
                src={'/images/logos/Mainlogo.svg'}
                alt={'MIEA logo'}
                width={150}
                height={150}
                className="ml-3"
            />
        </Link>
    );
}

export default Logo;