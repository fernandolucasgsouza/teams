import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles';

export function Group() {
  return (
    <View style={styles.container}>
      <Text>Group</Text>
      <StatusBar style="auto" />
    </View>
  );
}

