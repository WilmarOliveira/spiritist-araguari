import styled from "styled-components";

export const ContainerLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.color3};
`;
