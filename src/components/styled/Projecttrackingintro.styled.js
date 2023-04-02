import styled from "styled-components";

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const StyledProjecttracking = styled.div`
    display: grid;
    min-height: 100vh;
    width: 100%;
    grid-template-columns: repeat(2,50%);
    grid-template-rows: repeat(2,auto);
    grid-template-areas:
        'A C'
        'B C'
        ;
    @media screen and (max-width:1025px) {
        grid-template-columns: repeat(2,50%);
        grid-template-rows: 20% auto;
    }
    @media screen and (max-width:600px) {
        grid-template-columns: repeat(2,auto);
        grid-template-rows: repeat(2,auto);
        grid-template-areas:
            'A C'
            'B B'
            ;
    }
`
export const Logo = styled.img`
    grid-area: A;
    width: 6%;
    height: auto;
    padding: 60px 0 0 100px;
    @media screen and (max-width:1025px) {
        width: 7%;
        padding: 40px 0 0 40px;
    }
    @media screen and (max-width:600px) {
        width: 15%;
    }
`
export const Leftsider = styled(Vstack)`
    grid-area: B;
    padding:0 20px 20px 100px;
    .new_projecttracking{
        font-size: .8em;
        font-family: var(--barlowcondensed);
        font-weight: var(--bold);
        letter-spacing: .1em;
        color:#fff;
        text-transform: uppercase;
        padding:3px 10px;
        border-radius: 15px;
        background-color: var(--Very-Dark-Blue);
    }
    .monograph_projecttracking{
        font-size: .8em;
        font-family: var(--barlowcondensed);
        font-weight: var(--regular);
        letter-spacing: .3em;
        color:var(--Grayish-Blue);
        text-transform: uppercase;
        padding:0 15px;
    }
    h1{
        font-size: 3.6em;
        font-family: var(--barlowcondensed);
        font-weight: var(--bold);
        color:var(--Very-Dark-Blue);
        line-height:1em;
        text-transform: uppercase;
        padding:15px 0 20px;
    }
    h2{
        font-size: 1.05em;
        font-family: var(--barlow);
        font-weight: var(--regular);
        color:var(--Dark-Grayish-Blue);
        line-height:1em;
        padding:15px 280px 50px 0;
        margin:0;
    }
    @media screen and (max-width:1025px) {
        padding:50px 20px 40px 40px;
        h1{
            font-size: 2.8em;
        }
        h2{
            font-size: 1em;
            padding:15px 20px 50px 0;
        }
    }
    @media screen and (max-width:600px) {
        padding:50px 30px 40px;
        h1{
            font-size: 2.3em;
        }
        h2{
            font-size: 1em;
            padding:0 40px 30px 0;
        }
    }
`
export const Buttonschedule = styled.button`
    width: auto;
    height:auto;
    font-size: .9em;
    font-family: var(--barlowcondensed);
    font-weight: var(--bold);
    color:#fff;
    text-transform: uppercase;
    letter-spacing: .1em;
    padding:15px 31px;
    cursor:pointer;
    border-style: none;
    border-radius: 5px;
    background-color: var(--Red);
    :hover{
        opacity: .7;
    }
    :active{
        transform: scale(.98);
    }
    @media screen and (max-width:1025px) {
        padding:10px 26px;
    }
    @media screen and (max-width:600px) {
        font-size: .8em;
        padding:10px 10px;
        margin-right:auto;
    }
`
export const Buttontosee = styled(Buttonschedule)`
    font-weight: var(--regular);
    color:var(--Grayish-Blue);
    letter-spacing: .2em;
    border-radius: none;
    background-color: initial;
    @media screen and (max-width:1025px) {
        padding:10px 26px;
    }
    @media screen and (max-width:600px) {
        letter-spacing: .1em;
        padding:0;
    }
`
export const Rightsider = styled(Vstack)`
    grid-area: C;
    position:relative;
`
export const Stylednavbar = styled.div`
    padding: 5% 10% 40%;
    background-color: var(--Light-Grayish-Blue);
    border-bottom-left-radius:60px;
    justify-content: space-between;
    ul{
        display: block;
    }
    li{
        display: inline-block;
        cursor:pointer;
        font-size: .9em;
        font-family: var(--barlowcondensed);
        font-weight: var(--bold);
        color:var(--Very-Dark-Blue);
        text-transform: uppercase;
        letter-spacing: .05em;
        margin:12px 20px;
        :nth-child(4){
            font-size: 2em;
            color:var(--Grayish-Blue);
            cursor:initial;
        }
        :nth-child(5){
            color:var(--Grayish-Blue);
        }
        :hover{
            :not(:nth-child(4)){
                text-decoration:underline;
            }
        }
        :active{
            :not(:nth-child(4)){
                color:var(--Dark-Grayish-Blue);
            }
        }
    }
    @media screen and (max-width:1025px) {
        padding: 5% 10% 80%;
        ul{
            padding:0;
        }
        li{
            font-size: .8em;
            margin:8px;
        }
    }
    @media screen and (max-width:600px) {
        padding: 20% 0 240%;
        ul{
            display: none;
        }
    }
`
export const Desktopimage = styled.img`
    width: 100%;
    height:60%;
    position:absolute;
    inset:0;
    top:25%;
    right:0;
    object-fit: cover;
    object-position: -20%;
    @media screen and (max-width:1025px) {
        width: 100%;
        height:300px;
        object-position: -10%;
    }
    @media screen and (max-width:600px) {
        width: 210%;
        height:280px;
        top:25%;
        left:-110%;
        object-position: 0%;
    }
`
//Styled for mobile menu icon:
export const Menuicon = styled.img`
    width: 18%;
    height: auto;
    display: none;
    margin: 8px 0 0;
    cursor: pointer;
    @media screen and (max-width:600px){
        display:flex;
        padding:0 0 0 65%;
    }
`
export const Overlayscreen = styled.div`
    position:fixed;
    flex-direction: column;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    opacity:.5;
    background:var(--Very-dark-blue);
`
export const Menulist = styled(Vstack)`
    position: fixed;
    flex-direction: column;
    top:15%;
    right:5%;
    width: 90%;
    height: auto;
    animation: slidernav .5s ease-in;
    animation-direction: alternate;
    animation-iteration-count: 1;
    background:#fff;
    padding:10px 0;
    border-radius: 5px;
    box-shadow: 0 10px 20px -2px rgba(0,0,0,0.3);
    z-index:1;
    @media screen and (max-width:600px) {
        ul{
            display: block;
            font-size: 1.3em;
            font-family: var(--barlowcondensed);
            font-weight: var(--bold);
            margin-top: 10px;
        }
        li{
            display: list-item;
            list-style: none;
            text-align: center;
            margin:20px 0;
            :last-child{
                font-size: .85em;
                padding: 20px 0;
                margin:0 20px;
                border-top:1px solid var(--Grayish-Blue);
                :active{
                    text-decoration:underline;
                }
            }
        }
    }
`
export const Closeicon = styled.img`
    width: 15%;
    height: auto;
    cursor: pointer;
    position: absolute;
    top:6.2%;
    right:10%;
    padding:7%;
    background-color: var(--Light-Grayish-Blue);
`
//Styled for attribution:
export const Attribution = styled.div`
    height:auto;
    display: flex;
    margin: 20px auto 10px;
    text-align: center;
    justify-content: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 10px;
    }
`
export const AttributionA = styled(Attribution)`
    margin:0;
    color: hsl(228, 45%, 44%);
    p{
        font-size: .7rem;
    }
`