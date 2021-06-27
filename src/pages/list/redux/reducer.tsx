import {
  LOAD_LIST__FRAMES,
  LIST_FRAME_SUCCESS,
  LIST_FRAME_FAILED,
  LIST_SORT,
  LIST_FILTER,
  CLEAR_LIST_FILTER,
  LIST_FILTER_INIT,
} from '../../helper/actionTypes';
import cloneDeep from 'lodash';

const INIT = {
  loading: true,
  image: '',
  frames: [],
  sortby: 0,
  selected: { label: 'Best Seller', value: 0 },
  initFilter: [],
  filterAttr: [],
};

interface TypeState {
  loading: boolean;
  image: string;
  frames: Array<any>;
  sortby: number;
  selected: any;
  initFilter: any;
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
        selected: { label: 'Best Seller', value: 0 },
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

    case LIST_FILTER_INIT:
      return {
        ...state,
        initFilter: payload,
        filterAttr: payload,
      };
    case LIST_FILTER:
      return {
        ...state,
        filterAttr: payload,
      };
    case CLEAR_LIST_FILTER:
      return {
        ...state,
        filterAttr: state.initFilter,
      };

    default:
      return state;
  }
};
