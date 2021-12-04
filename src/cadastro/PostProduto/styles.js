import styled from "styled-components"

export const Div = styled.div`

flex-direction: column;
align-items: center;
justify-content: center;
width: 350px;
 background: rgba(0, 0, 0, 0.3);
 border-radius: 5% 0;
 box-shadow: 1px 2px 20px #000, 2px 6px 50px #000;
 padding: 50px 20px;
 margin-top: 100px;

`;

export const Label = styled.label`
color: #fff;
font-size: 16px;
margin-left: 10px;
margin-right: 10px;
margin-bottom: 0;
text-align: left;
text-shadow: 1px 1px 2px #000;
`;
export const Title = styled.h1`
color: #fff;
font-size: 30px;
margin: 10px;
text-align: center;
text-shadow: 1px 1px 2px #000;
font-style: italic;

`;


export const P = styled.p`
margin-bottom: 1%;
margin-top: 0;
`;

export const Input = styled.input`
width: 300px;
background-color: #fff;
&:hover {
background-color: 	#FFF;
transition: 1s;
margin: 3px;
}
`;
