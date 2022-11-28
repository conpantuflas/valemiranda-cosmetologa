import styled from "styled-components";
import img from "../../media/mask.jpg";

const ImageTreatments = styled.div`
  background-image: url(${img});
  background-size: cover;
  width: 100%;
  height: 70vh;
  object-fit: cover;
`;

export default ImageTreatments;
