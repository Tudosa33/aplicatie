import styled from "styled-components";

export const HeroContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    height: 600px;
    

    @media screen and (max-width: 768px) {
        flex-flow: column wrap;
    }
`
export const HeroBg = styled.div`
    background: url("https://space-facts.com/wp-content/uploads/mars-v2.jpg");
    background-size: cover;
    flex-basis: 40%;
    height: 100%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`
export const AppWeather = styled.div`
    flex-basis: 60%;
    height: 100%;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
`
export const Graphic = styled.section`
    height: 500px;
`
export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows:  1fr 1fr 1fr 1fr 1fr;

    .ceva {
        height: 100px;
        background-color: #ffb997;
        grid: 1 / span 1;
    }

    .doi {
        height: 100px;
        background-color: #f67e7d;
        grid-column: 1 / span 1;
        grid-row: 4 / span 2
    }

    .trei {
        grid-column: 2 / span 2;
        grid-row: 1 / span 6;
        height: auto;
        background-color: #843b62
    }

    .patru {
        grid-column: 1 / span 1;
        grid-row: 2 / span 2;
        background-color: #621940;
    }

    .cinci {
        background-color: #0b032d;
        grid-column: 1 / span 1;
        grid-row: 5 / span 1;
    }
`
export const GridItem = styled.div``

