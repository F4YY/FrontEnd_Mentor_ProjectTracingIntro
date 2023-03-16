import styled from "styled-components";

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&display=swap');
    //Primary:
    --Red: hsl(0, 100%, 68%);
    //Neutral:
    --Very-Dark-Blue: hsl(230, 29%, 20%);
    --Dark-Grayish-Blue: hsl(230, 11%, 40%);
    --Grayish-Blue: hsl(231, 7%, 65%);
    --Light-Grayish-Blue: hsl(207, 33%, 95%);
    font-size: 18px;
    //Headings, Call-to-actions, Navigation:
    --barlowcondensed: 'Barlow Condensed', sans-serif;
    --regular:400;
    --bold:700;
    //Body:
    --barlow: 'Barlow', sans-serif;
    *{
        margin:0;
    }
    display:flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: var(--Light-grayish-blue);
`