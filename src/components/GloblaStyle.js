import { createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    body {
        @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
        font-family: 'Raleway', sans-serif;
    }
    * {
        margin: 0;
        padding: 0;
    }
`