import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  // baseStyle styles all buttons will have this in common
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "4pt", // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
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
