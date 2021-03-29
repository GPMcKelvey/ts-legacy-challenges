import React from 'react';
import {Table} from 'reactstrap';

const WeatherDisplay = (props) => {
    console.log(props);
    
    let items = props.results;
//change where padding is to table
    return (
        <div style={{display: 'flex', justifyContent: 'center', color: '#ffffff', fontFamily:'sans-serif', fontWeight:'lighter', fontSize:'24px', marginTop:'2em'}}>    
            
        {items.main ? 
            <Table style={{backgroundColor: '#add8e6', paddingTop: '1em', paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em' }}>
                <thead><tr><th>Your Local Weather</th></tr></thead>
                            <br/>
                <tbody>
                    <tr>
                        <td>Relative Humidity: {items.main.humidity}%</td>
                    </tr>
                    <tr>
                        <td>Current Temperature: {Math.floor((items.main.temp - 273.15)*(9/5)+32)} F</td>
                    </tr>
                    <tr>
                        <td>Maximum Temperature: {Math.floor((items.main.temp_max - 273.15)*(9/5)+32)} F </td>
                    </tr>
                    <tr>
                        <td>Minimum Temperature: {Math.floor((items.main.temp_min - 273.15)*(9/5)+32)} F </td>
                    </tr>         
                </tbody>
            </Table>
        : null}
        </div>
    )
}

export default WeatherDisplay;