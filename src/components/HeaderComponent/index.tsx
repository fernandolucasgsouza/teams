import { Container, Logo, BackButton, BackIcon } from "./styles";
import logoImg from "@assets/logo.png";

export type Props = {
  showBackButton?: boolean;
};

export function HeaderComponent({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
