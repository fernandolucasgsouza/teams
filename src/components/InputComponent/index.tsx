import { TextInputProps } from "react-native";
import { Container } from "./styles";

export function InputComponent({ ...rest }: TextInputProps) {
  return <Container {...rest}></Container>;
}
