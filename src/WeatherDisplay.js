import React from 'react';
// import {ListGroup, ListGroupItemHeading, ListGroupItem, Button} from 'reactstrap';

const WeatherDisplay = (props) => {
    console.log(props);
    
    let items = props.results;

    return (
        <div>
            <h1>Local Weather</h1>
            <p>{items.main ? items.weather[0].description : null}</p>
           <p> {items.main ? `Current Temp: ${Math.floor((items.main.temp - 273.15)*(9/5)+32)}F` : null}</p>
           <p>{items.main ? `Relative Humidity: ${items.main.humidity}%` : null}</p>
           <p>{items.main ? `Maximum Temperature: ${Math.floor((items.main.temp_max - 273.15)*(9/5)+32)} F` : null}</p>
           <p>{items.main ? `Minimum Temperature: ${Math.floor((items.main.temp_min - 273.15)*(9/5)+32)} F` : null}</p>
           
            
            {/* {items.main ? {
                        <ListGroup>
                            <ListGroupItemHeading>Todays Weather</ListGroupItemHeading>
                            <ListGroupItem>Relative Humidity: {items.main.humidity}%</ListGroupItem>
                            <ListGroupItem>Current Temperature: {Math.floor((items.main.temp - 273.15)*(9/5)+32)} F</ListGroupItem>
                            <ListGroupItem>Maximum Temperature: {Math.floor((items.main.temp_max - 273.15)*(9/5)+32)} F </ListGroupItem>
                            <ListGroupItem>Minimum Temperature: {Math.floor((items.main.temp_min - 273.15)*(9/5)+32)} F </ListGroupItem>
                        </ListGroup>
                    } : null} */}
        </div>
    )
}

export default WeatherDisplay;


{/* <ListGroupItem>{r.weather[0].description}</ListGroupItem> */}