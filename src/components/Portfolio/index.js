import React, { useState, useEffect } from 'react';
import styled from 'styled-components';




const PortolfioWrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 3rem 0;
    font-family: "Courier", monospace;

`;


const PortolfioDisplay = styled.div`
    

`;

const PortfolioDisplay = ({ data }) => {
    return (
        <PortolfioDisplay>
            {data.length > 0 && data.map((post) => <div className="port">{post.title}</div>)}
        </PortolfioDisplay>
    )
}

const CreateData = ({ getAllData }) => {
    const [value, updateValue] = useState('');
    const handleChange = e => updateValue(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        const postData = async () => {
            await fetch('/portfolio', {
                method: "POST",
                body: JSON.stringify({ title: value }),
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            });
            updateValue('')
            getAllData()
        }
        postData()
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange} />
            </form>
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
        <PortolfioWrapper>
            <h1>welcome to my portfolio</h1>
            <CreateData getAllData={getAllData} />
            <PortfolioDisplay data={data} />
        </PortolfioWrapper>
    )
}

