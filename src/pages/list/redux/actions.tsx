import {
  LOAD_LIST__FRAMES,
  LIST_FRAME_SUCCESS,
  LIST_FRAME_FAILED,
  LIST_SORT,
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
