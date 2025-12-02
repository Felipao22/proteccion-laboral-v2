import { Route, Routes } from "react-router";
import { LayOutMain } from "./layout/LayOutMain";
import { HomePage } from "./pages/(public)/HomePage";
import { LoginPage } from "./pages/(public)/LoginPage";
import { ServicesPage } from "./pages/(public)/ServicesPage";
import { NosotrosPage } from "./pages/(public)/NosotrosPage";
import { ContactoPage } from "./pages/(public)/ContactoPage";
import { DashboardPage } from "./pages/(private)/dashboard/DashboardPage";
import { ToastContainer } from "react-toastify";
import { LayOutUsers } from "./layout/LayOutUsers";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<LayOutMain />}>
          <Route index element={<HomePage />} />
          <Route path="iniciar-sesion" element={<LoginPage />} />
          <Route path="servicios" element={<ServicesPage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="contacto" element={<ContactoPage />} />
        </Route>
        <Route path="dashboard" element={<LayOutUsers />}>
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
