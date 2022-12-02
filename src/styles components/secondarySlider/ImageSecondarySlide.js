import styled from "styled-components";

const ImageSecondarySlide = styled.div`
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 70vh;
  margin-top: -1.5rem;
`;

export default ImageSecondarySlide;
