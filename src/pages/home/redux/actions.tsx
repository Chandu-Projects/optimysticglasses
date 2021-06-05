import {
  HOME_CAROUSEL,
  HOME_CAROUSEL_SUCCESS,
  HOME_CAROUSEL_FAILED,
  HOME_POUPALR_FRAMES,
  HOME_POUPALR_FRAMES_SUCCESS,
  HOME_POUPALR_FRAMES_FAILED,
} from '../../helper/actionTypes';

type HomeAction = { type: string; payload: {} | [] | string };

export const homeCarousel = (): HomeAction => ({
  type: HOME_CAROUSEL,
  payload: {},
});
export const homeCarouselSuccess = (data: any): HomeAction => ({
  type: HOME_CAROUSEL_SUCCESS,
  payload: data,
});
export const homeCarouselFailed = (data: any): HomeAction => ({
  type: HOME_CAROUSEL_FAILED,
  payload: data,
});

export const homePoupularFrames = (): HomeAction => ({
  type: HOME_POUPALR_FRAMES,
  payload: {},
});
export const homePoupularFramesSuccess = (data: any): HomeAction => ({
  type: HOME_POUPALR_FRAMES_SUCCESS,
  payload: data,
});
export const homePoupularFramesFailed = (data: any): HomeAction => ({
  type: HOME_POUPALR_FRAMES_FAILED,
  payload: data,
});
