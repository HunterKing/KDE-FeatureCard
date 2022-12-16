import {Button, Container, TextField} from "@mui/material";
import React from "react";
import { useState } from "react";
import { YGOCard, YGOCardProps } from "../../components/Card";
import { YGOGrid } from "../../components/CardGrid";

//Theming
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';



export const Home = () => {
    //This uses useState() which is a React hook.
    //For more information on this, check out:
    //https://reactjs.org/docs/hooks-state.html
    //For more information on hooks generall, check out:
    //https://reactjs.org/docs/hooks-intro.html
    const [cardData, setCardData] = useState("");
    const [gridData, setGridData] = useState(null);
    const fetchUrl = 'http://localhost:'
    const fetchPort = '5000'
    const fetchEndpoint = '/test'
    const cardArr: YGOCardProps[] = [
        {
            image: "./cardData/Images/95440946.jpg",
            name: "Eldlich the Golden Lord"
        },
        {
            image: "./cardData/Images/27204311.jpg",
            name: "Nibiru the Primal Being"
        }
    ];

    function handleButton(){
        setGridData(<YGOGrid cards={cardArr} />); 
    };

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });

    function handleCardData(e: any){
        setCardData(e?.target?.value);
        //Check out all of the data that we're sending.
        //WARNING: React will always be one character behind here because the hook will not fire until re-render.
        //For a better representation of the current data, click the POST button.
        console.log(cardData);
    };

    function makeBody(){
        return(
            {
                "data": cardData
            }
        );
    }



    return(
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Container
                    maxWidth = "lg"
                >
                    <Container
                        sx={{my: 1.5}}
                        style={{display:"flex"}}
                    >
                        <TextField
                            fullWidth
                            label="Card Name"
                            onChange={handleCardData}
                            sx={{pr: 1.5}}
                        />

                        <Button 
                            variant="contained" 
                            onClick={handleButton}
                            color = "error"
                            size = "large"
                        >
                            SEND
                        </Button>
                    </Container>
                    {gridData}
                </Container>
            </ThemeProvider>
        </>
    );
};