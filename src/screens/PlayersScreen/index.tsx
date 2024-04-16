import { HeaderComponent } from "@components/HeaderComponent";
import { HighlightComponent } from "@components/HighlightComponet";

import { Container, Form } from "./styles";
import { ButtonIconComponent } from "@components/ButtonIconComponent";
import { InputComponent } from "@components/InputComponent";

export function PlayersScreen() {
  return (
    <Container>
      <HeaderComponent showBackButton />
      <HighlightComponent title="Player" subtitle="Playyer Lorem Ipsum" />
      <Form>
        <InputComponent placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIconComponent icon="add" />
      </Form>
    </Container>
  );
}
