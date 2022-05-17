import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const cards = data.map((dat, index) => {
    return (
      <Card
        key={dat.id}
        item={dat}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
