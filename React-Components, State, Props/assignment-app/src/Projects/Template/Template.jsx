import React from "react";
import styled from "styled-components";

const StyledTemplate = styled.div`
  margin-top: 30px;

  h4 {
    font-weight: 500;
  }
`;

export default function Template() {
  return (
    <StyledTemplate>
      <h4>
        <a href="https://sohel-bootstrap-template.netlify.app/" target="_blank">
          See Here
        </a>
        , React Bootstrap Template
      </h4>
    </StyledTemplate>
  );
}
