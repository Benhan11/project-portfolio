import { useEffect, useState } from 'react';
import IconWrapper from 'components/IconWrapper';
import icons from 'assets/images/icons';


/**
 * Builds and returns a button that takes the user back to the top of the page.
 * Only renders at a certain scroll threshold.
 */
function ScrollButton() {
    const [visible, setVisible] = useState(false);

    const backToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

    const toggleVisible = () => {
        if (document.documentElement.scrollTop > 500) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        }
    });

    return (
        <button className={`fixed text-slate-200 drop-shadow sm:bottom-12 bottom-8 lg:end-12 md:end-10 end-8 z-10 ${visible ? "inline-block" : "hidden"}`} onClick={backToTop}>
            <IconWrapper icon={icons['upIcon']} transform="grow-8" />
        </button>
    );
}

export default ScrollButton;