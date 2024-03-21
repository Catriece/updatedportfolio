import { useMediaQuery } from "@chakra-ui/react";

// Border radius options
export const SM_RADIUS = "8pt";
export const MD_RADIUS = "16pt";
export const LG_RADIUS = "32pt";

// Spacing Options
export const XS_SPACE = "8pt"; // repetitive, find a better name?
export const SM_SPACE = "16pt"; // repetitive, find a better name?
export const MD_SPACE = "24pt";
export const LG_SPACE = "32pt"; // repetitive, find a better name?
export const XL_SPACE = "48pt";
export const XXL_SPACE = "80pt";

// Screen Sizes
export const screenSize = () => {
  const [ISLARGERTHAN500] = useMediaQuery("(min-width: 500px)");

  return ISLARGERTHAN500;
};
