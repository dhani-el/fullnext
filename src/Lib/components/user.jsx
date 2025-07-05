
'use client'
import Image from "next/image"

export default function User({name = "Daniel Ukuhor",position = "Software Engineer",imageSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"}){

    return (
              <div className="flex">
                <div className="w-[3rem] h-[3rem] overflow-hidden rounded-full flex items-center justify-center" >
                  <Image className="rounded-full"  alt="Your Profile image" src={imageSrc}  width={48} height={48}/>
                </div>
                <div>
                    <p>{name}</p>
                    <p>{position}</p>
                </div>
              </div>
            )
}