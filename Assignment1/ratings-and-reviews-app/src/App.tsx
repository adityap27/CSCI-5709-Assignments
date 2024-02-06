import "./App.css";
import { ReviewsPage } from "./components/ReviewsPage";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <div>
          <NavBar />
        </div>
        <div className="flex-grow bg-gray-100">
          <ReviewsPage />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
