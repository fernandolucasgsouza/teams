import { useState } from "react";
import { FlatList } from "react-native";

import { Container } from "./styles";
import { HeaderComponent } from "@components/HeaderComponent";
import { HighlightComponent } from "@components/HighlightComponet";
import { GroupCardComponent } from "@components/GroupCardComponent";
import { EmpytComponent } from "@components/EmpytComponent";

export function GroupScreen() {
  const [groupsState, setGroupsState] = useState(["Lorem ipsum 1"]);

  function onPress() {
    console.log("clicou");
  }

  return (
    <Container>
      <HeaderComponent />
      <HighlightComponent title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groupsState}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCardComponent title={item} onPress={onPress} />
        )}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", paddingLeft: 20 }}
        contentContainerStyle={!groupsState.length && { flex: 1}}
        ListEmptyComponent={() => (
          <EmpytComponent message="Que tal cadastrar uma turma?" />
        )}
      />
    </Container>
  );
}
