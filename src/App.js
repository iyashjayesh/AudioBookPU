import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './globalComponents/Header/Header';
import Footer from './globalComponents/Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from './MainPages/Home';
import c1 from './MainPages/c1';
import c2 from './MainPages/c2';
import c3 from './MainPages/c3';
import c4 from './MainPages/c4';
import c5 from './MainPages/c5';
import c6 from './MainPages/c6';
import Chapters from '../src/MainPages/Chapters';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
            <Switch>
              <Route exact path="/" component={home} />
              <Route path="/chapters" component={Chapters}/>
              <Route path="/chapter-one" component={c1} />
              <Route path="/chapter-two" component={c2} />
              <Route path="/chapter-three" component={c3} />
              <Route path="/chapter-four" component={c4} />
              <Route path="/chapter-five" component={c5} />
              <Route path="/chapter-six" component={c6} />
            </Switch>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
