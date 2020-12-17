import { AllowedItemTypes } from './allowed-item-types';

export interface IJob {
  id: number;
  deleted: boolean;
  type: AllowedItemTypes;
  by: string;
  time: number;
  dead: boolean;
  kids: number[];
  text: string;
  url: string;
  title: string;
}