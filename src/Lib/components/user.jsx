
'use client'
import ImageAvatar from "./ImageAvatar";

export default function User({name = "Daniel Ukuhor",position = "Software Engineer",imageSrc="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"}){

    return (
              <div className="flex gap-4">
                <ImageAvatar url={imageSrc} size={48}  />
                <div>
                    <p className="font-bold" >{name}</p>
                    <p className="font-light text-sm " >{position}</p>
                </div>
              </div>
            )
}