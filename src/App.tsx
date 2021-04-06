import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import { Navbar } from "./Components/NavBar";
import { AboutPage } from "./pages/aboutPage";
import { TodosPages } from "./pages/todosPage";



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPages} path='/' exact/>
          <Route component={AboutPage} path='/about' />
        </Switch>

      </div>
    </BrowserRouter>
  );
};

export default App;
