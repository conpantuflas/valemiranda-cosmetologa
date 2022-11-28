import styled from "styled-components";

const ElementsNavbar = styled.div`
  background-color: #ceecff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 1.5rem;
  margin: 0 auto;
  padding-bottom: 1rem;
  color: #ac415a;
  fill: #ac415a;
  font-size: 1.5rem;
  padding: 1.5rem;
  position: absolute;
  top: 4rem;
  left: 20%;
  font-family: fantasy;
  &:hover {
    cursor: pointer;
  }
`;

export default ElementsNavbar;
