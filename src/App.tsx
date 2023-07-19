import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ShoppingList from "./pages/ShoppingList";
import DetailItem from "./pages/DetailItem";
import Navb from "./pages/Navb";

// 전체상품페이지, 로인, 상품상세페이지x
// 전체상품페이지에서 전체상품 볼있다.x
// 로그인 버튼을 누면 로인 페이지가 나온다 x
// 상품디테일을 눌렀으나, 로그인이 안되있을경우에는 로인 페지 먼저나온다x
// 로그인이 되있을 경우에는 상품 디테일 페이지 를  볼 수  있다.x
// 로그아웃 버튼을 클릭하면 로그아웃이 된다. x
// 로그아웃이되면 상품 디테일페이지를 볼없다, 다 로그인 페이지가 보인다.
// 로그인을 하면 로그아웃이 보고 로그아웃을 하면 로그아웃이 보인다. x
// 상품을 검색할수있다.

const App: React.FC = () => {
  const [log, setLog] = useState<boolean>(false);

  return (
    <div className="App">
      <Navb log={log} setLog={setLog} />
      <Routes>
        <Route path="/" element={<ShoppingList log={log} />} />
        <Route path="/login" element={<Login  setLog={setLog} />} />
        <Route path="/item/:id" element={<DetailItem log={log} />} />
      </Routes>
    </div>
  );
};

export default App;
