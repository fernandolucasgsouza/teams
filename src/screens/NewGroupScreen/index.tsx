import Icon from "@expo/vector-icons/FontAwesome6";

import { InputComponent } from "@components/InputComponent";
import { HeaderComponent } from "@components/HeaderComponent";
import { ButtonComponent } from "@components/ButtonComponent";
import { HighlightComponent } from "@components/HighlightComponet";

import theme from "@theme/index";
import { Container, Content } from "./styles";

export function NewGroupScreen() {
  return (
    <Container>
      <HeaderComponent />
      <Content>
        <Icon
          name="users"
          size={theme.FONT_SIZE.XL2}
          color={theme.COLORS.GREEN_700}
        />
        <HighlightComponent
          title="Nova Turma"
          subtitle="Crie uma turma para adicionar as pessoas."
        />
        <InputComponent />
        <ButtonComponent title="Criar Turma" />
      </Content>
    </Container>
  );
}
