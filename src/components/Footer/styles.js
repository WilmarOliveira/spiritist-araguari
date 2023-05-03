import styled from 'styled-components'

export const ContainerFooter = styled.footer`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${(props) => props.theme.colors.color5};
   color: #fff;
   height: 30px;
   margin-top: auto;
`

export const TitleFooter = styled.p`
   font-size: 12px;
`
