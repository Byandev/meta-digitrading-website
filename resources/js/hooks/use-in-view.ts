import { useEffect, useRef, useState } from 'react';

const defaultOptions: IntersectionObserverInit = {
    rootMargin: '0px 0px -10% 0px',
};

/**
 * Track whether an element has scrolled into the viewport. Once visible it
 * stays visible, so reveal animations only run once.
 */
export function useInView<T extends Element>(
    options: IntersectionObserverInit = defaultOptions,
) {
    const ref = useRef<T>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element || isInView) {
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect();
            }
        }, options);

        observer.observe(element);

        return () => observer.disconnect();
    }, [isInView, options]);

    return { ref, isInView };
}
