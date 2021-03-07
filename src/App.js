import './App.css';
import {useState, useEffect} from 'react';
import Mainpage from './screens/MainPage/Mainpage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Detailpage from './screens/DetailPage/Detailpage';

function App() {

  const [data,setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(res => setData(res))
    }, [])


  return (
    <Router>
      <Switch>
          <Route path="/" component={() => <Mainpage data={data}/>} exact />
          <Route path="/detail/:id" component={Detailpage} />
      </Switch>
    </Router>
    
  );
}

export default App;
