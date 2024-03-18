import { Button } from "@chakra-ui/react";
import { FC } from "react";

interface Button {
  label: string;
  height: string;
  variant: string;
}

const MyButton: FC<Button> = ({ label, height, variant }) => {
  return (
    <Button variant={variant} h={height}>
      {label}
    </Button>
  );
};

export default MyButton;
