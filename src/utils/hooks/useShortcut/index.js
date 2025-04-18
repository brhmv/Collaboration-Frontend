// src/utils/hooks/useShortcut.js
import { useEffect } from "react";

function useShortcut(keys, callback) {
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (keys.includes(event.key)) {
                event.preventDefault();
                callback();
            }
        };

        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [keys, callback]);
}

export default useShortcut;