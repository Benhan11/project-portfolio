import { useState } from 'react';
import IconWrapper from 'components/IconWrapper';
import icons from 'assets/images/icons';


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
    
    window.addEventListener('scroll', toggleVisible);

    return (
        <button className={`fixed sm:bottom-12 bottom-8 lg:end-12 md:end-10 end-8 ${visible ? "inline-block" : "hidden"}`} onClick={backToTop}>
            <IconWrapper icon={icons['upIcon']} transform="grow-8" />
        </button>
    );
}

export default ScrollButton;