import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from 'assets/images/icons';


interface TagProps {
    data: TagType;
}

type TagType = {
    name: string;
    color: string;
    iconName: string;
}


function ProjectTag({ data }: TagProps) {
    return (
        <span className={`flex-none border rounded-full border-${data.color}-500 bg-${data.color}-200/5 text-${data.color}-500 px-3 pt-1 pb-0.5 me-1`}>
            <FontAwesomeIcon icon={icons[data.iconName]} /> {data.name}</span>
    );
}

export default ProjectTag;