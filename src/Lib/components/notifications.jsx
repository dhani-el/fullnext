'use client'

import {Notification} from "iconsax-reactjs"
import { useState } from "react"

export default function NotificationComponent(){
    const [count,setCount] = useState(0)
    return (
              <div>
                <span className=" relative left-2.5 flex items-center justify-center w-fit h-fit px-2 rounded-full bg-amber-600 text-white">
                    {count}
                </span>
                <Notification/>
              </div>
            )
}