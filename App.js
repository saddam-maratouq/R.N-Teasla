import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarItem from "./components/carItem/CarItem";
import CarList from "./components/carList/CarList";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <View style={styles.container}>
    <Header/>
     <CarList 
     />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
