import { useEffect, useState, RefObject } from "react";


interface HookProps {
    element: RefObject<HTMLElement>;
}


function useIsVisible({ element }: HookProps) {
    const [ isVisible, setIsVisible ] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, { threshold: 0.5 });

        if (element.current) {
            observer.observe(element.current);
        }

        return () => {
            if (element.current) {
                observer.disconnect();
            }
        };
    }, [element]);

    return isVisible;
}

export default useIsVisible;