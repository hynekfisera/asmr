import { Creator, CREATOR_ID } from "@/types/Creator";
import Gibi from "/public/assets/creators/gibi.jpeg";
import Darling from "/public/assets/creators/darling.jpeg";
import LunaBloom from "/public/assets/creators/lunabloom.jpeg";
import Tiptoe from "/public/assets/creators/tiptoe.jpeg";
import Rebecca from "/public/assets/creators/rebecca.jpeg";

const creators: Creator[] = [
  {
    id: CREATOR_ID.Gibi,
    name: "Gibi ASMR",
    url: "https://www.youtube.com/@GibiASMR",
    icon: Gibi,
  },
  {
    id: CREATOR_ID.Darling,
    name: "ASMR Darling",
    url: "https://www.youtube.com/@theasmrdarling",
    icon: Darling,
  },
  {
    id: CREATOR_ID.LunaBloom,
    name: "Luna Bloom ASMR",
    url: "https://www.youtube.com/@LunaBloomASMR",
    icon: LunaBloom,
  },
  {
    id: CREATOR_ID.Tiptoe,
    name: "Tiptoe Tingles ASMR",
    url: "https://www.youtube.com/@TiptoeTingles",
    icon: Tiptoe,
  },
  {
    id: CREATOR_ID.Rebecca,
    name: "ASMR Rebecca",
    url: "https://www.youtube.com/@ASMRRebecca",
    icon: Rebecca,
  },
];

export default creators;
