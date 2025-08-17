import { Text, View } from "react-native";
import { styles } from "./styles";

export const  NavinestHome = () => {
  return (
    <View
      style={styles.container}
    >
      <Text>Navinest Home</Text>
    </View>
    // <Stack.Navigator>
        //I AM HERE - all the expo routing stuff should happen here - whether tabs or stacks or drawers or slots
    // </Stack.Navigator>
  );
}
