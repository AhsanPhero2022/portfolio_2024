import Link from "next/link";

import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Soriful <span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden lg:flex xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        <div className="xl:hidden lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
