import './Styles.css';
import SidePanel from "./components/Side-panel";
import Reviews from "./components/Reviews";
import AvRating from "./components/Av-rating"
import Analysis from "./components/Analysis"
import WebVisits from "./components/WebVisits"

function App() {
  return (
    <div className="app">
      <SidePanel />
      <Reviews />
      <AvRating />
      <Analysis />
      <WebVisits />
    </div>
  );
}

export default App;
