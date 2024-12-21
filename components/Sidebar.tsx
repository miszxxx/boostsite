import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react"; 
import RevealAnimation from "./framer/RevealAnimation";
import Link from "next/link";
import { LINKS, LandingPageLinks } from "./config";
import { DiscordIcon } from "@/assests/svgs";

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="brand" className="px-2">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-start brand_gradient bg-clip-text text-transparent">
            Navigation
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-center gap-2 my-4">
          {LandingPageLinks?.map((link, index) => (
            <Link key={link.name} href={link.link} className="w-full">
              <div className="py-1.5 rounded-md text-sm duration-200 w-full">
                {link.name}
              </div>
            </Link>
          ))}
          <Link className="w-full" href={LINKS.DISCORD} target="_blank">
            <Button variant={"brand"} className="w-full">
              <DiscordIcon className="text-white h-[18px] w-[18px] " />
              <span className="ml-2">Discord</span>
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
