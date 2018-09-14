import React from 'react';
import PropTypes from 'prop-types';
// import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import CardTitle from './CardTitle';
import CardText from './CardText';
import CardBody from './CardBody';
import Button from './Button';
import Row from './Row';
import Column from './Column';

class Shelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adjustedPadding: 0,
    };
  }

  componentDidMount() {
    const {
      featuredIconId,
    } = this.props;
    const icon = document.getElementById(featuredIconId);
    const iconHeight = icon.offsetHeight;
    const iconParentHeight = icon.parentElement.offsetHeight;
    const adjustedPadding = (iconParentHeight - iconHeight) / 2;
    this.setState({ adjustedPadding });
  }

  render() {
    const {
      featuredIconId,
    } = this.props;
    const {
      adjustedPadding,
    } = this.state;
    return (
      <Card>
        <CardBody>
          <Row>
            <Column breakpoint="sm" size={6}>
              <p id={featuredIconId} className="featured" style={{ margin: '0px', padding: adjustedPadding, textAlign: 'center' }}>Test</p>
            </Column>
            <Column breakpoint="sm" size={6}>
              <CardTitle>StrongView Title</CardTitle>
              <CardText>{'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}</CardText>
              <Button className="btn-outline-dark">Learn more</Button>
            </Column>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

Shelf.propTypes = {
  featuredIconId: PropTypes.string.isRequired,
};

export default Shelf;
