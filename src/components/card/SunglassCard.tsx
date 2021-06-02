interface Props {
  frame: any;
  onClick: any;
}

const SunglassCard = (props: Props) => {
  const frame = props.frame;
  return (
    <button
      style={{
        backgroundImage: 'url(' + frame.src + ')',
      }}
      className='sunglass-card'
      onClick={() => props.onClick(frame.id)}
    >
      <span>{frame.title}</span>
    </button>
  );
};

export default SunglassCard;
