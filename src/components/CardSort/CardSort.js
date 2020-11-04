import React, {useState, useEffect} from "react";
import {Container, Col, Row, Button} from "reactstrap";

const CardSort = (props) => {

    const [deck, setDeck] = useState([]);
    const [testDeck, setTestDeck] = useState([]);
    const [sortedDeck, setSortedDeck] = useState([]);
    const [suits, setSuits] = useState(["Hearts", "Diamonds", "Clubs", "Spades"]);
    const [values, setValues] = useState(["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]);

    const createReferenceDeck = () => {
        let newDeck = [];
        let cardCounter = 1;
    
        for (let v = 0; v < values.length; v++) {
            for (let s = 0; s < suits.length; s++) {
                let card = {value: values[v], suit: suits[s], sort: cardCounter};
                newDeck.push(card);
                cardCounter++;
            };
        };
    
        setDeck(newDeck);
        // return newDeck;
    };

    const createTestDeck = () => {
        let newDeck = [];

        for (let s = 0; s < suits.length; s++) {
            for (let v = 0; v < values.length; v++) {
                let card = {value: values[v], suit: suits[s]};
                newDeck.push(card);
            };
        };
    
        setTestDeck(newDeck);
        setSortedDeck(newDeck);
        // return newDeck;
    };

    const suffleDeck = () => {

        let shuffleDeck = [...sortedDeck];

        // https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript
        // for 1000 turns
        // switch the values of two random cards
        for (let i = 0; i < 1000; i++) {
            let location1 = Math.floor((Math.random() * shuffleDeck.length));
            let location2 = Math.floor((Math.random() * shuffleDeck.length));
            let tempCard = shuffleDeck[location1];

            shuffleDeck[location1] = shuffleDeck[location2];
            shuffleDeck[location2] = tempCard;
        };

        setSortedDeck(shuffleDeck);

    };

    const sortDeck = (sortingDeck, sortOrder) => {

        let deckToSort = [...sortingDeck];
        // console.log("CardSort.js sortDeck deckToSort", deckToSort);
        let sortedDeck = [];

        // loop through the array
        // find a match with deck based on suit and value
        // copy the sort to a new object to push into new array

        for (let i = 0; i < deckToSort.length; i++) {
            // console.log("CardSort.js sortDeck deckToSort[i]", deckToSort[i]);
            // console.log("CardSort.js sortDeck deckToSort[i].value", deckToSort[i].value);
            // console.log("CardSort.js sortDeck deckToSort[i].suit", deckToSort[i].suit);

            // console.log("CardSort.js sortDeck deck", deck);

            for (let d = 0; d < deck.length; d++) {

                if (deckToSort[i].value === deck[d].value && deckToSort[i].suit === deck[d].suit) {
                    // console.log("CardSort.js sortDeck deck[d]", deck[d]);
                    // console.log("CardSort.js sortDeck deck[d].value", deck[d].value);
                    // console.log("CardSort.js sortDeck deck[d].suit", deck[d].suit);
                    // console.log("CardSort.js sortDeck deck[d].sort", deck[d].sort);
                    let card = {value: deckToSort[i].value, suit: deckToSort[i].suit, sort: deck[d].sort};
                    // console.log("CardSort.js sortDeck card", card);
                    sortedDeck.push(card);
                };

            };

            // let foundCard = deck.find(card => {
            //     return card.value === deckToSort[i].value && card.value === deckToSort[i].suit
            // });
            // console.log("CardSort.js sortDeck foundCard", foundCard);

            // let card = {value: deckToSort[i].value, suit: deckToSort[i].suit, sort: result.sort};
            // sortedDeck.push(card);

        };

        // sortedDeck.sort((a, b) => (a.sort > b.sort) ? 1 : -1);
        // reverse the sort
        // sortedDeck.sort((a, b) => (a.sort > b.sort) ? -1 : 1);

        if (sortOrder === "ASC") {
            sortedDeck.sort((a, b) => (a.sort > b.sort) ? 1 : -1);
        } else if (sortOrder === "DESC") {
            sortedDeck.sort((a, b) => (a.sort > b.sort) ? -1 : 1);
        } else {
            sortedDeck.sort((a, b) => (a.sort > b.sort) ? 1 : -1);
        };

        setSortedDeck(sortedDeck);
        return sortedDeck;
    };

    useEffect(() => {
        // console.log("CardSort.js useEffect getDeck");
        createReferenceDeck();
        createTestDeck();
    }, []);

    useEffect(() => {
        // console.log("CardSort.js useEffect deck", deck);
    }, [deck]);

    useEffect(() => {
        // console.log("CardSort.js useEffect testDeck", testDeck);

        // sortDeck(testDeck);

    }, [testDeck]);

    const renderIcon = (iconName) => {

        switch (iconName) {
            case "Hearts":
                return "♥";
            case "Diamonds":
                return "♦";
            case "Clubs":
                return "♣";
            case "Spades":
                return "♠";
            default:
                return "";
          };

    };

    return(
        <Container className="mb-5">
            <Row className="my-4">
                <Col>
                    <h2 className="text-center">Card Sorting</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button size="lg" color="primary" onClick={(event) => {/*console.log(event.target.value);*/ suffleDeck();}}>Shuffle</Button>
                </Col>
                <Col>
                    <Button size="lg" color="primary" onClick={(event) => {/*console.log(event.target.value);*/ sortDeck(testDeck, "ASC");}}>Sort ASC</Button>
                </Col>
                <Col>
                    <Button size="lg" color="primary" onClick={(event) => {/*console.log(event.target.value);*/ sortDeck(testDeck, "DESC");}}>Sort DESC</Button>
                </Col>
            </Row>
            <Row>
                {sortedDeck.map((card, index) => {
                return (
                    <Col key={index} xs="1" className="m-1 py-2 border">
                        <h2 className="text-center">{card.value}</h2>
                        <h1 className="text-center">{renderIcon(card.suit)}</h1>
                    </Col>
                    )
                })}
            </Row>
        </Container>
    );

};

export default CardSort;