export const frameType = [
  {
    id: 'fullrim',
    src: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png',
    title: 'Full Rim',
    selected: false,
  },
  {
    id: 'rimless',
    src: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png',
    title: 'Rimless',
    selected: false,
  },
  {
    id: 'halfrim',
    src: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png',
    title: 'Half Rim',
    selected: false,
  },
];

export const frameShape = [
  {
    id: 'rectangle',
    src: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Rectangle.png',
    title: 'Rectangle',
    selected: false,
  },
  {
    id: 'round',
    src: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Round.png',
    title: 'Round',
    selected: false,
  },
  {
    id: 'cateye',
    src: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/CatEye.png',
    title: 'Cat Eye',
    selected: false,
  },
  {
    id: 'wayfarer',
    src: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Rectangle.png',
    title: 'Wayfarer',
    selected: false,
  },
  {
    id: 'aviator',
    src: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/Round.png',
    title: 'Aviator',
    selected: false,
  },
  {
    src: 'https://static.lenskart.com/images/cust_mailer/Eyeglass/CatEye.png',
    title: 'Square',
    id: 'square',
    selected: false,
  },
];

export const frameColor = [
  {
    id: 'black',
    code: '#000',
    title: 'Black',
    selected: false,
  },
  {
    id: 'grey',
    code: '#430',
    title: 'Grey',
    selected: false,
  },
  {
    id: 'white',
    code: '#fff',
    title: 'White',
    selected: false,
  },
  {
    id: 'red',
    code: '#ccc',
    title: 'Red',
    selected: false,
  },
];

export const frameBrand = [
  {
    id: 'titan',
    title: 'Titan',
    selected: false,
  },
  {
    id: 'rayban',
    title: 'Rayban',
    selected: false,
  },
];

export const priceRange = [
  {
    id: 'below_1k',
    title: '499-999',
    unit: 'INR',
    selected: false,
  },
  {
    id: 'below_2k',
    title: '1000-1999',
    unit: 'INR',
    selected: false,
  },
  {
    id: 'below_3k',
    title: '2000-2999',
    unit: 'INR',
    selected: false,
  },
];

export const frameSize = [
  {
    id: 'small',
    title: 'Small',
    selected: false,
  },
  {
    id: 'medium',
    title: 'Medium',
    selected: false,
  },
  {
    id: 'wide',
    title: 'Wide',
    selected: false,
  },
  {
    id: 'extrawide',
    title: 'Extra Wide',
    selected: false,
  },
];

export const frameWidth = [
  {
    id: '128',
    title: '128',
    unit: 'MM',
    selected: false,
  },
  {
    id: '129',
    unit: 'MM',
    title: '129',
    selected: false,
  },
];

export const gender = [
  {
    id: 'men',
    title: 'Men',
    selected: false,
  },
  {
    id: 'women',
    title: 'Women',
    selected: false,
  },
];

export const filterAttr = {
  frameType: frameType,
  shape: frameShape,
  color: frameColor,
  brand: frameBrand,
  priceRange: priceRange,
  gender: gender,
  size: frameSize,
  width: frameWidth,
};
