
import Image from "next/image"


export default function ImageAvatar({url,size,orientation=""}){

    function positionImage(){
        switch(orientation.toLowerCase()){
            case "center": return "items-center"
            case "end": return "items-end"
            default : return "items-start"
        }
    }

    return (
                <div style={{width:`${size}px`,height:`${size}px`}} className={` relative overflow-hidden rounded-full flex ${positionImage()} `} >
                    <Image className="rounded-full"  alt="Your Profile image" src={url} objectFit="cover"  fill />
                </div>
            )
}