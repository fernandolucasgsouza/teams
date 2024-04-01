import { useState } from "react";
import { FlatList } from "react-native";

import { Container } from "./styles";
import { HeaderComponent } from "@components/HeaderComponent";
import { HighlightComponent } from "@components/HighlightComponet";
import { GroupCardComponent } from "@components/GroupCardComponent";

export function GroupScreen() {
  const [groupsState, setGroupsState] = useState([
    "Lorem Ipsum 1",
    "Lorem Ipsum 2",
    "Lorem Ipsum 3",
    "Lorem Ipsum 4",
    "Lorem Ipsum 5",
    "Lorem Ipsum 6",
    "Lorem Ipsum 7",
    "Lorem Ipsum 8",
    "Lorem Ipsum 9",
    "Lorem Ipsum 10",
    "Lorem Ipsum 11",
    "Lorem Ipsum 12",
  ]);

  function onPress() {
    console.log("clicou");
  }

  return (
    <Container>
      <HeaderComponent />
      <HighlightComponent title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groupsState}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCardComponent title={item} onPress={onPress} />
          )}
          showsVerticalScrollIndicator={false}
          style={{width:'100%', paddingLeft:20}}
      />

    </Container>
  );
}
