import Navbar from "./components/Navbar";
import Mininavbar from "./components/Mininavbar";
import Minibody from "./components/Minibody";

function App() {
  return (
    <h1 className="font-bold text-3xl underline">
      <Navbar />
      <Mininavbar />
      <Minibody />
    </h1>
  );
}

export default App;
