import React from "react";

export const useBackground = function () {
    React.useEffect(function () {
        const $main = window.document.querySelector(
            "main.the-main"
        ) as HTMLElement;

        $main.style.backgroundImage = "url(/img/back3.svg)";
        $main.style.backgroundSize = "1000% 100%";
    }, []);
};
