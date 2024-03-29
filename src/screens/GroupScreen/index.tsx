import { Container } from './styles';

import { HeaderComponent } from "@components/HeaderComponent";
import { HighlightComponent } from "@components/HighlightComponet";
import { GroupCardComponent } from "@components/GroupCardComponent";

export function GroupScreen() {

  function onPress() {
    console.log('clicou');
    
  }
  return (
    <Container>
      <HeaderComponent />
      <HighlightComponent title='Turmas' subtitle='Jogue com a sua turma' />
      <GroupCardComponent title='Galera do Teste' onPress={onPress}/>
      <GroupCardComponent title='Galera do Teste 2' onPress={onPress}/>
    </Container>
  );
}
