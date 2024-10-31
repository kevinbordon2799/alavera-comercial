import {
    ListItem,
    DataTypeContainer,
    DataP,
    DataTitle,
    IconContainer,
    DataLink,
    LocationDataContainer,
} from "../styled/data-item.styled";
import {
    ContactDataType,
    DataItemProps,
    ContactEmailData,
    ContactTelephoneData,
    ContactLocationData,
} from "../types";

const getTelephoneDataHTML = function (data: ContactTelephoneData) {
    return (
        <DataLink href={`tel:${data.phoneNumber}`}>{data.phoneNumber}</DataLink>
    );
};

const getEmailDataHTML = function (data: ContactEmailData) {
    return (
        <DataLink href={`mailto:${data.emailAddress}`}>
            {data.emailAddress}
        </DataLink>
    );
};

const getLocationDataHTML = function (data: ContactLocationData) {
    return (
        <LocationDataContainer>
            <DataP>{data.street}</DataP>
            <DataP>{`${data.city}, ${data.province}, ${data.country}`}</DataP>
        </LocationDataContainer>
    );
};

const getHTMLData = function (props: DataItemProps<ContactDataType>) {
    if (props.title === "TELÉFONO")
        return getTelephoneDataHTML(props.data as ContactTelephoneData);
    else if (props.title === "EMAIL")
        return getEmailDataHTML(props.data as ContactEmailData);
    else if (props.title === "UBICACIÓN")
        return getLocationDataHTML(props.data as ContactLocationData);
    else return <div></div>;
};

export default function DataItem<DataType extends ContactDataType>(
    props: DataItemProps<DataType>
) {
    return (
        <ListItem>
            <DataTypeContainer>
                <IconContainer>
                    <props.Icon fontSize={"inherit"} />
                </IconContainer>

                <DataTitle>{props.title}</DataTitle>
            </DataTypeContainer>

            {getHTMLData(props)}
        </ListItem>
    );
}
