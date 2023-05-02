import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html , body , #root {
        min-height: 100%;
    }
    body {
        font-size: 14px;
        -webkit-font-smoothing: antialiased !important;
    }
    a {
        text-decoration: none;
    }
    button {
        cursor: pointer;
        background: ${(props) => props.theme.colors.color1};
        color: #fff;
        border-radius: 4px;
        padding: 8px;
        border: 0;

        &:hover {
            background: ${(props) => props.theme.colors.color1};
            opacity: 0.8;
        }
    }
`
