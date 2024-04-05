import styled from "styled-components/native";
import Icons from "@expo/vector-icons/FontAwesome6";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 42px;
`;
export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;
export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(Icons).attrs({
  name: "angle-left",
  size: 32,
})`
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-top: 8px;
`;
