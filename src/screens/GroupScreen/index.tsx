import { StatusBar } from "expo-status-bar";
import { Container, Title } from "./styles";
import { HeaderComponent } from "@components/HeaderComponent";

import { HighlightComponent } from "@components/HighlightComponet";

export function GroupScreen() {
  return (
    <Container>
      <HeaderComponent />
      <HighlightComponent title="Turmas" subtitle="Jogue com a sua turma" />
    </Container>
  );
}
