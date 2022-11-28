import styled from "styled-components";

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  /* transition: 0.3s ease all; */
  z-index: 9;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center;
  }
`;

export default Slide;
