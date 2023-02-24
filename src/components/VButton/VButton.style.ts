import styled from "styled-components";

interface Props {
    bg?: string,
    color?: string,
    border?: string
}

export const Button = styled.button<Props>`
border: none;
border-radius: 100px;
padding: 10px 20px;
cursor: pointer;
-webkit-tap-highlight-color: rgba(0,0,0,0);
-webkit-tap-highlight-color: transparent;
color: ${props => props.color};
${props => props.border && `border: 1px solid  ${props.border}`};
${props => props.bg && `background-color: ${props.bg};`};
${props => props.color && `color: ${props.color}`};

`;
