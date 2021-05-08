
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';   
import Header from '../src/compunenrts/Common/Nav/Header';
import Home from '../src/compunenrts/Home/Home';
import Footer from '../src/compunenrts/Common/Footer/Footer';
import Signin from '../src/containers/login';
import Signup from '../src/compunenrts/SignUp/Signup';
import List from '../src/compunenrts/ListItems/List';
import Details from '../src/compunenrts/DetailsItem/Details';



function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Route exact path="/" component={Home} />
          <Route exact path="/dangnhap" component={Signin} />
          <Route exact path="/dangky" component={Signup} />
          <Route exact path="/danhsach" component={List} />
          <Route exact path="/chitietsp" component={Details} />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
