import { Button } from "@chakra-ui/react";
import { FC } from "react";

interface Button {
  label: string;
  onClick: () => void;
  variant: string;
  width?: string;
  color?: string;
}

const MyButton: FC<Button> = ({ label, variant, onClick, width, color }) => {
  return (
    <Button mb={0} onClick={onClick} variant={variant} w={width} color={color}>
      {label}
    </Button>
  );
};

export default MyButton;
