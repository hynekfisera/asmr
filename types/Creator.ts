import { StaticImageData } from "next/image";

export const CREATOR_ID = {
  Gibi: "GibiASMR",
  Darling: "ASMRDarling",
  LunaBloom: "LunaBloomASMR",
  Tiptoe: "TiptoeTinglesASMR",
  Rebecca: "ASMRRebecca",
} as const;

export type CreatorId = (typeof CREATOR_ID)[keyof typeof CREATOR_ID];

export type Creator = {
  id: CreatorId;
  name: string;
  url: string;
  icon: StaticImageData;
};
