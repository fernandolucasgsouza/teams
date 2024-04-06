import { TouchableHighlightProps } from "react-native";

import { PRIMARY } from "@constants";
import { ButtonTypeStyleProps } from "@@types";

import { Container, Title } from "./styles";


type Props = TouchableHighlightProps & {
  type?: ButtonTypeStyleProps;
  title: string;
};

export function ButtonComponent({ title, type = PRIMARY, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
