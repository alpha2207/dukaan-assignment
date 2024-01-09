import "./App.css";
import { Payout } from "./components/Payout";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <main className="h-screen flex">
      <Sidebar />
      <Payout />
    </main>
  );
}

export default App;
