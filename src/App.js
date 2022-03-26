import './App.css';
import Products from './components/Products/Products';
import Quistions from './components/Quistions/Quistions';

function App() {
  return (
    <div>
      <h1 className="lg:text-4xl md:text-4xl sm:text-2xl text-center font-bold mt-8 text-red-400">
        Buy Your Favorite Laptop
      </h1>
      <Products />
      <Quistions />
    </div>
  );
}

export default App;
