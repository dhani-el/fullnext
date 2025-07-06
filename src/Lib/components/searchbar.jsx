"use client"
import {SearchNormal} from "iconsax-reactjs";
import { useState } from "react";

export default function SearchBar({endpoint,method,searchProperty,isQueryParam,receiver}){
   const [searchValue,setSearchValue] = useState('');

   function handleChange(value){
      setSearchValue(()=> value);
   }

   // hold of with the implementation till you learn tanstack query
   function makeASearch(){
      if (method.toLowerCase() == "post") {
         
      }else if (method.toLowerCase() == "get") {
         
      }
   }

    return (
             <div className="flex items-center px-2">
                <SearchNormal className="font-extrabold" />
                <input onChange={(e)=>handleChange(e.target.value)} type="text" placeholder="Search..." className="  border-none outline-none p-2" />
             </div>
            )
}