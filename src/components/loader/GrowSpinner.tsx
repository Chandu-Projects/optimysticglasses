import { Spinner } from 'reactstrap';

interface Props {
  style?: any;
}
const GrowSpinner = (props: Props) => (
  <div style={props.style}>
    <Spinner type='grow' style={{ marginRight: '10px' }} />
    <Spinner type='grow' style={{ marginRight: '10px' }} />
    <Spinner type='grow' />
  </div>
);

export default GrowSpinner;
