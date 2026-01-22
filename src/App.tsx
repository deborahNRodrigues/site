
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { LigthTheme as Ligth} from "./themes/Ligth";
import { AppRoutes } from "./routes";



export const App = () => {
  return(


<ThemeProvider  theme={Ligth}>
    <BrowserRouter>
   <AppRoutes/>
    </BrowserRouter>
  </ThemeProvider>
  );
}


