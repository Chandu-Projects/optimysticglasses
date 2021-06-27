import {
  LOAD_LIST__FRAMES,
  LIST_FRAME_SUCCESS,
  LIST_FRAME_FAILED,
  LIST_SORT,
  LIST_FILTER,
  CLEAR_LIST_FILTER,
  LIST_FILTER_INIT,
} from '../../helper/actionTypes';

type ListAction = { type: string; payload: {} | [] | string };

export const loadListFrames = (): ListAction => ({
  type: LOAD_LIST__FRAMES,
  payload: {},
});
export const listFrameSuccess = (data: any): ListAction => ({
  type: LIST_FRAME_SUCCESS,
  payload: data,
});
export const listFrameFailed = (data: any): ListAction => ({
  type: LIST_FRAME_FAILED,
  payload: data,
});
export const sortList = (sortby: number, selected: any): ListAction => ({
  type: LIST_SORT,
  payload: { sortby, selected },
});

export const initializeFilter = (data: any): ListAction => ({
  type: LIST_FILTER_INIT,
  payload: data,
});

export const filterList = (data: any): ListAction => ({
  type: LIST_FILTER,
  payload: data,
});

export const clearFilter = (): ListAction => ({
  type: CLEAR_LIST_FILTER,
  payload: {},
});
