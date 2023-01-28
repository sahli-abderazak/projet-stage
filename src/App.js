import { Route, Routes } from "react-router";
import "./App.css";
import CardList from "./Components/cardsList";
import { productList } from "./Components/data";
import NavBar from "./Components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Detail from "./Components/detail";
import Reservation from "./Components/reservation";
function App() {
  const [ProductList, setProductList] = useState(productList);

  console.log(productList);

  return (
    <div className="App">
      <NavBar />
      <Routes>

        <Route
          path="/"
          element={<CardList ProductListGetter={ProductList} />}
        />
        <Route
        path="/Details/:id"
        element={<Detail cardsList={productList} />}
      />
      <Route path="/reservation" element={<Reservation />} />

      </Routes>
   
    </div>
  );
}

export default App;
