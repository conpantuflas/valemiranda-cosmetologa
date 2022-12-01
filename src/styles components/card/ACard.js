import styled from "styled-components";

const ACard = styled.div`
  background: rgb(255, 255, 170);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 170, 1) 0%,
    rgba(226, 251, 177, 1) 55%,
    rgba(255, 191, 248, 1) 89%,
    rgba(254, 168, 207, 1) 99%
  );
  height: 13rem;
  width: 13rem;
  border-radius: 50% 20% / 10% 40%;
  box-shadow: 2px 2px 2px rgba(20, 20, 20, 0.2);
  margin: 1rem;
  &:hover {
    transition: 1500ms ease-out all;
    transform: scale(1.1);
  }
`;

export default ACard;
