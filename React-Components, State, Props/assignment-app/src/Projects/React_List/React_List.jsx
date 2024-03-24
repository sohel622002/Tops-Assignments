import React from "react";
import styled from "styled-components";

const ListWrapper = styled.div`
  margin-top: 20px;

  h3,
  p {
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 18px;

    li {
      background-color: aliceblue;
      padding: 10px;
      border-radius: 5px;
    }
  }
`;

export default function React_List() {
  const listData = [
    { id: 1, name: "Alice Smith", age: 30 },
    { id: 2, name: "Bob Johnson", age: 28 },
    { id: 3, name: "Charlie Brown", age: 35 },
    { id: 4, name: "Diana Martinez", age: 27 },
    { id: 5, name: "Eva White", age: 32 },
  ];

  return (
    <ListWrapper>
      <h3>To render list in react we mostly use .map() functin</h3>
      <p>
        We have to provide "key" to parent element which is rendering through
        .map() fun, which should be unique
      </p>
      <ul>
        {listData.map((data) => (
          <li key={data.id}>
            Hii i am {data.name} and i am {data.age} years old
          </li>
        ))}
      </ul>
    </ListWrapper>
  );
}
