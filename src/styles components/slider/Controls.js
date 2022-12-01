import styled from "styled-components";

const Controls = styled.div`
  position: absolute;
  top: ${(props) => props.top || "50%"};
  left: 50%;
  z-index: 15;
  pointer-events: none;
`;

export default Controls;
