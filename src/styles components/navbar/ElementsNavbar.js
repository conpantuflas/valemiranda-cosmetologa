import styled from "styled-components";

const ElementsNavbar = styled.div`
  background-color: #ceecff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 99%;
  height: 1.5rem;
  margin: 0 auto;
  padding-bottom: 1rem;
  color: #ac415a;
  font-size: 1.5rem;
  padding: 1.5rem 0;
  position: relative;
  z-index: 1000;
  top: 0;
  left: 0%;
  font-family: fantasy;
  &:hover {
    cursor: pointer;
  }
`;

export default ElementsNavbar;
