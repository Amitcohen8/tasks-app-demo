
import React from 'react'
import { Link } from 'react-router-dom'
import './App.scss';
import { Button } from '@material-ui/core'



const App = () => {

  return (

    <div className="App">
    <Link to='/r&d'>
      <Button variant="contained" color="secondary">
        R&D
      </Button>
      </Link>
      <Link>
      <Button variant="contained" >
        <Link to='/sales'>Sales</Link>
      </Button>
      </Link>
      
    </div>

  );
}

export default App;
