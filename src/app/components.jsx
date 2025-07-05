
import { HamburgerMenu } from "iconsax-reactjs";
import Spacer from "@/Lib/components/spacer";
import SearchBar from "@/Lib/components/searchbar";
import Notification from "@/Lib/components/notifications";
import User from "@/Lib/components/user";

export function Header(){
    return (
              <div className="w-screen p-4 lg:p-8 flex justify-between items-center ">
                <HamburgerMenu className="block md:hidden" />
                <Logo/>
                <SearchBar/>
                <div className="flex gap-4">
                    <Notification/>
                    <User/>
                </div>
              </div>
            )
}

function Logo(){
  const school_name = "Charis"

    return (
                <div>
                    <p className="text-2xl" >{school_name}</p>
                </div>
            )
}