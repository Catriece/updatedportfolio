import { Button } from "@chakra-ui/react";
import { FC } from "react";

interface Button {
  label: string;
  height: string;
  borderRadius: string;
}

const MyButton: FC<Button> = ({ label, height, borderRadius }) => {
  return (
    <Button h={height} borderRadius={borderRadius}>
      {label}
    </Button>
  );
};

export default MyButton;
