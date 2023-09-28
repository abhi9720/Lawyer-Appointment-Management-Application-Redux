import AppRoutes from "./AppRoutes";
 import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from "./components/NavBar";
import { CssBaseline } from "@mui/material";
function App() {
  return (
    <Router>
      <CssBaseline />
      <NavBar />
      <AppRoutes />
    </Router>
  );
}

export default App;
