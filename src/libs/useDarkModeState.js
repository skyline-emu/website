import { useEffect, useState } from "react";

const colorSchemeMedia = "(prefers-color-scheme: dark)";

const useDarkModeState = () => {
    const [isDark, setIsDark] = useState(false);

    const getSystemTheme = () => {
        const query = window.matchMedia(colorSchemeMedia);
        if (query.matches) setIsDark(true);
        else setIsDark(false);
    }

    useEffect(() => {
        getSystemTheme();

        const media = window.matchMedia(colorSchemeMedia);
        media.addEventListener("change", getSystemTheme);
        return () => media.removeEventListener("change", getSystemTheme);
    }, []);

    return isDark;
}

export default useDarkModeState;
