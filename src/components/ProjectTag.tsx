import IconWrapper from 'components/IconWrapper';
import icons from 'assets/images/icons';


interface TagProps {
    data: TagType;
}

type TagType = {
    name: string;
    color: string;
    bgColor: string;
    iconName: string;
}


/**
 * Builds and returns a project tag as specified by the provided tag data.
 */
function ProjectTag({ data }: TagProps) {
    return (
        <span className={`flex-none border drop-shadow rounded-full border-${data.color} bg-${data.bgColor} text-${data.color} text-base px-3 pt-1 pb-0.5 me-1`}>
            <IconWrapper icon={icons[data.iconName]} className="mb-0" /> {data.name}</span>
    );
}

export default ProjectTag;