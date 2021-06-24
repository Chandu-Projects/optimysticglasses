import {
  LOAD_LIST__FRAMES,
  LIST_FRAME_SUCCESS,
  LIST_FRAME_FAILED,
  LIST_SORT,
  LIST_FILTER,
} from '../../helper/actionTypes';

const INIT = {
  loading: true,
  image: '',
  frames: [],
  sortby: 0,
  selected: { label: 'Sort By', values: 0 },
  filterAttr: [],
};

interface TypeState {
  loading: boolean;
  image: string;
  frames: Array<any>;
  sortby: number;
  selected: any;
  filterAttr: any;
}

export const List = (state: TypeState = INIT, action: any) => {
  const type = action.type;
  const payload = action.payload;
  switch (type) {
    case LOAD_LIST__FRAMES:
      return {
        ...state,
        loading: true,
      };
    case LIST_FRAME_SUCCESS:
      return {
        ...state,
        loading: false,
        sortby: 0,
        selected: { label: 'Sort By', values: 0 },
        image: payload.image,
        frames: payload.frames,
      };
    case LIST_FRAME_FAILED:
      return {
        ...state,
        loading: false,
      };
    case LIST_SORT:
      return {
        ...state,
        sortby: payload.sortby,
        selected: payload.selected,
      };
    case LIST_FILTER:
      return {
        ...state,
        filterAttr: payload,
      };

    default:
      return state;
  }
};
