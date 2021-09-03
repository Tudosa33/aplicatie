import React from 'react'
import WeatherApp from '../Weather/weather'
import { HeroContainer, HeroBg, AppWeather, Graphic, GridContainer, GridItem } from './MainElements'



const Main = () => {
    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <div className="wrapper">
                        <div className="paragraph">
                            <p>Astronauts could land on Red Planet by 2039</p>
                        </div>
                        <div class="small">
                            <span>News</span>
                            <span>More news</span>
                            <span>Press here</span>
                        </div>
                    </div>
                </HeroBg>
                <AppWeather>
                    <WeatherApp/>
                </AppWeather>
            </HeroContainer>
            <Graphic>
                <GridContainer>
                    <GridItem className="ceva"></GridItem>
                    <GridItem className="doi"></GridItem>
                    <GridItem className="trei"></GridItem>
                    <GridItem className="patru"></GridItem>
                    <GridItem className="cinci"></GridItem>
                </GridContainer>
            </Graphic>
        </>
    )
}

export default Main
