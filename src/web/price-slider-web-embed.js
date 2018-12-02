// Container Component
const Container = ({ children, fluid, className }) => {
  const withFluid = fluid === undefined || fluid === false ? '' : '-fluid';
  return (<div className={`container${withFluid} ${className}`}>{children}</div>);
};

// Row Component
const Row = ({ children, className }) => (<div className={`row ${className}`}>{children}</div>);

// Column Component
const Col = ({
  children, size, breakpoint,
}) => (<div className={`col col-${breakpoint}-${size}`}>{children}</div>);

// Card Component
const Card = ({ children, style }) => (
  <div className="card" style={style}>{children}</div>
);

// CardHeader Component
const CardHeader = ({ children, style }) => (
  <div className="card-header" style={style}>{children}</div>
);

// CardTitle Component
const CardTitle = ({ children, style, classes }) => (
  <h5 className={`card-title ${classes}`} style={style}>{children}</h5>
);

// CardBody Component
const CardBody = ({ children, style }) => (
  <div className="card-body" style={style}>{children}</div>
);

// CardText Component
const CardText = ({ children }) => (
  <p className="card-text">{children}</p>
);

// RangeSlider Component
const RangeSlider = ({
  id, max, min, step, value, onChange,
}) => (
  <div>
    <input id={id} type="range" className="custom-range" min={min} max={max} step={step} value={value} onChange={onChange} />
  </div>
);

// PriceSlider Component
class PriceSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      sends: 0,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.mapData = this.mapData.bind(this);
  }

  componentDidMount() {
    const { id, priceData } = this.props;
    const rangeSliderValue = document.getElementById(id).value;
    this.mapData(rangeSliderValue, priceData);
  }

  handleOnChange(element) {
    const index = element.target.value;
    const { priceData } = this.props;
    this.mapData(index, priceData);
  }

  /**
     * Maps the object beloging to the passed index to this component state's respective value.
     * @param {number} index
     * @param {array} object
     */
  mapData(index, object) {
    this.setState(
      {
        price: object[index].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        sends: object[index].sends.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
      },
    );
  }

  render() {
    const { id, min, max } = this.props;
    const { price, sends } = this.state;
    return (
      <Container className="py-5">
        <Row className="justify-content-center mb-5">
          <Col size={6} breakpoint="md">
            <RangeSlider id={id} min={min} max={max} onChange={this.handleOnChange} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col size={4} breakpoint="md">
            <Card className="border-dark" style={{ textAlign: 'center', color: '#343a40' }}>
              <CardHeader style={{ fontWeight: 'bold' }}>Pricing</CardHeader>
              <CardBody>
                <CardTitle style={{ fontWeight: 'bolder', fontSize: '3rem', color: '#17a2b8' }}>
                  {`${sends}`}
                </CardTitle>
                <CardText><small>credits</small></CardText>
                <hr />
                <CardTitle style={{ fontWeight: 'bolder', fontSize: '3rem' }}>
                  {`$${price}`}
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const nmPriceMap = [
  {
    price: 75,
    sends: 10000,
  },
  {
    price: 300,
    sends: 100000,
  },
  {
    price: 650,
    sends: 500000,
  },
  {
    price: 1000,
    sends: 1000000,
  },
];

ReactDOM.render(
  <PriceSlider id="lmRangeSlider" min={0} max={3} priceData={nmPriceMap} />,
  document.getElementById('price-slider'),
);
