import { Header } from "./components";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function App() {

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header/>
      <div className="flex-grow">
        <Home/>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
