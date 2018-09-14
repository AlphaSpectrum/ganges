import React from 'react';
import PropTypes from 'prop-types';
// import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import CardTitle from './CardTitle';
import CardText from './CardText';
import CardBody from './CardBody';
import Button from './Button';

class Shelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 10,
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <Card>
        <CardBody>
          <div className="row">
            <div className="col-sm-6">
              <div>
                <p className="featured" style={{ margin: '0px', padding: '69px 0', textAlign: 'center' }}>Test</p>
              </div>
            </div>
            <div className="col-sm-6">
              <CardTitle>StrongView Title</CardTitle>
              <CardText>{'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}</CardText>
              <Button className="btn-outline-dark">Learn more</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

Shelf.defaultProps = {
  featuredIconId: PropTypes.string.isRequired,
  featuredBodyId: PropTypes.string.isRequired,
};

export default Shelf;
