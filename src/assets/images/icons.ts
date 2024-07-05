/* Manually added icons, represented as type string */
import boxiconsIcon from 'assets/images/manual-icons/boxiconsIcon.svg';
import typescriptIcon from 'assets/images/manual-icons/typescriptIcon.svg';
import tailwindIcon from 'assets/images/manual-icons/tailwindIcon.svg';
import flaskIcon from 'assets/images/manual-icons/flaskIcon.svg';
import jinjaIcon from 'assets/images/manual-icons/jinjaIcon.svg';
import springIcon from 'assets/images/manual-icons/spring.svg';
import postgreSQLIcon from 'assets/images/manual-icons/postgresql.svg';


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
    faDocker as dockerIcon,
    faJava as javaIcon,
} from '@fortawesome/free-brands-svg-icons';

import {
    faArrowUpRightFromSquare as opensNewPageBoxIcon,
    faArrowUp as opensNewPageArrowIcon,
    faArrowDown as scrollArrowIcon,
    faChevronLeft as backIcon,
    faCircleChevronUp as upIcon,
    faXmark as closeIcon,
} from '@fortawesome/free-solid-svg-icons'

import { IconProp } from '@fortawesome/fontawesome-svg-core';

type IconsType = {
    [key: string]: IconProp | string;
};


const icons: IconsType = {
    opensNewPageBoxIcon,
    opensNewPageArrowIcon,
    scrollArrowIcon,
    backIcon,
    upIcon,
    closeIcon,

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
    dockerIcon,
    flaskIcon,
    jinjaIcon,
    javaIcon,
    springIcon,
    postgreSQLIcon,
};


export default icons;