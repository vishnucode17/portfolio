import logo from './logo.svg';
import Home from './home';
import WhoAmI from './whoami';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
        <Route path="/" element={<Home />} />
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="blogs" element={<Blogs />} /> */}
          <Route path="/whoami" element={< WhoAmI />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
