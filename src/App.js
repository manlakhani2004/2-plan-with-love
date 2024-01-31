import logo from './logo.svg';
import './App.css';
import data from './data';
import { useState } from 'react';
import Tours from './components/tours';

function App() {
  const [tours,setTours] = useState(data);
  

  function removeTourhandler(id)
  {
    let newTours = tours.filter((tour)=> {
      return tour.id != id;
    });
    setTours(newTours);
  }

  if(tours.length == 0)
  {
    return(
      <div className='nottourfound-container'>
          <div className='NotFound'>
            <h1>No Tours Left</h1>
            <button onClick={displayallTour}>Refresh</button>
          </div>
      </div>
    );
  }

  function displayallTour()
  {
    setTours(data);
  }
  
  return (
    <div className="wrapper">
      <Tours packages={tours} removeTour = {removeTourhandler} ></Tours>
    </div>
  );
}

export default App;
