import { AllowedItemTypes } from './allowed-item-types';

export interface IBase {
  id: number;
  deleted: boolean;
  type: AllowedItemTypes;
  by: string;
  time: number;
  dead: boolean;
  kids: number[];
}