import creators from "@/resources/creators";
import { CreatorId } from "@/types/Creator";

export const getCreatorById = (id: CreatorId) => {
  return creators.find((creator) => creator.id === id);
};
