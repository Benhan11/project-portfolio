import {
    faFontAwesome as fontAwesomeIcon,
    faGithub as githubIcon1,
    faGithubSquare as githubIcon2,
    faLinkedin as linkedinIcon1,
    faLinkedinIn as linkedinIcon2,
    faJs as jsIcon, 
    faNodeJs as nodeJsIcon, 
    faBootstrap as bootstrapIcon,
    faPython as pythonIcon,
} from '@fortawesome/free-brands-svg-icons';

import {
    faArrowUpRightFromSquare as opensNewPageIcon,
    faChevronLeft as backIcon,
} from '@fortawesome/free-solid-svg-icons'


import { IconProp } from '@fortawesome/fontawesome-svg-core';

type IconsType = {
    [key: string]: IconProp;
}

const icons: IconsType = {
    fontAwesomeIcon,
    githubIcon1,
    githubIcon2,
    linkedinIcon1,
    linkedinIcon2,
    jsIcon,
    nodeJsIcon,
    bootstrapIcon,
    pythonIcon,
    opensNewPageIcon,
    backIcon,
};


export default icons;