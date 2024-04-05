import styled from "styled-components/native";
import Icons from "@expo/vector-icons/FontAwesome6";

export const UsersIcon = styled(Icons).attrs({
    name: "users",
    size: 32,
  })`
    color: ${({ theme }) => theme.COLORS.GREEN_700};
`;