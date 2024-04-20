import {
    faFontAwesome as fontAwesomeIcon,
    faGithub as githubIcon,
    faLinkedin as linkedinIcon,
    faJs as jsIcon, 
    faNodeJs as nodeJsIcon, 
    faBootstrap as bootstrapIcon,
    faPython as pythonIcon,
} from '@fortawesome/free-brands-svg-icons';

import {
    faArrowUpRightFromSquare as opensNewPageBoxIcon,
    faArrowUp as opensNewPageArrowIcon,
    faChevronLeft as backIcon,
} from '@fortawesome/free-solid-svg-icons'


import { IconProp } from '@fortawesome/fontawesome-svg-core';

type IconsType = {
    [key: string]: IconProp;
}

const icons: IconsType = {
    fontAwesomeIcon,
    githubIcon,
    linkedinIcon,
    jsIcon,
    nodeJsIcon,
    bootstrapIcon,
    pythonIcon,
    opensNewPageBoxIcon,
    opensNewPageArrowIcon,
    backIcon,
};


export default icons;