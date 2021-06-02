import { FC } from 'react';
import { Label } from 'reactstrap';

interface Props {
  value: string;
}

const Title: FC<Props> = (props: Props) => {
  return (
    <div className='title-wrapper'>
      <Label className='title'>{props.value}</Label>
    </div>
  );
};

export default Title;
