import {css} from "styled-components";

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 560px){
            ${props}
        }
    `
}

export const tablet = (props) => {
    return css`
        @media (min-width: 561px) and (max-width: 768px){
            ${props}
        }
    `
}

export const laptopS = (props) => {
    return css`
        @media (min-width: 769px) and (max-width: 1024px){
            ${props}
        }
    `
}