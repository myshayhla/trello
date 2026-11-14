import Link from "next/link";

import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full h-14 px-4 border-b shadow-sm bg-white">
      <div className="mx-auto flex h-full w-full max-w-screen-2xl items-center justify-between">
        <Logo />

        <div className="flex items-center gap-x-4">
          <Button size="sm" variant="outline" >
            <Link href="/sign-in">Login</Link>
          </Button>

          <Button size="sm" >
            <Link href="/sign-up">Get Taskify for free</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
