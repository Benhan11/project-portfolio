import IconWrapper from "components/IconWrapper";
import icons from 'assets/images/icons';


function Footer() {
    return (
        <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24 flex flex-row items-center justify-between h-32 mt-10 space-x-36">
            <div className="flex flex-col items-start text-slate-400 text-sm">
                <a href="https://www.linkedin.com/in/benjamin-hansson-88131b1a2/" target="_blank" rel="noopener noreferrer">
                    <IconWrapper icon={icons['linkedinIcon']} color="DodgerBlue" />&nbsp;Benjamin Hansson
                    <IconWrapper icon={icons['opensNewPageBoxIcon']} transform="shrink-6 right-4" />
                </a>
                <a href="https://github.com/Benhan11" target="_blank" rel="noopener noreferrer">
                    <IconWrapper icon={icons['githubIcon']} color="White" className="-ms-0.5" transform="right-1" />&nbsp;Benhan11
                    <IconWrapper icon={icons['opensNewPageBoxIcon']} transform="shrink-6 right-4" />
                </a>
            </div>
            <p className="flex flex-col items-end text-slate-400 text-sm">
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