import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 3rem 0;
    font-family: "Karla", monospace;
    nav {
        display: flex;
        justify-content: space-between;

    }
`;


export default (props) => {
    return (
        <LayoutWrapper>
            {props.children}
        </LayoutWrapper>
    )
}


