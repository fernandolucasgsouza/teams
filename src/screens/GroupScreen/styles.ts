import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.DARK};
  align-items: center;
  padding: 24px;
  justify-content: center;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 32px;
`;
