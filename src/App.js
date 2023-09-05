import 'assets/scss/style.scss';
import Footer from 'components/base/Footer';
import Header from 'components/base/Header';
import Home from 'pages/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
