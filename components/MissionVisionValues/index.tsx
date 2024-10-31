import {
    Section,
    ImageContainer,
    TextContainer,
    Image,
    Title,
    Text,
} from "./styled/mission-vision-values.styled";

const getContainerPositions = function (imagePos: "left" | "right"): {
    imgContClass: string;
    textContClass: string;
} {
    const classes = {
        firstCont: "desktop-first-cont",
        secondCont: "desktop-second-cont",
    };

    return {
        imgContClass:
            imagePos === "left" ? classes.firstCont : classes.secondCont,
        textContClass:
            imagePos === "right" ? classes.firstCont : classes.secondCont,
    };
};

const getSectionClassName = function (args: {
    isLastSection: boolean;
}): string {
    let className = "";

    if (args.isLastSection) {
        className += " last-section";
    }

    return className;
};

export default function MissionVisionValues(props: {
    isLast?: boolean;
    imagePos: "left" | "right";
    imageSrc: string;
    whiteTitle: string;
    orangeTitle: string;
    text: string;
}) {
    const sectionClassName = getSectionClassName({
        isLastSection: props.isLast || false,
    });
    const containersClasses = getContainerPositions(props.imagePos);

    return (
        <Section className={sectionClassName}>
            <ImageContainer className={containersClasses.imgContClass}>
                <Image src={props.imageSrc} />
            </ImageContainer>

            <TextContainer className={containersClasses.textContClass}>
                <Title>
                    {props.whiteTitle}
                    <span className="orange">{props.orangeTitle}</span>
                </Title>
                <Text>{props.text}</Text>
            </TextContainer>
        </Section>
    );
}
