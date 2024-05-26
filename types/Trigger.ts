import { CreatorId } from "./Creator";

export type Trigger = {
  id: number;
  name: string;
  url: string;
  start: number;
  end: number;
  noTalking: boolean;
  creatorId: CreatorId;
};
