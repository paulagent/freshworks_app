import React  from 'react';

import {array, func} from 'prop-types';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import ReactDOM from 'react-dom';

import {Grid, Col, Row} from 'react-bootstrap';

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
    this.setState({  feedtime: date });
  } ;

  render() {
    return(
        <div>
            <h1>Please add a new record of Duck feeding information.</h1>
            <form className="form form-inline" onSubmit={this.handleSubmit}>
                <br/>
            <Grid>
                <Row>
                    <Col><label>What time did you feed ducks?</label></Col>
                    <Col><DatePicker
                            selected={this.state.feedtime}
                            name="feedtime"
                            onChange={this.handleDateChange}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            dateFormat="MMMM d, yyyy h:mm aa"
                            timeCaption="time"/>
                     </Col>
                </Row>

                 <Row>
                    <Col><label>Where is your location?</label></Col>
                    <Col>
                        <input className="form-control" name="loc" type="text" value={ this.state.loc } onChange={ this.handleLocChange }/>
                    </Col>
                </Row>

                <Row>
                    <Col><label>Which food did you feed to ducks?</label></Col>
                    <Col>
                        <input className="form-control" name="food" type="text" value={ this.state.food } onChange={ this.handleFoodChange }/>
                    </Col>
                </Row>

                <Row>
                    <Col><label>What kind of food did you feed to ducks?</label></Col>
                    <Col>
                        <input className="form-control"
                               name="food_category"
                               type="text"
                               value={this.state.food_category}
                               onChange={this.handleFoodCatChange}/>
                    </Col>
                </Row>

                <Row>
                    <Col><label>How many ducks did you feed?</label></Col>
                    <Col>
                        <input name="numberOfDucks"
                               type="number"
                               value={this.state.numberOfDucks}
                               onChange={this.handleDuckNumberChange}/>
                    </Col>
                </Row>

                <Row>
                    <Col><label>How many food you did feed to ducks?</label></Col>
                    <Col>
                        <input name="weightOfFood"
                               type="number"
                               value={this.state.weightOfFood}
                               onChange={this.handleFoodWeightChange}/>
                    </Col>
                </Row>

            </Grid>
            <br/>
            <button className="btn btn-success" type="submit">Add Record</button>
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