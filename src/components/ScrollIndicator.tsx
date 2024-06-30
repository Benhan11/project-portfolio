import { useEffect, useState } from 'react';
import IconWrapper from 'components/IconWrapper';
import icons from 'assets/images/icons';


/**
 * Builds and returns a scroll indicator that appears only before a certain
 * scroll threshold.
 */
function ScrollIndicator() {
    const [visible, setVisible] = useState(true);

    const toggleVisible = () => {
        if (document.documentElement.scrollTop < 200) {
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
        <div className={`fixed flex inset-x-0 items-center justify-center text-slate-200 drop-shadow sm:bottom-12 bottom-8 ${visible ? "inline-flex" : "hidden"} animate-bounce`}>
            <IconWrapper icon={icons['scrollArrowIcon']} transform="grow-8" />
        </div>
    );
}

export default ScrollIndicator;