import {avatarAPIUrl} from "../../utils/constants.ts";

interface AvatarPlayerCardProps {
    name: string
    sizeImg?: number
}

export default function AvatarPlayerCard({name, sizeImg = 48}: AvatarPlayerCardProps) {
    return (
        <img src={`${avatarAPIUrl}${name}`} alt={name}
             className="rounded-full bg-gray-100" style={{width: sizeImg, height: sizeImg}}>
        </img>
    )
}