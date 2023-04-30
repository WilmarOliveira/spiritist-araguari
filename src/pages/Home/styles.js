import styled from "styled-components";

export const ContainerHome = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.color3};
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;
