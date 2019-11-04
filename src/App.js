import styled from "styled-components";
import Counter from "./Counter"
import React from 'react';

const App = styled.div`
    text-align: center;
    height: 100vh;
    background-color: #319795;
`;

function APP() {
    return (
        <App>
            <h1>Hello World! </h1>
            <Counter/>
        </App>
    );
}

export default APP;
