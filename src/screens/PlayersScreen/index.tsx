import { HeaderComponent } from "@components/HeaderComponent";
import { HighlightComponent } from "@components/HighlightComponet";

import { Container } from "./styles";
import { ButtonIconComponent } from "@components/ButtonIconComponent";

export function PlayersScreen(){
    return(
        <Container>
            <HeaderComponent showBackButton/>
            <HighlightComponent title="Player" subtitle="Playyer Lorem Ipsum"/>
            <ButtonIconComponent icon="home" />
        </Container>
    )
}
