import Icon from "@expo/vector-icons/FontAwesome6";

import { HeaderComponent } from "@components/HeaderComponent";
import { ButtonComponent } from "@components/ButtonComponent";
import { HighlightComponent } from "@components/HighlightComponet";

import { Container, Content } from "./styles";
import theme from "@theme/index";

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
        <ButtonComponent title="Criar Turma" />
      </Content>
    </Container>
  );
}
