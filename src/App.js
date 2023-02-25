import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Countries from "./components/Countries";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Countries />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
