import { FC, useState } from 'react';
import {
  Dropdown as DropDown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

interface Props {
  options: Array<any>;
  onSelect: any;
  selected: any;
  className?: string;
}

const Dropdown: FC<Props> = (props: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const options = props.options || [];
  const selected = props.selected || {};
  const className = props.className || '';

  return (
    <DropDown isOpen={dropdownOpen} toggle={toggle} className={className}>
      <DropdownToggle caret className='dropdown font-dropdown'>
        {selected.label}
      </DropdownToggle>
      <DropdownMenu>
        {options.map((item: any) => {
          return (
            <DropdownItem className='font-dropdown'>
              <span onClick={() => props.onSelect(item.value)}>
                {item.label}
              </span>
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </DropDown>
  );
};

export default Dropdown;
