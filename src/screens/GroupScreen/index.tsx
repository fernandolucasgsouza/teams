import { StatusBar } from "expo-status-bar";
import { Container, Title } from "./styles";

export function GroupScreen() {
  return (
    <Container>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Title>Groups</Title>
    </Container>
  );
}
