import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { H2 } from '../ui/Headings'


const Form = styled.form`
    max-width: 500px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    input {
        padding: 1rem;
        margin: 1rem 0;
        width: auto;
        background-color: white;
        outline:2px solid transparent;
        border: 2px solid transparent;
        &:focus {
            border: 2px solid aquamarine;
            outline: 2px solid aquamarine;
            box-shadow: 0px 1px 2px aquamarine;
        }
        &[type="submit"] {
            background-color: transparent;
            border: 2px solid black;
            margin: 2rem auto;
            width: 100%;
        }
    }

`;
const PortolfioWrapper = styled.div`
    margin: 0 auto;
    padding: 3rem 0;

`;


const PortolfioDisplay = styled.div`
    margin: 3rem auto;
    max-width: 1200px;
`;


const PortolfioItem = styled.div`
    font-size: 3rem;
    display: flex;
    button {
        background-color: transparent;
        margin: 0 4rem;
        outline: 0;
        border: 0;
        padding: 0;
    }
`;

const PortfolioDisplay = ({ data, deleteData }) => {

    return (
        <PortolfioDisplay>
            {data.length > 0 && data.map((post) =>
                <PortolfioItem className="port">
                    &mdash;  <h3>{post.title} • {post.description} • <a href={post.link}>Link</a> </h3>
                    <button value={post._id} onClick={deleteData}>x</button>
                </PortolfioItem >
            )}
        </PortolfioDisplay>
    )
}

const CreateData = ({ getAllData }) => {
    const [value, updateValue] = useState({
        title: '',
        link: '',
        description: ''
    });

    const handleChange = e => {
        updateValue({ ...value, [e.target.id]: e.target.value })
    };

    const handleSubmit = e => {
        e.preventDefault();

        const postData = async () => {
            await fetch('/portfolio', {
                method: "POST",
                body: JSON.stringify(value),
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            });
            updateValue({
                title: '',
                link: '',
                description: ''
            })
            getAllData()
        }
        postData()
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <input type="text" id="title" placeholder="title" value={value["title"]} onChange={handleChange} />
                <input type="text" id="description" placeholder="description" value={value["description"]} onChange={handleChange} />
                <input type="text" id="link" placeholder="link" value={value["link"]} onChange={handleChange} />
                <input type="submit" value="submit" />
            </Form>
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

    const deleteItem = async e => {
        console.log(e.target.value)
        await fetch(`/portfolio/${e.target.value}`, {
            method: "DELETE"
        })
        getAllData();
    }

    useEffect(() => {
        getAllData();
    }, []);

    return (
        <PortolfioWrapper>
            <H2>Create a new Project:</H2>
            <CreateData getAllData={getAllData} />
            <PortfolioDisplay data={data} deleteData={deleteItem} />
        </PortolfioWrapper>
    )
}

