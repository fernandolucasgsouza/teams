import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 96%;
  height: 90px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  padding: 24px;
  margin-bottom: 12px;
`;
export const Title = styled.Text`
  font-family:${({theme})=>theme.FONT_FAMILY.REGULAR};
  color:${({theme})=>theme.COLORS.GRAY_200};
  font-size: ${({theme})=>theme.FONT_SIZE.MD}px;
  margin-left: 20px;
  `