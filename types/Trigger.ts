import { CreatorId } from "./Creator";

export type Trigger = {
  id: number;
  name: string;
  url: string;
  start: number;
  end: number;
  creatorId: CreatorId;
};
