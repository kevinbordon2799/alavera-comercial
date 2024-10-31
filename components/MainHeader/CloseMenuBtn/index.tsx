import { Button, UpArrowImg } from "../styled/close-menu-btn.styled";

export default function CloseMenuBtn(props: { closeMenuFn: () => void }) {
    const handleClick = function () {
        props.closeMenuFn();
    };

    return (
        <Button onClick={handleClick}>
            <UpArrowImg src="/img/up-arrow.svg" />
        </Button>
    );
}
