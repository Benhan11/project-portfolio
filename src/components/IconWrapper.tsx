import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';


interface IconWrapperProps {
    icon: IconProp | string;
    className?: string;
    transform?: string;
    size?: SizeProp;
    color?: string;
}


/**
 * Wrapper class for handling icons. Simplifies adding icons as they may be from
 * a font library or manually added. This component generalizes adding of icons, 
 * necessary for dynamic rendering of icons. Also allowing for customization, 
 * specified by the provided props.
 *  
 * @returns An icon, either a normal HTML <img /> or a <FontAwesomeIcon />.
 */
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