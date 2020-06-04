

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { H1, H2 } from '../ui/Headings'

const PortolfioAllWrapper = styled.div`
   .display-container {
       margin-top: 3rem;
   }
`;



const PortfolioDisplay = ({ data }) => {
    return (
        <div className="display-container">
            {data.length > 0 && data.map((post) =>
                <div className="port">
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                        <H1>  &mdash; {post.title}</H1>
                    </a>
                </div >
            )}
        </div>
    )
}

export default (props) => {
    const [data, updateData] = useState([]);

    const getAllData = async () => {
        const getData = await fetch('/portfolio');
        const parseData = await getData.json();
        updateData(parseData);
    }

    useEffect(() => {
        getAllData();
    }, []);

    return (
        <PortolfioAllWrapper>
            <H2>Past Projects:</H2>
            <PortfolioDisplay data={data} />
        </PortolfioAllWrapper>
    )
}

