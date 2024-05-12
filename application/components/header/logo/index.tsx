import Image from "next/image";
import Link from "next/link";
import logo from "/public/assets/logo.svg";
import styles from "./index.module.css";

const Logo = (): JSX.Element => {
    return (
        <Link href="/" passHref className={styles.root}>
            <Image
                src={logo}
                alt="Logo: Food Finder"
                sizes="100vw"
                fill
                priority
            />
        </Link>
    );
};

export default Logo;
