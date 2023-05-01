import styled from 'styled-components'

export const ContainerHeader = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${(props) => props.theme.colors.color5};
   color: #fff;
   height: 60px;
`

export const TitleHeader = styled.h1`
   font-size: 26px;
`
