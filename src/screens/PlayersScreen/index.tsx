import { HeaderComponent } from "@components/HeaderComponent";
import { HighlightComponent } from "@components/HighlightComponet";

import { Container } from "./styles";

export function PlayersScreen(){
    return(
        <Container>
            <HeaderComponent showBackButton/>
            <HighlightComponent title="Player" subtitle="Playyer Lorem Ipsum"/>
        </Container>
    )
}
