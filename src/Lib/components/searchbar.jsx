
import {SearchNormal} from "iconsax-reactjs"

export default function SearchBar(){
    return (
             <div className="flex items-center px-2">
                <SearchNormal className="font-extrabold" />
                <input type="text" placeholder="Search..." className="  border-none outline-none p-2" />
             </div>
            )
}