import "./App.css";
import Footer from "./components/Footer";
import List from "./components/List";
import listData from "./assets/listData.json";
import "./assets/css/style.css";

function App() {
  return (
    <div className="App">
      <Footer />
      <List listData={listData} />
    </div>
  );
}

export default App;
