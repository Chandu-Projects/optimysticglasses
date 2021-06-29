export const frameType = [
  {
    id: '3',
    src: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png',
    title: 'Full Rim',
    selected: false,
  },
  {
    id: '1',
    src: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png',
    title: 'Rimless',
    selected: false,
  },
  {
    id: '2',
    src: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png',
    title: 'Half Rim',
    selected: false,
  },
];

export const frameShape = [
  {
    id: '1',
    src: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Rectangle.png',
    title: 'Rectangle',
    selected: false,
  },
  {
    id: '2',
    src: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Round.png',
    title: 'Round',
    selected: false,
  },
  {
    id: '3',
    src: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/CatEye.png',
    title: 'Cat Eye',
    selected: false,
  },
  {
    id: '4',
    src: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Rectangle.png',
    title: 'Wayfarer',
    selected: false,
  },
  {
    id: '5',
    src: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Round.png',
    title: 'Aviator',
    selected: false,
  },
  {
    id: '6',
    src: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/CatEye.png',
    title: 'Square',
    selected: false,
  },
];

export const frameColor = [
  {
    id: '1',
    code: '#000',
    title: 'Black',
    selected: false,
  },
  {
    id: '2',
    code: '#430',
    title: 'Grey',
    selected: false,
  },
  {
    id: '3',
    code: '#fff',
    title: 'White',
    selected: false,
  },
  {
    id: '4',
    code: '#ccc',
    title: 'Red',
    selected: false,
  },
];

export const frameBrand = [
  {
    id: '1',
    title: 'Titan',
    selected: false,
  },
  {
    id: '2',
    title: 'Rayban',
    selected: false,
  },
];

export const priceRange = [
  {
    id: '1k',
    title: '499-999',
    unit: 'INR',
    selected: false,
  },
  {
    id: '2k',
    title: '1000-1999',
    unit: 'INR',
    selected: false,
  },
  {
    id: '3k',
    title: '2000-2999',
    unit: 'INR',
    selected: false,
  },
];

export const frameSize = [
  {
    id: '1',
    title: 'Small',
    selected: false,
  },
  {
    id: '2',
    title: 'Medium',
    selected: false,
  },
  {
    id: '3',
    title: 'Wide',
    selected: false,
  },
  {
    id: '4',
    title: 'Extra Wide',
    selected: false,
  },
];

export const frameWidth = [
  {
    id: '1',
    title: '128',
    unit: 'MM',
    selected: false,
  },
  {
    id: '2',
    unit: 'MM',
    title: '129',
    selected: false,
  },
];

export const gender = [
  {
    id: '1',
    title: 'Men',
    selected: false,
  },
  {
    id: '2',
    title: 'Women',
    selected: false,
  },
];

export const filterAttr = {
  type: frameType,
  shape: frameShape,
  color: frameColor,
  brand: frameBrand,
  price: priceRange,
  gender: gender,
  size: frameSize,
  width: frameWidth,
};
