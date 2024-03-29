import { TouchableOpacityProps } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome6";

import theme from "@theme/index";
import { Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function GroupCardComponent({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon
        name="users"
        size={theme.FONT_SIZE.XL2}
        color={theme.COLORS.GREEN_700}
      />
      <Title>{title}</Title>
    </Container>
  );
}
