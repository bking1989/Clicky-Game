import React from "react";
import Header from "./components/header";
import Wrapper from "./components/wrapper";
import Row from "./components/row";
import Card from "./components/card";

const charArr = ["Ned Stark", "Arya Stark", "Sansa Stark", "Jon Snow", "Joffrey Baratheon", "Cersei Lannister", "Tyrion Lannister", "Petyr Baelish", "Daenarys Targaryen"];

function App() {
    let shuffleArr = charArr.sort(() => {return 0.5 - Math.random()});

    return (
        <div>
            <Header />
            <Wrapper>
                <Row>
                    <Card value={shuffleArr[0]} />
                    <Card value={shuffleArr[1]} />
                    <Card value={shuffleArr[2]} />
                </Row>
                <Row>
                    <Card value={shuffleArr[3]} />
                    <Card value={shuffleArr[4]} />
                    <Card value={shuffleArr[5]} />
                </Row>
                <Row>
                    <Card value={shuffleArr[6]} />
                    <Card value={shuffleArr[7]} />
                    <Card value={shuffleArr[8]} />
                </Row>
            </Wrapper>
        </div>
    );
};

export default App;