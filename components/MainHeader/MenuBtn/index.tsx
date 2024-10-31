import { CgMenuGridR } from "react-icons/cg";
import { Button, Text } from "../styled/menu-btn.styled";

export default function MenuBtn(props: { openMenuFn: () => void }) {
    const handleClick = function () {
        props.openMenuFn();
    };

    return (
        <Button onClick={handleClick}>
            <CgMenuGridR style={{ fontSize: "30px" }} />
            <Text>Menú</Text>
        </Button>
    );
}
