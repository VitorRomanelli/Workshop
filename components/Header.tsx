import Image from "next/Image";
import Link from "next/Link";

export default function Header() {
    return (
        <header className="flex justify-center md:justify-between py-2 md:py-4 items-center">
            <Image src="/img/logo.svg" alt="logo" width={150} height={33} />

            <nav className="hidden md:block space-x-8">
                <Link href="/nextjs">
                    <a className="tracking-wide hover:text-gray-300"  >NextJS</a>
                </Link>
                <Link href="/tailwind">
                    <a className="tracking-wide hover:text-gray-300"  >TailWind</a>
                </Link>
                <Link href="/framermotion">
                    <a className="tracking-wide hover:text-gray-300"  >Framer Motion</a>
                </Link>
            </nav>
        </header>
    )
}