import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="sticky inset-x-0 top-0 z-10 bg-opacity-60 bg-zinc-100 backdrop-blur-lg">
      <div className="container flex items-center justify-between py-8 ">
        
        {/* Logo clickeable */}
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="w-60 h-36 -my-10 cursor-pointer"
          />
        </Link>

        <Navigation />
      </div>
    </div>
  );
}
