import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Image, HStack, Pressable } from "native-base";
import { setInMemory } from "../Helpers/storage";
import CoveringPressable from "./CoveringPressable";

interface Props {
  checkMark: number[];
  setCheckMark: Dispatch<SetStateAction<number[]>>;
}

const ScreenPressable: FunctionComponent<Props> = (props) => {
  const { checkMark, setCheckMark } = props;

  const addCheckMark = async () => {
    let lastElement = checkMark[checkMark.length - 1];

    if (!lastElement || lastElement === 5) {
      setCheckMark([...checkMark, 1]);
    } else {
      let newArr = [...checkMark];
      newArr[newArr.length - 1]++;
      setCheckMark(newArr);
    }

    setInMemory("checkMark", checkMark);
  };

  return (
    <CoveringPressable onPress={addCheckMark}>
      {checkMark.map((element, index) => {
        if (element === 5) {
          return (
            <Image
              source={require("../../assets/5.png")}
              resizeMode="contain"
              alt="1"
              h="70"
              w="60"
              mb={3}
              key={index}
            />
          );
        } else {
          return Array(element)
            .fill(true)
            .map((_, index) => {
              if (index === 0) {
                return (
                  <Image
                    source={require(`../../assets/1.png`)}
                    resizeMode="contain"
                    alt="1"
                    h="70"
                    w="3"
                    ml={1.5}
                    key={index}
                  />
                );
              } else if (index === 1) {
                return (
                  <Image
                    source={require(`../../assets/2.png`)}
                    resizeMode="contain"
                    alt="1"
                    h="70"
                    w="2.5"
                    key={index}
                  />
                );
              } else if (index === 2) {
                return (
                  <Image
                    source={require(`../../assets/3.png`)}
                    resizeMode="contain"
                    alt="1"
                    h="70"
                    w="3"
                    key={index}
                  />
                );
              } else {
                return (
                  <Image
                    source={require(`../../assets/4.png`)}
                    resizeMode="contain"
                    alt="1"
                    h="70"
                    w="2"
                    ml={0.5}
                    key={index}
                  />
                );
              }
            });
        }
      })}
    </CoveringPressable>
  );
};

export default ScreenPressable;
