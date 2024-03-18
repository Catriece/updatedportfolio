import { Button } from "@chakra-ui/react";
import { FC } from "react";

interface Button {
  label: string;

  variant: string;
}

const MyButton: FC<Button> = ({ label, variant }) => {
  return <Button variant={variant}>{label}</Button>;
};

export default MyButton;
