import React, { useState } from "react";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const StyledCounter = styled.div`
  background-color: #31363f;
  margin-top: 30px;
  padding: 20px;
  border-radius: 5px;

  h1 {
    text-align: center;
    color: white;
  }

  .counter {
    font-size: 2.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: white;
    }
  }

  .btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 30px;

    button {
      width: 35px;
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      font-weight: 600;
      border: 2px solid white;
      background-color: transparent;
      cursor: pointer;

      svg line {
        color: white !important;
      }
    }

    .reset-btn {
      width: auto;
      aspect-ratio: unset;
      padding: 7px;
      color: white;
      font-size: 18px;
      font-weight: 400;
    }
  }
`;

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <StyledCounter>
      <div className="counter">
        <span>{count}</span>
      </div>
      <h1>Counter</h1>
      <div className="btns">
        <button onClick={() => setCount((pre) => pre + 1)}>
          <FiPlus />
        </button>
        <button className="reset-btn" onClick={() => setCount(0)}>
          Reset
        </button>
        <button onClick={() => setCount((pre) => pre - 1)}>
          <FiMinus />
        </button>
      </div>
    </StyledCounter>
  );
}
