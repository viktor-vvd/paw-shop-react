import 'assets/scss/style.scss';
import Footer from '@components/base/Footer';
import Header from '@components/base/Header/Header';
import Home from '@pages/Home';
import images from "@imports/ImagesImport";

function App() {
  return (
    <div className="App">
      <Header images={images}/>
      <Home images={images}/>
      <Footer images={images}/>
    </div>
  );
}

export default App;
