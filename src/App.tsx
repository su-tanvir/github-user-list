import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { UsersContextProvider } from "./contexts/UsersContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <UsersContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:username" element={<UserDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UsersContextProvider>
  );
}

export default App;
