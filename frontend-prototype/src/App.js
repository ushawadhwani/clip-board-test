import React, { useState } from "react";

import "./assets/css/bootstrap.min.css";
import "./assets/css/fontawesome.min.css";
import "./assets/css/style.css";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import List from "./components/List";
import listData from "./assets/json/listData.json";
import headerData from "./assets/json/headerData.json";

function App() {
  const handleFilterUpdate = (filterValue) => {
    //need to change list as per filter Value
    var listToUpdate = listData.listData.filter(function (item) {
      return item.name.toLowerCase().includes(filterValue.toLowerCase());
    });

    setList(listToUpdate);
  };
  const [list, setList] = useState(listData.listData);

  return (
    <div>
      <div class="maincontainer">
        <LeftMenu />
        <div class="main-content">
          <Header headerData={headerData} />
          <div class="middlecontent">
            <div class="content-area">
              <SearchBar updateFilter={handleFilterUpdate} />
              <List listData={list} />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
