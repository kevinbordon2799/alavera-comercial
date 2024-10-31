import {
    Section,
    Image,
    ImageFilter,
    Hashtag,
    Separator,
} from "./styled/bottom-banner.styled";

export default function AboutUsBottomBanner() {
    return (
        <Section className="shapedividers_com-7166">
            {/* <Separator src="/img/separator1.svg" /> */}
            <Image src="/img/alavera.webp" />
            <ImageFilter />
            <Hashtag>#VIVEALAVERA</Hashtag>
        </Section>
    );
}
