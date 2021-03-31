import React, { ChangeEvent, Component } from 'react';
import WeatherDisplay from './WeatherDisplay';

type WeatherState = {
    lat: number,
    lon: number,
    humidity: number,
    temp: number,
    minTemp: number,
    maxTemp: number,
}

type AcceptedProps = {

}

class Weather extends Component<AcceptedProps, WeatherState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            lat: 0,
            lon: 0,
            humidity: 0,
            temp: 0,
            minTemp: 0,
            maxTemp: 0,
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
        if(prevState.lat !== this.state.lat){
                this.fetchResult();
        }
    }

    fetchResult = () => {
        fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=7a1807114aad9a1d5ff9ab42661fc2d8`)
        .then(res => res.json())
        .then((json) => {
            this.setState({
                humidity: json.main.humidity,
                temp: json.main.temp,
                minTemp: json.main.temp_min,
                maxTemp: json.main.temp_max,
            })
        }
        )}

        // setRes = (event: ChangeEvent) => {
        //     this.setState({
                
        //     });
        //     console.log(this.state.results)
        // }


   
    render() {
        return (
            <div>
                <WeatherDisplay humidity={this.state.humidity} temp={this.state.temp} minTemp={this.state.minTemp}  maxTemp={this.state.maxTemp}/>
            </div>
        )
    }
}

export default Weather;