import logo from "./logo.svg";
import "./App.css";
import AddUpdateBook from "./components/AddUpdateBook";
import NavigationBar from "./components/NavigationBar";
import Filters from "./components/Filters";
import Books from "./components/Books";

function App() {
  return (
    <div>
      <NavigationBar />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <div className="order-2 xl:-order-1">
            <Filters />
            <div className="lws-bookContainer">
              {/* Card 1 */}
              <Books />
            </div>
          </div>
          <div>
            <AddUpdateBook />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
