import { Route, Routes, Router} from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import { EstilosGlobales } from "./EstilosGlobales";
import { temaOscuro } from "./components/Temas";
import { ThemeProvider } from "styled-components";
import Login from "./components/Login";
import PrivateOutlet from "./components/PrivateOutlet";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import { EstadoProveedor } from "./context/EstadoGeneral";
import { createBrowserHistory } from "history";
const browserHistory = createBrowserHistory();

function App() {
  return (
    <EstadoProveedor>
      <ThemeProvider theme={temaOscuro}>
        <EstilosGlobales />
        <Router history={browserHistory}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="/" element={<PrivateOutlet />}>
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>

    </EstadoProveedor>
  );
}

export default App;
