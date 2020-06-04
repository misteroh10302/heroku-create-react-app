import React from 'react';
import styled from 'styled-components';
import '../../App.css';


const LayoutWrapper = styled.div`
    animation: animate-bcg 20s ease infinite;
    will-change: animate-bcg;
    min-height: 100vh;
    @keyframes animate-bcg {
        0% {
            background-color: rgb(187, 198, 203);
        }

        10% {
            background-color: rgb(203, 187, 189);
        }

        30% {
            background-color: rgb(203, 187, 194);
        }

        50%{
            background-color: rgb(198, 171, 198);
        }

        70%{
            background-color: rgb(171, 196, 198);
        }

        90%{
            background-color: rgb(171, 198, 172);
        } 
        
        100%{
            background-color: rgb(187, 198, 203);
        } 

    }
    margin: 0 auto;
    nav {
        display: flex;
        justify-content: space-between;

    }
    .container {
        padding:  2rem 3rem;
        margin: 0 auto;
    }
    font-family: 'Cormorant Garamond', serif;
    nav {
        margin-bottom: 3rem;
        display: flex;
        justify-content: flex-end;
        a {
            color: black;
            font-family: "Noto Sans", sans-serif;
            font-weight: 300;
            text-decoration: none;
            text-transform: Capitalize;
            letter-spacing: -.015em;
            font-size: 1.3rem;
            padding-left:1rem;
        }
    }
   
   a {
       color: black;
       text-decoration: none;
       transition: color 150ms ease;
       &:hover {
           color: white;
           cursor: pointer;
       }
   }
`;


export default (props) => {
    return (
        <LayoutWrapper>
            <div className="container">
                {props.children}
            </div>
        </LayoutWrapper>
    )
}


