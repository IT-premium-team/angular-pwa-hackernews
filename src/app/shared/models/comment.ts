import { AllowedItemTypes } from './allowed-item-types';

export interface IComment {
  id: number;
  deleted: boolean;
  type: AllowedItemTypes;
  by: string;
  time: number;
  dead: boolean;
  kids: number[];
  parent: number;
  text: string;
}