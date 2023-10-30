import { useHeadTags } from "../../hooks/useHeadTags";

/**
 * Component definition
 */

export const HeadApi = ({page}) => {
  return useHeadTags(page);
};
