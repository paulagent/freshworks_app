import React  from 'react';

import {array, func} from 'prop-types';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import ReactDOM from 'react-dom';

import axios from 'axios';

import { Link } from 'react-router-dom';


class AddDuckFeedForm extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      feedtime: new Date(),
      loc: '',
      food: '',
      food_category: '',
      numberOfDucks: 10,
      weightOfFood : 0.5
      };
  }


/*

  handleSubmit = (e) => {
    e.preventDefault();

    const { feedtime, loc, food_category, food, numberOfDucks, weightOfFood } = this.state;

    axios.post('http://localhost:8090/feedduckinfo', { feedtime, loc, food, food_category, numberOfDucks,weightOfFood })
      .then((result) => {
        this.props.history.push("/")
      });
  }
*/







  handleSubmit = (event) => {
    event.preventDefault();

    const { feedtime,loc, food, food_category, numberOfDucks,weightOfFood} = this.state;

    if ( !feedtime || !loc || !food || !food_category || !numberOfDucks || !weightOfFood) {
      console.warn("missing required field!");
      return;
    }
    this.props.onSubmit( {feedtime, loc, food, food_category,numberOfDucks,weightOfFood} ); // <3>
    this.setState({ feedtime :'', loc: '', food: '', food_category: '', numberOfDucks: '', weightOfFood:''});
  };

  handleLocChange = (event) => { //<4>
    this.setState({ loc: event.target.value });
  };

  handleFoodChange = (event) => { //<4>
    this.setState({ food: event.target.value });
  };

  handleFoodWeightChange = (event) => { //<4>
    this.setState({ weightOfFood:  event.target.value });
  };

  handleFoodCatChange = (event) => { //<4>
    this.setState({ food_category: event.target.value });
  };

  handleDuckNumberChange = (event) => { //<4>
      this.setState({ numberOfDucks: event.target.value });
    };

  handleDateChange = (date) => {
    this.setState({
      feedtime: date
    });
  } ;

  render() {

  return(
      <div>
        <h1>Add a new Duck feed info:</h1>

        <form className="form form-inline" onSubmit={this.handleSubmit}  >
        <br/>

<label>Date to fed Duck</label>

       <DatePicker
        selected={this.state.feedtime}
        name="feedtime"
        onChange={this.handledDateChange}
        showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time" />


<br/>
<br/>
  <label>Your location</label>
   <input className="form-control" name="loc" type="text" value={ this.state.loc } onChange={ this.handleLocChange } />

<br/>
<br/>
     <label>what  of food fed ducks </label>
     <input className="form-control" name="food" type="text" value={ this.state.food } onChange={ this.handleFoodChange } />


        <br/>
        <br/>
                <label>what kind  of food feed ducks </label>
      <input className="form-control" name="food_category" type="text"
      value={this.state.food_category}  onChange={this.handleFoodCatChange} />


  <br/>
  <br/>
               <label>
                Number of ducks:
                  <input
                  name="numberOfDucks"
                  type="number"
                  value={this.state.numberOfDucks}
                  onChange={this.handleDuckNumberChange} />
              </label>
<br/>
<br/>

              <label>
                how many food feed to ducks
                <input
                  name="weightOfFood"
                  type="number"
                  value={this.state.weightOfFood}
                  onChange={this.handleFoodWeightChange} />
              </label>


          <input className="btn btn-success"  type="submit" value="Add to Database" />
        </form>
      </div>
    );

  }
}

AddDuckFeedForm.propTypes = {


  onSubmit: func
};

//ReactDOM.render(<AddFeedDuckInfo />, document.getElementById('AddFeedDuckInfo'));

export default AddDuckFeedForm;