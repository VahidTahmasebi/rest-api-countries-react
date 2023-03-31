import { BrowserRouter, Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";
import SingleCountry from "./components/SingleCountry";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Countries />}></Route>
          <Route path='/:name' element={<SingleCountry />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
