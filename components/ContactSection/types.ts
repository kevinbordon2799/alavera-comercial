import { IconType } from "react-icons";


export type ContactTelephoneData = {
    phoneNumber: string;
}

export type ContactEmailData = {
    emailAddress: string;
}

export type ContactLocationData = {
    street: string;
    city: string;
    province: string;
    country: string;
}

export type ContactDataType = ContactTelephoneData | ContactEmailData | ContactLocationData;

export interface DataItemProps<DataType extends ContactDataType> {
    title: "TELÉFONO" | "EMAIL" | "UBICACIÓN"
    Icon: IconType
    data: DataType
}