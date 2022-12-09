import styled from "styled-components";

const Map = styled.div`
  padding: 3rem;
  & img {
    border-radius: 15px;
    width: 50%;
    height: 40vh;
    object-fit: cover;
    object-position: center;
    &:hover {
      transition: 1000ms ease-out all;
      filter: brightness(50%);
      cursor: pointer;
    }
  }
  & a {
    text-decoration: none;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }
`;

export default Map;
