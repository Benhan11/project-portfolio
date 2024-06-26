import { useEffect, useState, RefObject } from "react";


interface HookProps {
    elements: Array<RefObject<HTMLElement>>;
}


/**
 * Hook that tracks visiblity status of elements provided. Does so utilizing the
 * IntersectionObserver interface.
 * 
 * @param props - Hook properties.
 * @param props.elements - The array of refs for the elements to track visibility 
 * status for.
 * @returns {Array<boolean>} - An array of booleans representing visibility of 
 * elements.
 */
function useIsVisible({ elements }: HookProps) {
    const [ isVisibleArray, setIsVisibleArray ] = useState<Array<boolean>>([]);
    
    useEffect(() => {
        const observers: Array<IntersectionObserver> = [];

        const updateVisibility = (index: number, entry: IntersectionObserverEntry) => {
            setIsVisibleArray(prevState => {
                const newState = [...prevState];
                newState[index] = entry.isIntersecting;
                return newState;
            });
        };

        elements.forEach((element, index) => {
            const observer = new IntersectionObserver(([entry]) => {
                updateVisibility(index, entry);
            }, { threshold: 0.8 });

            if (element.current) {
                observer.observe(element.current);
            }

            observers.push(observer);
        });

        return () => {
            observers.forEach(observer => {
                observer.disconnect();
            });
        };

    }, [elements]);

    return isVisibleArray;
}

export default useIsVisible;