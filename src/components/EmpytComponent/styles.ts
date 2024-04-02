import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: "100%";
  justify-content: center;
  align-items: center;
`;
export const Message = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
