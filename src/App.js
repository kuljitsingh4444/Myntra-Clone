import { Provider } from "react-redux";
import { store } from "./duck/store/store";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import LandingPage from "./components/landingPage/landingPage";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
