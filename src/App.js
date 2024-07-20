import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";

function App() {
  return (
    <div>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
