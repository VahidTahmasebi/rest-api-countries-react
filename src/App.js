import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Countries from "./components/Countries";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Countries />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
