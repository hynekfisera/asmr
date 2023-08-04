export const CREATOR_ID = {
  Gibi: "GibiASMR",
} as const;

export type CreatorId = (typeof CREATOR_ID)[keyof typeof CREATOR_ID];

export type Creator = {
  id: CreatorId;
  name: string;
  url: string;
};
