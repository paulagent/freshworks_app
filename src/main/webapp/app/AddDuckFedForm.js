import React from 'react';
import {array, func} from 'prop-types';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class AddDuckFedForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { // <1>
     startDate: new Date(),
      name: '',
      make: {id: ''},
      model: {id: ''},
      driver: {id: ''}};
  }

  handleSubmit = (event) => { // <2>
    event.preventDefault();

    const {name, make, model, driver} = this.state;

    if (!name || !make.id || !model.id || !driver.id) {
      console.warn("missing required field!");
      return;
    }
    this.props.onSubmit( {name, make, model, driver} ); // <3>
    this.setState({ name: '', make: {id: ''}, model: {id: ''}, driver: {id: ''}});
  };

  handleNameChange = (event) => { //<4>
    this.setState({ name: event.target.value });
  };

  handleMakeChange = (event) => { //<4>
    this.setState({ make: {id: event.target.value} });
  };

  handleModelChange = (event) => { //<4>
    this.setState({ model: {id: event.target.value} });
  };

  handleDriverChange = (event) => { //<4>
    this.setState({ driver: {id: event.target.value} });
  };

/*handleDateChange = (date) => {
    this.setState({
      startDate: date
    });
  } ;
*/
  render() {

    function renderSelectList(item) { //<5>
      return <option key={item.id} value={item.id}>{item.name}</option>
    }

    return(
      <div>
        <h3>Add a new fed info:</h3>
        <form className="form form-inline" onSubmit={this.handleSubmit}  >
          <label>Date to fed Duck</label>

       <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />



<br/>
  <label>what food fed Duck</label>
          <input className="form-control" name="name" type="text" value={ this.state.name } onChange={ this.handleNameChange } />





          <label>what  of food fed ducks </label>
          <select className="form-control" name="make" value={this.state.make.id} 
            onChange={this.handleMakeChange}>  {/*<6>*/}
            <option value={null}>Select a Make...</option>
            {this.props.makes.map(renderSelectList)}  {/*<5>*/}
          </select>


          <br/>

            <label>what kind  of food fed ducks </label>
                    <select className="form-control" name="make" value={this.state.make.id}
                      onChange={this.handleMakeChange}>  {/*<6>*/}
                      <option value={null}>Select a Make...</option>
                      {this.props.makes.map(renderSelectList)}  {/*<5>*/}
                    </select>


                    <br/>

         <br />
              <label>
                Number of ducks:
                <input
                  name="numberOfDucks"
                  type="number"
                  value={this.state.numberOfDucks}
                  onChange={this.handleInputChange} />
              </label>
<br/>
          <label>how many food fed to ducks</label>
          <select className="form-control" name="driver" value={this.state.driver.id} 
            onChange={this.handleDriverChange}>  {/*<6>*/}
            <option value={null}>Select a Driver...</option>
            {this.props.drivers.map(renderSelectList)}  {/*<5>*/}
          </select>





          <input className="btn btn-success"  type="submit" value="Add to database" />
        </form>
      </div>
    );

  }
}

AddDuckFedForm.propTypes = {

  makes: array,
  models: array,
  drivers: array,
  onSubmit: func
};

export default AddDuckFedForm;