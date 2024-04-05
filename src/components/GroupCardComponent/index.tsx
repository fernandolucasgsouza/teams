import { TouchableOpacityProps } from "react-native";

import { Container, Title, UsersIcon } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function GroupCardComponent({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <UsersIcon />
      <Title>{title}</Title>
    </Container>
  );
}
