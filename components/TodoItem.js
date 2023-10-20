import React, { useState, useEffect } from "react";
import {
  View,
  Switch,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export default function TodoItem(props) {
  const [isEnabled, setIsEnabled] = useState(props.item.done);
  //   console.log(props.item.done);
  useEffect(() => {
    setIsEnabled(props.item.done);
  }, [props.item.done]);
  return (
    <View style={{ flexDirection: "row" }}>
      <Text
        style={[
          styles.text_item,
          { textDecorationLine: isEnabled ? "line-through" : "none" },
        ]}
      >
        {props.item.content}
      </Text>
      <Switch
        value={isEnabled}
        onValueChange={(state) => {
          setIsEnabled(state);
          props.updateItem(props.item.id);
        }}
      />

      <TouchableOpacity onPress={() => props.deleteTodo(props.item.id)}>
        <Image
          source={require("../assets/trash-can-outline.png")}
          style={{ height: 24, width: 24 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text_item: {
    marginLeft: 10,
    width: 150,
  },
});
