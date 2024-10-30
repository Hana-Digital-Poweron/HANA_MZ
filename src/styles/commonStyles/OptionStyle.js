import styled from "styled-components";

export const Option = styled.div`
    width: 214px;
    height: 32px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.color.Font1}; 
    background: #FFF;
    color: ${({ theme }) => theme.color.Font3}; 
    font-size: 11px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.77px;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;
