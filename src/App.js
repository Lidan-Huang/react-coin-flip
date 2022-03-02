import logo from "./logo.svg";
import "./App.css";
import CoinFlip from "./CoinFlip";

const props = [
  {
    head: "https://upload.wikimedia.org/wikipedia/commons/b/bb/1994-P_Washington_quarter_obverse.jpg",
  },
  { tail: "https://davescoins.net/Pictures/PIQ/PIQ-1989Sb.JPG?065woz" },
];
function App() {
  return <div className="App">
    <CoinFlip props={props}/>
  </div>;
}

export default App;
