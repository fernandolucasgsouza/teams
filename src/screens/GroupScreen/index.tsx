import { StatusBar } from "expo-status-bar";
import { Container, Title } from "./styles";
import { HeaderComponent } from "@components/HeaderComponent";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { HighlightComponent } from "@components/HighlightComponet";

export function GroupScreen() {
  return (
    <Container>
      <HeaderComponent />
      <HighlightComponent title="Turmas" subtitle="Jogue com a sua turma" />
    </Container>
  );
}
