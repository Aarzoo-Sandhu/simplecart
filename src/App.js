import {React} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./Components/Gallery";
import Navigation from "./Components/Navigation";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Gallery searchTerm="all" />} />
          <Route exact path="/home" element={<Gallery searchTerm="mountains" />} />
          <Route exact path="/about" element={<Gallery searchTerm="food" />} />
          <Route
            exact
            path="/contact"
            element={<Gallery searchTerm="water" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
