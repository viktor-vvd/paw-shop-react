import 'assets/scss/style.scss';
import Home from '@pages/Home';
import DefaultLayout from 'layouts/DefaultLayout';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <Home/>
      </DefaultLayout>
    </div>
  );
}

export default App;
