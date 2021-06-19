import { FC } from 'react';

interface Props {
  href: string;
  value?: string;
  icon?: any;
  isExternal?: boolean;
  style?: any;
}

const Link: FC<Props> = (props: Props) => {
  return (
    <a
      className='font-link'
      style={{ ...props.style }}
      href={props.href}
      target={props.isExternal ? '_blank' : ''}
      rel='noreferrer'
    >
      {props.icon && <span>{props.icon}</span>}
      {props.value}
    </a>
  );
};

export default Link;
