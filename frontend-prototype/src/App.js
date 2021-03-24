import Footer from "./components/Footer";
import List from "./components/List";
import listData from "./assets/json/listData.json";
import headerData from "./assets/json/headerData.json";

import "./assets/css/bootstrap.min.css";
import "./assets/css/fontawesome.min.css";
import "./assets/css/style.css";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <div class="maincontainer">
        <LeftMenu />
        <div class="main-content">
          <Header headerData={headerData} />
          <div class="middlecontent">
            <div class="content-area">
              <SearchBar />
              <List listData={listData} />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
