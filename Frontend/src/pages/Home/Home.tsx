import {Button, Container, TextField} from "@mui/material";
import React from "react";
import { useState } from "react";
import { YGOCardProps } from "../../components/Card";
import { YGOGrid } from "../../components/CardGrid";
import { GetNewBlob } from '../../utils/Query';

//Theming
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

export const Home = () => {
    const [cardData, setCardData] = useState("");
    const [cardArr, setCardArr] = useState<YGOCardProps[]>([]);

    function handleButton(){
        GetNewBlob();

        setCardArr(
            [
                {
                    image: "./cardData/Images/95440946.jpg",
                    name: "Eldlich the Golden Lord",
                },
                {
                    image: "./cardData/Images/27204311.jpg",
                    name: "Nibiru the Primal Being"
                }
            ]
        );
    };

    function handleCardData(e: any){
        setCardData(e?.target?.value);
        //Check out all of the data that we're sending.
        //WARNING: React will always be one character behind here because the hook will not fire until re-render.
        //For a better representation of the current data, click the POST button.
        console.log(cardData);
    };

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
                    <YGOGrid cards={cardArr} /> 
                </Container>
            </ThemeProvider>
        </>
    );
};