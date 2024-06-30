import IconWrapper from 'components/IconWrapper';
import icons from 'assets/images/icons';
import images from 'assets/images/images';
import { useEffect } from 'react';


interface ModalProps {
    imageName: string;
    closeCallback: () => void;
}


function ImageModal({ imageName, closeCallback }: ModalProps) {
    // Close on mouse click outside of image
    const handleMouseClicked = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) closeCallback();
    };
    
    // Close on Escape
    useEffect(() => {
        const keyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') closeCallback();
        }

        document.addEventListener('keydown', keyDown);
        return () => { document.removeEventListener('keydown', keyDown); }
    });


    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/75" onClick={handleMouseClicked}>
            <button className="absolute top-2 right-3 drop-shadow z-10" onClick={closeCallback}>
                <IconWrapper icon={icons['closeIcon']} transform="grow-10" className="md:hidden" />
            </button>
            <div className="relative">
                <button className="absolute sm:top-2 top-0 sm:right-[-2.5rem] right-0 drop-shadow z-10" onClick={closeCallback}>
                    <IconWrapper icon={icons['closeIcon']} transform="grow-16" className="hidden md:inline-block" />
                </button>
                <img src={images[imageName]} className="max-h-[90vh] max-w-[80vw] rounded drop-shadow shadow-xl" />
            </div>
        </div>
    );
}

export default ImageModal;