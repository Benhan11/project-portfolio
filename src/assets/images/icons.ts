/* Manually added icons, represented as type string */
import boxiconsIcon from 'assets/images/manual-icons/boxiconsIcon.svg';
import typescriptIcon from 'assets/images/manual-icons/typescriptIcon.svg';
import tailwindIcon from 'assets/images/manual-icons/tailwindIcon.svg';


/* Font awesome icons, represented as type IconProp */
import {
    faFontAwesome as fontAwesomeIcon,
    faGithub as githubIcon,
    faLinkedin as linkedinIcon,
    faJs as jsIcon, 
    faNodeJs as nodeJsIcon, 
    faBootstrap as bootstrapIcon,
    faPython as pythonIcon,
    faHtml5 as html5Icon,
    faReact as reactIcon,
} from '@fortawesome/free-brands-svg-icons';

import {
    faArrowUpRightFromSquare as opensNewPageBoxIcon,
    faArrowUp as opensNewPageArrowIcon,
    faChevronLeft as backIcon,
} from '@fortawesome/free-solid-svg-icons'

import { IconProp } from '@fortawesome/fontawesome-svg-core';

type IconsType = {
    [key: string]: IconProp | string;
}


const icons: IconsType = {
    fontAwesomeIcon,
    boxiconsIcon,
    githubIcon,
    linkedinIcon,
    jsIcon,
    nodeJsIcon,
    bootstrapIcon,
    pythonIcon,
    html5Icon,
    reactIcon,
    typescriptIcon,
    tailwindIcon,
    opensNewPageBoxIcon,
    opensNewPageArrowIcon,
    backIcon,
};


export default icons;