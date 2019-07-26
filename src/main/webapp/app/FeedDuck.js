import React from 'react';
import ReactDOM from 'react-dom';
import FeedInfo from './FeedInfo';
import AddDuckFeedForm from './AddDuckFeedForm';
import 'whatwg-fetch';

class FeedDuck extends React.Component {

  constructor() {
    super();

    this.state = {

      feedinfo: []


    }
  }

  componentDidMount() {
    fetch('/feedduckinfo')
      .then(r => r.json())
      .then(json => {this.setState({feedinfo: json});


      console.log('get info...' +JSON.stringify(json) ); }
      )
      .catch(error => console.error('Error retrieving duck feed info: ' + error));



  }

  submitNewFeedInfo = (feedinfo) => {
    console.log('submitNewFeedInfo...');
    fetch('/feedduckinfo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedinfo)
    }).then(r => r.json())
      .then(json => {
        let feedinfo = this.state.feedinfo;
        feedinfo.push({id: json.id, name: json.name});
        this.setState({feedinfo});
         console.log('submitNewFeedInfo...'+ JSON.stringify(json));
      })
      .catch(ex => console.error('Unable to save feed info', ex));
  };


  render() {
    const {feedinfo} = this.state;

   return <div>
         <AddDuckFeedForm onSubmit={this.submitNewFeedInfo}  />

       </div>;
  }
}


ReactDOM.render(<FeedDuck />, document.getElementById('feedduck'));
//export default FeedDuck;