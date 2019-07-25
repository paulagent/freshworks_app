import React from 'react';
import ReactDOM from 'react-dom';
import FeedInfo from './FeedInfo';
import AddDuckFeedForm from './AddDuckFeedForm';
import 'whatwg-fetch';

class FeedDuck extends React.Component {

  constructor() {
    super();

    this.state = {
      feedinfo: [],
      makes: [],
      food_catogary: [],
      drivers: []
    }
  }

  componentDidMount() {
    fetch('/feedduckinfo')
      .then(r => r.json())
      .then(json => this.setState({feedinfo: json}))
      .catch(error => console.error('Error retrieving vehicles: ' + error));

    fetch('/make')
      .then(r => r.json())
      .then(json => this.setState({makes: json}))
      .catch(error => console.error('Error retrieving makes: ' + error));

    fetch('/foodcatogary')
      .then(r => r.json())
      .then(json => this.setState({food_catogary: json}))
      .catch(error => console.error('Error retrieving models ' + error));

    fetch('/driver')
      .then(r => r.json())
      .then(json => this.setState({drivers: json}))
      .catch(error => console.error('Error retrieving drivers: ' + error));

  }

  submitNewFeedInfo = (feedinfo) => {
    console.log('submitNewFeedInfo...');
    fetch('/feedduckinfo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(vehicle)
    }).then(r => r.json())
      .then(json => {
        let feedinfo = this.state.feedinfo;
        vehicles.push({id: json.id, name: json.name, make: json.make, model: json.model, driver: json.driver});
        this.setState({feedinfo});
      })
      .catch(ex => console.error('Unable to save feed info', ex));
  };


  render() {
    const {feedinfo, makes, food_catogary, drivers} = this.state;

    return <div>
      <AddDuckFeedForm onSubmit={this.submitNewFeedInfo} makes={makes} food_catogary={food_catogary} drivers={drivers}/>


      <FeedInfo feed={feedinfo} />
    </div>;
  }
}


ReactDOM.render(<FeedDuck />, document.getElementById('FeedDuck'));