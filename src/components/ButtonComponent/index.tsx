import { TouchableHighlightProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = TouchableHighlightProps & {
  type?: ButtonTypeStyleProps;
  title: string;
};

export function ButtonComponent({ title, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
