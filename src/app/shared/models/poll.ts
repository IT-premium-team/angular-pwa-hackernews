import { AllowedItemTypes } from './allowed-item-types';

export interface IPoll {
  id: number;
  deleted: boolean;
  type: AllowedItemTypes;
  by: string;
  time: number;
  dead: boolean;
  kids: number[];
  parts: number[];
  descendants: number;
  score: number;
  title: string;
  text: string;
}