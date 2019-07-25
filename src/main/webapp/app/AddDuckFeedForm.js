import React from 'react';
import {array, func} from 'prop-types';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class AddDuckFeedForm extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
     startDate: new Date(),
      loc: '',
      food: '',
      food_category: {id: 1, value: 4 },
      numberOfDucks: 10,
      weightOfFood : 0.5
      };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { startDate,loc, food, food_category, numberOfDucks,weightOfFood} = this.state;

    if ( !startDate || !loc || !food || !food_category.id || !numberOfDucks || weightOfFood) {
      console.warn("missing required field!");
      return;
    }
    this.props.onSubmit( {startDate, loc, food, food_category,numberOfDucks,weightOfFood} ); // <3>
    this.setState({ startDate :'', loc: '', food: '', food_category: {id: ''}, numberOfDucks: '', weightOfFood:''});
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
    this.setState({ food_category: {id: event.target.value} });
  };

  handleDuckNumberChange = (event) => { //<4>
      this.setState({ numberOfDucks: event.target.value });
    };

  handleDateChange = (date) => {
    this.setState({
      startDate: date
    });
  } ;

  render() {

    function renderSelectList(item) { //<5>
      return <option key={item.id} value={item.id}>{item.name}</option>
    }

    return(
      <div>
        <h1>Add a new Duck fed info:</h1>

        <form className="form form-inline" onSubmit={this.handleSubmit}  >
        <br/>

          <label>Date to fed Duck</label>

       <DatePicker
        selected={this.state.startDate}
        name="fedtime"
        onChange={this.handledDateChange}
        showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
      />


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

            <label>what kind  of food fed ducks </label>
                    <select className="form-control" name="food_category" value={this.state.food_category.id}
                      onChange={this.handleFoodCatChange}>  {/*<6>*/}
                      <option value={null}>Select a Food Category ...</option>

                    </select>


                    <br/>

         <br />
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
                how many food fed to ducks
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
food_category: array,


  onSubmit: func
};

export default AddDuckFeedForm;