
'use client'
import Image from "next/image"

export default function User({name = "Daniel Ukuhor",position = "Software Engineer",imageSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"}){

    return (
              <div className="flex">
                <Image className="rounded-full" src={imageSrc} width={20} height={20}/>
                <div>
                    <p>{name}</p>
                    <p>{position}</p>
                </div>
              </div>
            )
}