import { FC, Fragment, useState } from 'react';
import { Collapse } from 'reactstrap';
interface Props {
  title: string;
  children?: any;
  isOpen?: boolean;
}

const Collapsible: FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState(props.isOpen || false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <div className='position-relative'>
        <button
          onClick={toggle}
          className='collapsible-btn mb-2 font-filter-title'
        >
          {props.title}
        </button>

        <span
          className={isOpen ? 'collapsible-arrow-up' : 'collapsible-arrow-down'}
        />
      </div>
      <Collapse isOpen={isOpen}>{props.children}</Collapse>
    </Fragment>
  );
};

export default Collapsible;
