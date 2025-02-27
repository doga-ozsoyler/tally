import React, { FunctionComponent } from "react";
import { Image } from "native-base";

interface Props {
  index: number;
  squareType: boolean;
}

const SquareImage: FunctionComponent<Props> = (props) => {
  const { index, squareType } = props;

  return (
    <Image
      source={
        squareType
          ? require(`../../assets/full-square.png`)
          : require(`../../assets/empty-square.png`)
      }
      h="6%"
      w="6%"
      resizeMode="contain"
      alt="1"
      mr={(index + 1) % 5 === 0 ? "3%" : 0}
    />
  );
};

export default SquareImage;
