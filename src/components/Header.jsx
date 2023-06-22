import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Inner from "./Inner";

const StyledHeader = styled.header`
  background-color: #0e2d3e;
  color: #fff;

  & .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & a {
    color: #fff;
    text-decoration: none;
  }

  & span {
    color: #c5d5dd;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Inner>
        <h1>
          <Link to="/">My Todo List</Link>
        </h1>
        <span>React Basic</span>
      </Inner>
    </StyledHeader>
  );
}
