import { Route, Routes } from "react-router";
import { LayOut } from "./layout";
import { HomePage } from "./pages/(public)/HomePage";
import { LoginPage } from "./pages/(public)/LoginPage";
import { ServicesPage } from "./pages/(public)/ServicesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
