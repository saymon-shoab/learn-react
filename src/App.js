import logo from './logo.svg';
import './App.css';
import playerData from './fake-data/data.json';
import { useEffect, useState } from 'react';
import Player from './Components/Player-info/Player';
import Tim from './Components/Tim/Tim';


function App() {
  const [players, setPlayers] = useState([]);
  const [tim, setTim] = useState([]);
  useEffect(()=>{
    setPlayers(playerData);
     console.log(playerData);
  },[])

  const handleAddPlayer= (players) => {
    console.log('added',players)
    const newTim = [...tim, players]
    setTim(newTim);
  }

  return (
    <div className="App">
      {/* <h2>playrs loaded: {players.length}</h2> */}
      <h4>player added: {tim.length}</h4>
      <Tim tim={tim}></Tim>
      <ul>
        {
          players.map(player=><Player Player={player}
          key={player.id} handleAddPlayer={handleAddPlayer}></Player> )
        }
      </ul>
    </div>
  );
}

export default App;
