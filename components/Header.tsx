import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="sticky inset-x-0 top-0 z-10 bg-opacity-60 bg-zinc-100 backdrop-blur-lg">
      <div className="container flex items-center justify-between py-8">
        
        {/* Logo clickeable (responsive) */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={logo}
            alt="logo"
            className="cursor-pointer object-contain
                       w-40 h-24           /* xs / mobile */
                       sm:w-44 sm:h-26     /* small */
                       md:w-52 md:h-32     /* medium */
                       lg:w-60 lg:h-36     /* large / desktop */
                       -my-6 sm:-my-8 md:-my-10"
          />
        </Link>
      
        <Navigation />
      </div>
    </div>
  );
}
