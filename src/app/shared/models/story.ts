import { AllowedItemTypes } from './allowed-item-types';

export interface IStory {
  id: number;
  deleted: boolean;
  type: AllowedItemTypes;
  by: string;
  time: number;
  dead: boolean;
  kids: number[];
  descendants: number;
  score: number;
  title: string;
  url: string;
}