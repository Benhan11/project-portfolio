import IconWrapper from "components/IconWrapper";
import icons from 'assets/images/icons';


type Props = {
    isProjectPage?: boolean;
};

function Footer(props?: Props) {
    return (
        <div className={'mx-auto max-w-screen-xl flex md:flex-row flex-col md:items-center md:justify-between h-32 mt-10 md:space-x-24 space-y-4' + ' ' +
                        (props && props.isProjectPage ? 'lg:px-24 md:ps-12 md:pe-20 sm:px-24 px-6' : 'lg:px-24 md:px-12 px-6')}>
            <div className="flex flex-col md:items-start text-slate-400 text-sm">
                <a href="https://www.linkedin.com/in/benjamin-hansson-88131b1a2/" target="_blank" rel="noopener noreferrer">
                    <IconWrapper icon={icons['linkedinIcon']} color="DodgerBlue" />&nbsp;Benjamin Hansson
                    <IconWrapper icon={icons['opensNewPageBoxIcon']} transform="shrink-6 right-4" />
                </a>
                <a href="https://github.com/Benhan11" target="_blank" rel="noopener noreferrer">
                    <IconWrapper icon={icons['githubIcon']} color="White" className="-ms-0.5" transform="right-1" />&nbsp;Benhan11
                    <IconWrapper icon={icons['opensNewPageBoxIcon']} transform="shrink-6 right-4" />
                </a>
            </div>
            <p className="flex flex-col md:items-end text-slate-400 text-sm">
                Icons provided by&nbsp;
                <span>
                    <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer"><IconWrapper icon={icons['fontAwesomeIcon']} color="DodgerBlue" /> Font Awesome<IconWrapper icon={icons['opensNewPageArrowIcon']} transform="shrink-6 rotate-45 up-4" /></a>
                    &nbsp;and&nbsp;
                    <a href="https://boxicons.com/" target="_blank" rel="noopener noreferrer"><IconWrapper icon={icons['boxiconsIcon']} /> Boxicons<IconWrapper icon={icons['opensNewPageArrowIcon']} transform="shrink-6 rotate-45 up-4 right-1" /></a>
                </span>
            </p>
        </div>
    )
}

export default Footer;