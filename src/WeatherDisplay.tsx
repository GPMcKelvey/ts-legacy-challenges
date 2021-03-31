import React from 'react';
import {Table, ListGroup, ListGroupItem, ListGroupItemHeading, Button} from 'reactstrap';

type AcceptedProps = {
    humidity: number,
    temp: number,
    minTemp: number,
    maxTemp: number,

}

const WeatherDisplay = (props: AcceptedProps) => {
    console.log(props);
    
    return (
        <div style={{display: 'flex', justifyContent: 'center', color: '#ffffff', fontFamily:'sans-serif', fontWeight:'lighter', fontSize:'24px', marginTop:'2em'}}>  
            
        {props.humidity ? 
            <ListGroup style={{backgroundColor: '#add8e6', paddingTop: '1em', paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em' }}>
                <ListGroupItemHeading>Your Local Weather</ListGroupItemHeading>
                    <ListGroupItem style={{backgroundColor: '#add8e6'}}>
                        Relative Humidity: {props.humidity}%
                    </ListGroupItem>
                    <ListGroupItem style={{backgroundColor: '#add8e6'}}>
                        Current Temperature: {Math.floor((props.temp - 273.15)*(9/5)+32)} F
                    </ListGroupItem>
                    <ListGroupItem style={{backgroundColor: '#add8e6'}}>
                        Maximum Temperature: {Math.floor((props.maxTemp - 273.15)*(9/5)+32)} F 
                    </ListGroupItem>
                    <ListGroupItem style={{backgroundColor: '#add8e6'}}>
                        Minimum Temperature: {Math.floor((props.minTemp - 273.15)*(9/5)+32)} F 
                    </ListGroupItem>         

            </ListGroup>
        : null}
        </div>
    )
}

export default WeatherDisplay;