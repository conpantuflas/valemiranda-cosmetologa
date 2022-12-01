import styled from "styled-components";

const Slide = styled.div`
  min-width: ${(props) => props.minwidth || "100%"};
  overflow: ${(props) => props.overflow || "hidden"};
  transition: 0.3s ease all;
  display: flex;
  justify-content: center;
  img {
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "70vh"};
    object-fit: cover;
    object-position: center;
  }
`;

export default Slide;
