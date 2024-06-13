import './App.css';
import Navbar from './Component/Navbar';
import News from './Component/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  let apiKey = "f1ba01bd771143779cb856fd03d1152d";
  let pageSize = 5;
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="home" category="general" apiKey={apiKey} pageSize={pageSize} country="in" />} ></Route>
          <Route exact path="/business" element={<News key="business" category="business" apiKey={apiKey} pageSize={pageSize} country="in" />} ></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" apiKey={apiKey} pageSize={pageSize} country="in" />} ></Route>
          <Route exact path="/general" element={<News key="general" category="general" apiKey={apiKey} pageSize={pageSize} country="in" />} ></Route>
          <Route exact path="/health" element={<News key="health" category="health" apiKey={apiKey} pageSize={pageSize} country="in" />} ></Route>
          <Route exact path="/science" element={<News key="science" category="science" apiKey={apiKey} pageSize={pageSize} country="in" />} ></Route>
          <Route exact path="/sports" element={<News key="sports" category="sports" apiKey={apiKey} pageSize={pageSize} country="in" />} ></Route>
          <Route exact path="/technology" element={<News key="technology" category="technology" apiKey={apiKey} pageSize={pageSize} country="in" />} ></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
