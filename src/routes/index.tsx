import { Routes , Route, Navigate } from "react-router-dom";
import { Button } from "@mui/material";

export const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path="/paginal-inicial" element={<Button>Página Inicial</Button>} />

            <Route path="*" element={<Navigate to="/paginal-inicial" />}/>
        </Routes>
    
    );
}