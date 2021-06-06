import {
  LOAD_LIST__FRAMES,
  LIST_FRAME_SUCCESS,
  LIST_FRAME_FAILED,
} from '../../helper/actionTypes';

const INIT = {
  loading: true,
  image: '',
  frames: [],
};

interface TypeState {
  loading: boolean;
  image: string;
  frames: Array<any>;
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
        image: payload.image,
        frames: payload.frames,
      };
    case LIST_FRAME_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
