import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import theme from "./src/theme";
import { NewGroupScreen } from "@screens/NewGroupScreen";
import { LoadingComponent } from "@components/LoadingComponent";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      ></StatusBar>
      {fontsLoaded ? <NewGroupScreen /> : <LoadingComponent />}
    </ThemeProvider>
  );
}
