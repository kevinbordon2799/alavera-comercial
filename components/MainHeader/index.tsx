import React from "react";
import MenuBtn from "./MenuBtn";
import CloseMenuBtn from "./CloseMenuBtn";
import {
    Header,
    MainHeaderCont,
    MainHeaderItem,
    MainHeaderLink,
    MainHeaderList,
    MainHeaderLogoImg,
    MainHeaderLogoLink,
    MainHeaderNav,
    CloseMenuBtnArea,
    MenuLogoArea,
    MenuLogo,
} from "./styled/main-header.styled";

export default function MainHeader() {
    const [isMenuOpened, setMenuOpened] = React.useState(false);
    const menuOpenedRef = React.useRef(isMenuOpened);
    // const [isMenuBtnVisible, setMenuBtnVisible] = React.useState(
    //     window.innerWidth <= 800
    // );
    const headerRef = React.useRef<HTMLElement | null>(null);

    const addHeaderScrolledClass = function () {
        if (window.scrollY > 0) {
            headerRef.current?.classList.add("scrolled");
        } else {
            headerRef.current?.classList.remove("scrolled");
        }
    };

    const checkMenuBtnVisibility = function () {
        menuOpenedRef.current =
            menuOpenedRef.current && window.innerWidth <= 800;
        setMenuOpened(menuOpenedRef.current);
    };

    const openMenu = function () {
        setMenuOpened(true);
    };

    const closeMenu = function () {
        setMenuOpened(false);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", addHeaderScrolledClass);
        // window.addEventListener("resize", checkMenuBtnVisibility);

        return function () {
            window.removeEventListener("sroll", addHeaderScrolledClass);
            // window.removeEventListener("resize", checkMenuBtnVisibility);
        };
    }, []);

    React.useEffect(() => {
        const overflowClass = "overflow-y-hidden";
        const html = window.document.documentElement;

        if (isMenuOpened) {
            html.classList.add(overflowClass);
        } else {
            html.classList.remove(overflowClass);
        }
    }, [isMenuOpened]);

    return (
        <Header ref={headerRef}>
            <MainHeaderCont>
                <MainHeaderLogoLink href="/">
                    <MainHeaderLogoImg src="/img/alavera_tucentro2-1-1536x354.png" />
                </MainHeaderLogoLink>

                <MainHeaderNav className={`${isMenuOpened ? "opened" : ""}`}>
                    <CloseMenuBtnArea className="close-menu-area">
                        <CloseMenuBtn closeMenuFn={closeMenu} />
                    </CloseMenuBtnArea>

                    <MainHeaderList>
                        <MainHeaderItem>
                            <MainHeaderLink
                                href="/locales"
                                className={`${isMenuOpened ? "show" : ""}`}
                            >
                                Locales
                            </MainHeaderLink>
                        </MainHeaderItem>

                        <MainHeaderItem>
                            <MainHeaderLink
                                href="/cine"
                                className={`delay-1 ${
                                    isMenuOpened ? "show" : ""
                                }`}
                            >
                                Cine
                            </MainHeaderLink>
                        </MainHeaderItem>

                        <MainHeaderItem>
                            <MainHeaderLink
                                href="/nosotros"
                                className={`delay-2 ${
                                    isMenuOpened ? "show" : ""
                                }`}
                            >
                                Sobre nosotros
                            </MainHeaderLink>
                        </MainHeaderItem>

                        <MainHeaderItem>
                            <MainHeaderLink
                                href="/propuestas-laborales"
                                className={`delay-3 ${
                                    isMenuOpened ? "show" : ""
                                }`}
                            >
                                Prop. laborales
                            </MainHeaderLink>
                        </MainHeaderItem>
                    </MainHeaderList>

                    <MenuLogoArea className="menu-logo-area">
                        <MenuLogo src="/img/alavera_tucentro2-1-1536x354.png" />
                    </MenuLogoArea>
                </MainHeaderNav>

                <MenuBtn openMenuFn={openMenu} />
            </MainHeaderCont>
        </Header>
    );
}
