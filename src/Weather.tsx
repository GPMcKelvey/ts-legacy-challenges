import React, { Component } from 'react';
import WeatherDisplay from './WeatherDisplay';

type WeatherState = {
    lat: number,
    lon: number,
    results: []
}

type AcceptedProps = {

}

class Weather extends Component<AcceptedProps, WeatherState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            lat: 0,
            lon: 0,
            results: []
        }
        this.setResults = this.setResults.bind(this);
    }

    componentDidMount(){
        this.getLocation();
        //this.fetchResult();
    // console.log(this.state.lat)
    }
    
          getLocation =() => {
              return (
            navigator.geolocation.getCurrentPosition((position) => {
              console.log('lat & lon =', position.coords.latitude, position.coords.longitude)
              this.setResults(position.coords)
            })
              )
          }
      
          setResults = (e: any) => {
          this.setState({ 
            lat: e.latitude, 
            lon: e.longitude
            });
            console.log(this.state.lat, this.state.lon)
    }

    componentDidUpdate({}, prevState: WeatherState){
        if(prevState.lat != this.state.lat){

                this.fetchResult();
        }
    }

    fetchResult = () => {
        fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=7a1807114aad9a1d5ff9ab42661fc2d8`)
        .then(res => res.json())
        .then((json) => 
            this.setRes(json)
        )}

        setRes = (event: any) => {
            this.setState({results: event});
            console.log(this.state.results)
        }


   
    render() {
        return (
            <div>
                <WeatherDisplay results={this.state.results}/>
            </div>
        )
    }
}

export default Weather;