import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';


interface IconWrapperProps {
    icon: IconProp | string;
    className?: string;
    transform?: string;
    size?: SizeProp;
    color?: string;
}


function IconWrapper({ icon, className, transform, size, color }: IconWrapperProps) {
    if (typeof icon === "string") {
        return (
            <img src={icon} className={className + " " + "-mt-1 inline"} />
        )
    } else {
        return <FontAwesomeIcon icon={icon} className={className} transform={transform} size={size} color={color} />
    }
}

export default IconWrapper;