import { Button } from "@chakra-ui/react";
import { FC } from "react";

interface Button {
  label: string;
  onClick: () => void;
  variant: string;
}

const MyButton: FC<Button> = ({ label, variant, onClick }) => {
  return (
    <Button onClick={onClick} variant={variant}>
      {label}
    </Button>
  );
};

export default MyButton;
