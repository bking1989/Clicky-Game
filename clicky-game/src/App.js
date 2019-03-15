import React from "react";
import Header from "./components/header";
import Wrapper from "./components/wrapper";
import Row from "./components/row";
import Card from "./components/card";

function App() {
    return (
        <div>
            <Header />
            <Wrapper>
                <Row>
                    <Card value="Ned Stark" />
                    <Card value="Robert Baratheon" />
                    <Card value="Cersei Lannister" />
                </Row>
                <Row>
                    <Card value="Jon Snow" />
                    <Card value="Arya Stark" />
                    <Card value="Sansa Stark" />
                </Row>
                <Row>
                    <Card value="Joffrey Baratheon" />
                    <Card value="Jaime Lannister" />
                    <Card value="Petyr Balish" />
                </Row>
            </Wrapper>
        </div>
    );
}

export default App;