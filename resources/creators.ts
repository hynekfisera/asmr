import { Creator, CREATOR_ID } from "@/types/Creator";
import Gibi from "/public/assets/creators/gibi.jpeg";
import Darling from "/public/assets/creators/darling.jpeg";

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
];

export default creators;
