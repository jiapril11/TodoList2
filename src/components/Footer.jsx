import React from "react";
import styled from "styled-components";
import Inner from "./Inner";

const StyledFooter = styled.footer`
  padding: 60px 0%;
  text-transform: uppercase;
  background-color: #0d2d3e0d;
  border-top: 1px solid #0e2d3e;
  border-bottom: 1px solid #0e2d3e;

  & p {
    margin: 0;
    color: #a1b1bb;
    font-size: 0.9rem;
    &:first-of-type {
      margin-bottom: 16px;
    }
  }

  & strong {
    color: #e93551;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Inner>
        <p>
          6TH React, Todo homework2 by <strong>SPARTACODINGCLUB</strong>
        </p>
        <p>&copy; Copyright All Right reserved</p>
      </Inner>
    </StyledFooter>
  );
}
