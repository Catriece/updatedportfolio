import { Box, Image } from "@chakra-ui/react";
import catriece from "../../assets/catriece.png";

const CatrieceGif = () => {
  return (
    <Box>
      <Image src={catriece} alt={"Catriece Collage"} h={"500px"} />
    </Box>
  );
};

export default CatrieceGif;
