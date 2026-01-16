import {Routes, Route} from 'react-router-dom'

export const AppRoutes = ()=>{
  return(
    <Routes>
      <Route path="/pagina-inicial" element={<p>Página Inicial</p>}>
     <Route path="*"/ element={<Navigator/>}/>
      </Routes>
  );
}