import React from 'react';
import {Table} from 'react-bootstrap';
import {array} from 'prop-types';

class FeedInfo extends React.Component {




  render() {
    function renderFeedInfoRow(feedinfo) {

      return (<tr key={feedinfo.id}>
        <td>{feedinfo.id}</td>
        <td>{feedinfo.loc}</td>
        <td>{feedinfo.food}</td>
        <td>{feedinfo.numberofDuck}</td>
        <td>{feedinfo.foodWeight}</td>
      </tr>);
    }


    return <div>
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>ID</th>
          <th>Loc</th>
          <th>Food</th>
          <th>Duck numbers</th>
          <th>Food Weight</th>
        </tr>
        </thead>
        <tbody>

        {/*this.props.FeedInfo.map(renderFeedInfoRow) */}

        </tbody>
      </Table>
    </div>;
  }
}

FeedInfo.propTypes = {
  FeedInfo: array
};

export default FeedInfo;