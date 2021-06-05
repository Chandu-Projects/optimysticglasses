import {
  HOME_CAROUSEL,
  HOME_CAROUSEL_SUCCESS,
  HOME_CAROUSEL_FAILED,
  HOME_POUPALR_FRAMES,
  HOME_POUPALR_FRAMES_SUCCESS,
  HOME_POUPALR_FRAMES_FAILED,
} from '../../helper/actionTypes';

const INIT = {
  carouselLoading: true,
  carouselFrames: [],
  framesLoading: true,
  popularFrames: [],
};

interface TypeState {
  carouselLoading: boolean;
  carouselFrames: Array<any>;
  framesLoading: boolean;
  popularFrames: Array<any>;
}

export const Home = (state: TypeState = INIT, action: any) => {
  const type = action.type;
  const payload = action.payload;
  switch (type) {
    case HOME_CAROUSEL:
      return {
        ...state,
        carouselLoading: true,
      };
    case HOME_CAROUSEL_SUCCESS:
      return {
        ...state,
        carouselLoading: false,
        carouselFrames: payload,
      };
    case HOME_CAROUSEL_FAILED:
      return {
        ...state,
        carouselLoading: false,
      };
    case HOME_POUPALR_FRAMES:
      return {
        ...state,
        framesLoading: true,
      };
    case HOME_POUPALR_FRAMES_SUCCESS:
      return {
        ...state,
        framesLoading: false,
        popularFrames: payload,
      };
    case HOME_POUPALR_FRAMES_FAILED:
      return {
        ...state,
        framesLoading: false,
      };

    default:
      return state;
  }
};
