import React, {useState, useEffect} from "react";
import {Container, Col, Row} from "reactstrap";
import Contacts from "./Contacts.json";

const DataValidation = (props) => {

    // let contactList = [...Contacts];
    const [contactList, setContactList] = useState([...Contacts]);
    const [nameList, setNameList] = useState([]);
    const [cityList, setCityList] = useState([]);

    const fillCityNames = () => {
        let cityNames = [];

        for (let i = 0; i < contactList.length; i++) {

            // console.log("DataValidation.js fillCityNames cityNames.includes(contactList[i].cityName)", cityNames.includes(contactList[i].cityName));
            // console.log("DataValidation.js fillCityNames cityNames.findIndex((city) => city.cityName === contactList[i].cityName)", cityNames.findIndex((city) => city.cityName === contactList[i].cityName));

            if (cityNames.findIndex((city) => city.cityName === contactList[i].cityName) === -1) {
                cityNames.push({cityName: contactList[i].cityName, validationErrors: 0});
            };

        };

        // setCityList(cityNames);
        return cityNames;

    };

    const validateContacts = () => {

        let contactNames = [];
        let cityNames = fillCityNames();
        // console.log("DataValidation.js validateContacts cityNames", cityNames);

        for (let i = 0; i < contactList.length; i++) {

            let dataValidMessage = "";
            let emailValid = false;
            let phoneValid = false;

            let emailRegex = new RegExp(/^[^@]+[@][^@]+$/);
            let phoneRegex = new RegExp(/^[\d -]*$/);

            if (emailRegex.test(contactList[i].emailAddress)) {
                emailValid = true;
            } else {
                emailValid = false;
                // console.log("cityNames.findIndex((city) => city.cityName === contactList[i].cityName)", cityNames.findIndex((city) => city.cityName === contactList[i].cityName));
                cityNames[cityNames.findIndex((city) => city.cityName === contactList[i].cityName)].validationErrors = cityNames[cityNames.findIndex((city) => city.cityName === contactList[i].cityName)].validationErrors + 1;
            };

            if (phoneRegex.test(contactList[i].phoneNumber)) {
                phoneValid = true;
            } else {
                phoneValid = false;
                // console.log("cityList.findIndex((city) => city.cityName === contactList[i].cityName)", cityList.findIndex((city) => city.cityName === contactList[i].cityName));
                cityNames[cityNames.findIndex((city) => city.cityName === contactList[i].cityName)].validationErrors = cityNames[cityNames.findIndex((city) => city.cityName === contactList[i].cityName)].validationErrors + 1;
            };


            if (emailValid && phoneValid) {
                dataValidMessage = "Valid";
            } else if (!emailValid && !phoneValid) {
                dataValidMessage = "Email and Phone are invalid.";
            } else if (!emailValid) {
                dataValidMessage = "Email is invalid.";
            } else if (!phoneValid) {
                dataValidMessage = "Phone is invalid.";
            };

            let contactName = {fullName: contactList[i].fullName, emailValid: emailValid, emailAddress: contactList[i].emailAddress, phoneValid: phoneValid, phoneNumber: contactList[i].phoneNumber, dataValidMessage: dataValidMessage};

            contactNames.push(contactName);
        };


        contactNames.sort((a, b) => (a.fullName > b.fullName) ? 1 : -1);

        cityNames.sort((a, b) => (a.validationErrors > b.validationErrors) ? -1 : 1);

        setNameList(contactNames);
        setCityList(cityNames);

    };

    useEffect(() => {
        // console.log("DataValidation.js useEffect Contacts", Contacts);
        validateContacts();
    }, []);

    return(
        <Container>
            {/* {contactList.map((contact, index) => {
            return (
                <Row key={index}>
                    <Col>{contact.fullName}</Col>
                    <Col>{contact.cityName}</Col>
                    <Col>{contact.phoneNumber}</Col>
                    <Col>{contact.emailAddress}</Col>
                </Row>
                )
            })} */}
            {nameList.map((name, index) => {
            return (
                <Row key={index}>
                    <Col>{name.fullName}</Col>
                    {/* <Col>{name.emailValid.toString()}||{name.emailAddress}</Col>
                    <Col>{name.phoneValid.toString()}||{name.phoneNumber}</Col> */}
                    <Col>{name.dataValidMessage}</Col>
                </Row>
                )
            })}
            {cityList.map((city, index) => {
            return (
                <Row key={index}>
                    <Col>{city.cityName}</Col>
                    <Col>{city.validationErrors}</Col>
                </Row>
                )
            })}
        </Container>
    );

};

export default DataValidation;