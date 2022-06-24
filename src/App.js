import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      cityMap: '',
      error: false,
      errorMessage: ''
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      this.setState({
  
        error: false
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `An Error Occurred: ${error.response.status}`
      });
    }
  };

  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    });
  };

  handleCitySubmit = async (e) => {
    e.preventDefault();
    // make my request to my API
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
    let cityData = await axios.get(url);
    let cityMap = await `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=11`;
    this.setState({
      cityData: cityData.data[0],
      cityMap: cityMap,
    });
  }

  render() {

    return (
      <>
        <h1>Geolocator</h1>
          <ul>
            <li>{this.state.cityData.lon}</li>
            <li>{this.state.cityData.lat}</li>
          </ul>
        
        <form onSubmit={this.handleCitySubmit}>
          <label>City Name:
            <input type="text" onInput={this.handleCityInput} />
          </label>

          <button type="submit">Explore</button>
        </form>
      </>
    );
  }
}

export default App;