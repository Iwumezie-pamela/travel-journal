import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import TravelData from "./data";

function App() {
  const travelElement = TravelData.map((data) => {
    return <Main key={data.id} data={data} />;
  });
  return (
    <div className="App">
      <Navbar />
      {travelElement}
    </div>
  );
}

export default App;
