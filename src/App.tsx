import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageView from "./pages/page-view";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageView />} />
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
