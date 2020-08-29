import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import Error from './components/Error';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null,
      error: false,
    }
  }

  componentDidMount(){
    this.getLocation()
  }

  getLocation = () => {
    const success = position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      this.fetchData(lat, lon);
    }

    const error = () => this.setState({ error : true})
   
    navigator.geolocation.getCurrentPosition(success, error)
  }
  


  fetchData = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        data,
      }) 
    })
  }


  onSearch = (text) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${text}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        data,
      })
    })
  }

  render(){
    const { data } = this.state;
    const renderData = () => {
      if (data) {
        return <Home {...data} onSearch={this.onSearch} cityName={data.city.name} />
      } else if (this.state.error) {
        return <Error />
      } else {
        return <Loading isLoading={!this.state.data} />
      }
    }
  
    return (
      <>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => renderData()} />
        <Route path='/contact' component={Contact} />
      </Switch>
      </>
    );
  }

}

export default App;
