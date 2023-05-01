import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.color5};
  color: #fff;
  height: 60px;
  margin-top: auto;
`;

export const TitleFooter = styled.h1`
  font-size: 26px;
`;
