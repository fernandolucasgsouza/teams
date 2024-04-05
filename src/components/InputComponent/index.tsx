import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

export function InputComponent({ ...rest }: TextInputProps) {
  const { COLORS } = useTheme();

  return (
    <Container {...rest} placeholderTextColor={COLORS.GRAY_300}></Container>
  );
}
