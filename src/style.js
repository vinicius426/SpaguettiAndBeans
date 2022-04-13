import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  button: {
    flexDirection: "row",
    height: 40,
    width: 200,
    backgroundColor: "#f2790f",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
