import React from 'react'
import HomePage from './pages/HomePage/HomePage.jsx';
import SinglePage from './pages/SinglePage/SinglePage.jsx';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import{ useState, useEffect} from "react"
import { Route, Switch } from 'react-router-dom';

import './app.scss';

const App =()=>{
  const [data, setData] = useState([]);
  const [selectedMovie, setMovieId] = useState("")
  const [shouldUpdate, setUpdate] = useState(false)
  const [search, setSearch] = useState("")

useEffect(()=>{
  fetch('http://api.tvmaze.com/shows')
  .then((res)=>res.json())
  .then((data)=> setData(data))
}, [shouldUpdate])

const setShouldUpdate = ()=>{
  setUpdate(!shouldUpdate)
  }
  
  const setMovie =(xxx)=>{
    setMovieId(xxx)
}

const searchData = (e)=>{
  setSearch(e)
}

console.log(search)

  return ( 
            <div id="bodyDiv">
              <Header searchData={searchData}/>
              <main>
                 <Switch>
                    <Route path="/singlePage">
                     <SinglePage setMovie={setMovie} movie={data.find(e=>e.id===selectedMovie)}/>
                   </Route>
                  <Route path="/">
                     <HomePage search={search} setShouldUpdate={setShouldUpdate} movies={data} setMovie={setMovie}/>
                   </Route>
                 </Switch>
              </main>
              <Footer/>
          </div> );
}
 
export default App;