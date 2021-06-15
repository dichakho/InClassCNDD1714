import { createArraySelector } from '@utils/selector';
import { PARENT_NAME, NAME, LIST } from './constant';

export const root = (state: any) => {
  if (PARENT_NAME) return state[PARENT_NAME][NAME];
  return state[NAME];
};

export const contactListSelector = createArraySelector(root, LIST);
