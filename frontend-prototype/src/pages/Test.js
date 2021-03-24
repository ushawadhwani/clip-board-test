import React, { useState } from "react";
import Header from "../components/Header";
import LeftMenu from "../components/LeftMenu";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import List from "../components/List";
import listData from "../assets/json/listData.json";
import headerData from "../assets/json/headerData.json";

export default function Test(props) {
  const handleFilterUpdate = (filterValue) => {
    //need to change list as per filter Value
    var listToUpdate = listData.listData.filter(function (item) {
      return item.name.toLowerCase().includes(filterValue.toLowerCase());
    });

    setList(listToUpdate);
  };
  const handleResetFilter = () => {
    setList(listData.listData);
  };
  const [list, setList] = useState(listData.listData);
  return (
    <div class="maincontainer">
      <LeftMenu />
      <div class="main-content">
        <Header headerData={headerData} />
        <div class="middlecontent">
          <div class="content-area">
            <SearchBar
              updateFilter={handleFilterUpdate}
              resetFilter={handleResetFilter}
            />
            <List listData={list} />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
