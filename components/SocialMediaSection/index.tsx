import AlaveraGoogleMap from "./AlaveraGoogleMap";
import {
    Section,
    SectionContainer,
    SocialMediaList,
    LocationMapDiv,
    SocialMediaListItem,
    SocialMediaListLink,
    InstagramLink,
    FacebookLink,
    SocialMediaIconContainer,
    SocialMediaText,
    SocialMediaListDiv,
    SocialMediaTitle,
} from "./styled/social-media-section.styled";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function SocialMediaSection() {
    return (
        <Section id="social">
            <SectionContainer>
                <LocationMapDiv>
                    <AlaveraGoogleMap />
                </LocationMapDiv>

                <SocialMediaListDiv>
                    <SocialMediaTitle>Seguinos en</SocialMediaTitle>

                    <SocialMediaList>
                        <SocialMediaListItem>
                            <FacebookLink>
                                <SocialMediaIconContainer>
                                    <FaFacebookF />
                                </SocialMediaIconContainer>

                                <SocialMediaText>Facebook</SocialMediaText>
                            </FacebookLink>
                        </SocialMediaListItem>

                        <SocialMediaListItem>
                            <InstagramLink>
                                <SocialMediaIconContainer>
                                    <FaInstagram />
                                </SocialMediaIconContainer>

                                <SocialMediaText>Instagram</SocialMediaText>
                            </InstagramLink>
                        </SocialMediaListItem>
                    </SocialMediaList>
                </SocialMediaListDiv>
            </SectionContainer>
        </Section>
    );
}
