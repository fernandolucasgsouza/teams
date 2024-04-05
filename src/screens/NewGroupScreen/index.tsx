import { InputComponent } from "@components/InputComponent";
import { HeaderComponent } from "@components/HeaderComponent";
import { ButtonComponent } from "@components/ButtonComponent";
import { HighlightComponent } from "@components/HighlightComponet";

import { UsersIcon } from "@assets/styles";
import { Container, Content } from "./styles";

export function NewGroupScreen() {
  return (
    <Container>
      <HeaderComponent showBackButton />
      <Content>
        <UsersIcon />
        <HighlightComponent
          title="Nova Turma"
          subtitle="Crie uma turma para adicionar as pessoas."
        />
        <InputComponent placeholder="Nome da turma"/>
        <ButtonComponent title="Criar Turma" />
      </Content>
    </Container>
  );
}
