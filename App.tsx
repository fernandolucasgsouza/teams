import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components";

import theme from "./src/theme";
import { GroupScreen } from "@screens/GroupScreen";
import { LoadingComponent } from "@components/LoadingComponent";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  if (!fontsLoaded) {
    return (
      <ThemeProvider theme={theme}>
        <LoadingComponent />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GroupScreen />
    </ThemeProvider>
  );
}
