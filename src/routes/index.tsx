import { Routes , Route, Navigate } from "react-router-dom";

export const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path="/paginal-inicial" element={<p>PaginaInicial</p>} />

            <Route path="*" element={<Navigate to="/paginal-inicial" />}/>
        </Routes>
    
    );
}