import React from 'react';
import PropTypes from 'prop-types';
import '../css/styles.css';
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
      children,
      featuredIconId,
    } = this.props;
    const {
      adjustedPadding,
    } = this.state;
    return (
      <Card>
        <Row styles={{ margin: '0px' }}>
          <Column breakpoint="sm" size={4} styles={{ margin: '0px', padding: '0px' }}>
            <CardBody>
              <div id={featuredIconId} className="featured text-na-dark-blue" style={{ margin: '0px', padding: adjustedPadding, textAlign: 'center' }}>
                <span>SV</span>
              </div>
            </CardBody>
          </Column>
          <Column breakpoint="sm" size={6}>
            <CardBody>
              <CardTitle>StrongView Title</CardTitle>
              <CardText>{children}</CardText>
              <Button className="btn-outline-dark">Learn more</Button>
            </CardBody>
          </Column>
        </Row>
      </Card>
    );
  }
}

Shelf.propTypes = {
  children: PropTypes.node.isRequired,
  featuredIconId: PropTypes.string.isRequired,
};

export default Shelf;
