import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  // baseStyle styles all buttons will have this in common
  baseStyle: {
    minHeight: "32pt",
    marginBottom: "16pt", // Make sure this is necessary for ALL buttons
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "4pt",
  },
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // Every 1 is based on 4px (or pt)
      py: 4, // So 4 === 16px
    },
  },
  // Two variants: outline and solid
  variants: {
    primary: {
      bg: "cyan.500",
      color: "white",
    },
    secondary: {
      border: "2px solid",
      borderColor: "cyan.500",
      color: "cyan.500",
    },
    tertiary: {
      textDecoration: "underline",
      borderColor: "cyan.500",
      color: "cyan.500",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "secondary",
  },
});
