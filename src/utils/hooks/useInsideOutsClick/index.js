import { useEffect, useRef } from "react";

export function useInsideOutsClick(onInsideClick, onOutsideClick) {
    const ref = useRef(null);

    useEffect(() => {
        function handleClick(event) {
            if (ref.current && ref.current.contains(event.target)) {
                onInsideClick?.();
            } else {
                onOutsideClick?.();
            }
        }

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                onOutsideClick?.();
            }
        }

        document.addEventListener("mousedown", handleClick);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onInsideClick, onOutsideClick]);

    return ref;
}
