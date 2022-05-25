// // Importando o React
// import React from "react";
// // Importando o component Home
// import Home from "./components/home/home";
// // Importando os components necessários da lib react-materialize
// import { Container } from 'react-materialize';

// const Main = () => (
//   <main>
//     <Container>
//       <Home />
//     </Container>
//   </main>  
// );

// export default Main;

// Importantando o React
import React from "react";
// Importantando o component Home
import Home from "./components/home/home";
// Importantando o component Contact
import Contact from "./components/contact/contact";
// Importando os components necessárias da lib react-materialize
import { Container } from 'react-materialize';
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Routes, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Container>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Container>
  </main>  
);

export default Main;