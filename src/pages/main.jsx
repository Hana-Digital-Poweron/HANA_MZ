import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import Nav from "../components/Nav";

const NavBar = styled.div`
  position: relative;
`;

const Main = () => {
    const navigate = useNavigate();

    return (
        <div>
            
            <Nav/>
        </div>
    );
};

export default Main;