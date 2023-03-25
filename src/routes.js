import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import Header from "./Components/Header";

const routes = [
  {
    path: "/",
    element: (
      <div className="App">
        <Header />
        <HomePage />
      </div>
    ),
  },
  {
    path: "/coin/:id",
    element: (
      <div className="App">
        <Header />
        <CoinPage />
      </div>
    ),
  },
];

export { routes };
