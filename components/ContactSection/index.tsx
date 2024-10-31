import {
    ContactTelephoneData,
    ContactLocationData,
    ContactEmailData,
} from "./types";

import DataItem from "./DataItem";
import {
    Section,
    SectionContainer,
    SectionContentContainer,
    Title,
    DataList,
    Form,
    InputContainer,
    InputLabel,
    SubmitBtn,
} from "./styled/contact-section.styled";
import { BsTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail, MdLocationOn } from "react-icons/md";

const PhoneDataItem = DataItem<ContactTelephoneData>;
const EmailDataItem = DataItem<ContactEmailData>;
const LocationDataItem = DataItem<ContactLocationData>;

export default function ContactSection() {
    return (
        <Section id="contacto">
            <SectionContainer>
                <Title>
                    Cont<span className="orange">acto</span>
                </Title>

                <SectionContentContainer>
                    <DataList>
                        <PhoneDataItem
                            Icon={BsTelephoneFill}
                            title="TELÉFONO"
                            data={{ phoneNumber: "2932505664" }}
                        />

                        <EmailDataItem
                            Icon={MdAlternateEmail}
                            title="EMAIL"
                            data={{ emailAddress: "info@alavera.com.ar" }}
                        />

                        <LocationDataItem
                            Icon={MdLocationOn}
                            title="UBICACIÓN"
                            data={{
                                street: "Ruta Nac. 11 y Av Pres. Juan Domingo Perón",
                                city: "Vera",
                                province: "Santa Fe",
                                country: "Argentina",
                            }}
                        />
                    </DataList>

                    <Form>
                        <InputContainer>
                            <input type="text" name="name" id="name" />
                            <InputLabel htmlFor="name" className="first">
                                Nombre y apellido
                            </InputLabel>
                        </InputContainer>

                        <InputContainer>
                            <input type="email" name="email" id="email" />
                            <InputLabel htmlFor="email">Email</InputLabel>
                        </InputContainer>

                        <InputContainer>
                            <textarea name="msg" id="msg"></textarea>
                            <InputLabel htmlFor="msg">Mensaje</InputLabel>
                        </InputContainer>

                        <SubmitBtn type="submit" value="Enviar" />
                    </Form>
                </SectionContentContainer>
            </SectionContainer>
        </Section>
    );
}
