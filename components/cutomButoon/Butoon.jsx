import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";





const Butoon = ({ type, content, onPress }) => {

  const backgroundButoon = type === "primary" ?  '#171A20CC' : '#FFFFFFA6';

  const textColor = type === "primary" ? '#FFFFFF' : '#171A20';

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => onPress()}
        style={[styles.Butoon, { backgroundColor: backgroundButoon }]}
      >
        <Text style={[styles.text, { color: textColor }]}> {content} </Text>
      </Pressable>
    </View>
  );
};

export default Butoon;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "flex-end",
    // justifyContent: "flex-end",
    width: "100%",
    padding: 10,
  },
  Butoon: {
    // width: "100%",
    // marginBottom:40,
    borderRadius: 20,
    height:40,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    // paddingLeft:10,
    fontWeight: "500",
    // backgroundColor:'white',
    // textAlign:'center',
    // padding: 10,
    textTransform: "uppercase",
  },
});
