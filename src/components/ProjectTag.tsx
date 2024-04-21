import IconWrapper from 'components/IconWrapper';
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
            <IconWrapper icon={icons[data.iconName]} className="mb-0" /> {data.name}</span>
    );
}

export default ProjectTag;