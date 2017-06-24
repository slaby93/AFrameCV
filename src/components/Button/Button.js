import React from 'react';
import styled from 'styled-components';
const Button = ({ className, children, onClick }) => {
    return (
        <button onClick={onClick} className={className}>{children}</button>
    );
}
const Styled = styled(Button) `
    border:none;
    background-color:black;
    color:white;
    font-size:22px;
    font-weight:900;
    text-transform:uppercase;
    padding:10px;
`;
export default Styled;