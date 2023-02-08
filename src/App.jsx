import TravelCard from './Components/TravelCard.jsx';
import { useState } from "react";
// Import MUI stuff
import "@fontsource/roboto"; // Loading Roboto font. MUI was designed with this font in mind.
import {
  Card,
  CardHeader,
  Switch,
  Box,
  Container,
  FormGroup,
  FormControlLabel,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Data from '../data.jsx';

// Define theme settings
const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
};

const App = () => {
  // The light theme is used by default
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // This function is triggered when the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const travelData = Data.map(data => {
    return (
      <TravelCard
        key = {data.id}
        imageUrl = {data.imageUrl} 
        title = {data.title}
        location = {data.location}
        mapUrl = {data.googleMapsUrl}
        startDate = {data.startDate}
        endDate = {data.endDate}
        description = {data.description}
      />
    )
  });


  return (
    <>
      <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
        <CssBaseline />
          <Container>
          <Box mt={2} mb={2}>
              <Card className='header'>
                <CardHeader
                title='my travel journal.'
                  action={
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Switch checked={isDarkTheme} onChange={changeTheme} />
                        }
                        label="☼"
                      />
                    </FormGroup>
                  }/>
              </Card>
            </Box>
          </Container>
{/* Insert Components below via container or the component itself */}
          <Container>
          {travelData}   
          </Container>
      </ThemeProvider>       
    </>
  );
};

export default App;