import styled from "styled-components";

export const Container = styled.div `
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap:2rem;
    margin-top:-5.56rem; 


    div {
        width:352px;
        height:136px;
        background:var(--shape);
        border-radius:0.3rem;
        padding:1.5rem 2rem;
        color:var(--text-title);

        header {
            display:flex;
            align-items:center;
            justify-content: space-between;

            p {
                font-size:1rem;
                font-weight: 400;
                line-height:1.4rem;
            }
        }
        strong {
            display:block;
            margin-top:1rem;
            font-size:2rem;
            font-weight: 500;
            line-height:3.3rem;
        }

        &.highlight-background{
            background:var(--green);
            color:#fff;
        }
    }
`;