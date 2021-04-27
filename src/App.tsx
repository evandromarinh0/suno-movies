import { BrowserRouter } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
