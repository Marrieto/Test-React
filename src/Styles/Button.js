import styled from 'styled-components'

const Button = styled.button`
    border-radius: 10px;
    -moz-box-shadow: 0px 0px 0px 2px #9fb4f2;
    background:linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
    background-color:#7892c2;
    font-size: 16px;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:12px;
    padding: 8px 20px;
    text-decoration:none;
    text-shadow:0px 1px 0px #2839j6;

    &:hover {
        background:linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
    }
    &:active {
        position: relative;
        top: 1px;
    }
`

export default Button