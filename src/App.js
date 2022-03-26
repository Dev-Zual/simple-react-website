import './App.css';
import Products from './components/Products/Products';

function App() {
  return (
    <div>
      <h1 className="lg:text-4xl md:text-4xl sm:text-2xl text-center font-bold mt-8 text-red-400">
        Buy Your Favorite Laptop
      </h1>
      <Products />
    </div>
  );
}

export default App;
