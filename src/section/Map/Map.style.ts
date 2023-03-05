import { Box } from "@mui/system";
import { styled as styleMui } from "@mui/material/styles";



export const MapStyle = styleMui(Box)(({theme}) => ({
height: "250px",
width: "100%",
marginTop: "30px",

[theme.breakpoints.up("sm")]: {
    height: "500px",
    marginTop: "50px"
}
    
}));
