import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  Switch,
} from "react-native";
import TodoItem from "./TodoItem";
import todoData from "../Helpers/todoData";

export default function TodoList() {
  const [newTodoText, setNewTodoText] = useState("");
  const [todos, setTodos] = useState(todoData);
  const [count, setCount] = useState(
    todoData.filter((item) => item.done).length
  );
  const [currentFilter, setCurrentFilter] = useState("afiche tout");

  // usefull CRUD function
  const updateCount = (offset) => {
    setCount(count + offset);
  };
  const deleteTodo = (id) => {
    const newTodos = todos.filter((item) => item.id != id);
    setTodos(newTodos);
    setCount(newTodos.filter((item) => item.done).length);
  };

  const addNewTodo = () => {
    if (newTodoText == "") console.log("le champ est vide");
    //anciens todos => ...todos & le nouveau todos
    setTodos([
      ...todos,
      {
        id: todos.length ? Math.max(...todos.map((item) => item.id)) + 1 : 1,
        content: newTodoText,
        done: false,
      },
    ]);
    console.log("nouveau item ajouté");
    setNewTodoText("");
  };
  const updateItem = (id) => {
    const newTodos = todos.map((item) => {
      return {
        id: item.id,
        content: item.content,
        done: item.id == id ? !item.done : item.done,
      };
    });
    setTodos(newTodos);
    setCount(newTodos.filter((item) => item.done).length);
  };
  const checkAll = () => {
    const newTodos = todos.map((item) => ({
      id: item.id,
      content: item.content,
      done: true,
    }));
    setTodos(newTodos);
    setCount(newTodos.length);
  };
  const checkNone = () => {
    const newTodos = todos.map((item) => ({
      id: item.id,
      content: item.content,
      done: false,
    }));
    setTodos(newTodos);
    setCount(newTodos.length);
  };

  const handleFilter = (filter) => {
    setCurrentFilter(filter);
  };
  return (
    <View style={{ margin: 10 }}>
      <View style={styles.filterButtons}>
        <Button title="En cours" onPress={() => handleFilter("enCours")} />
        <Button title="Faites" onPress={() => handleFilter("faites")} />
        <Button
          title="Afficher tout"
          onPress={() => handleFilter("toutAfficher")}
        />
      </View>

      <Text>{count} items réalisés</Text>
      {/* input group */}
      <View style={styles.textInput_group}>
        <TextInput
          style={styles.textinput_view}
          onChangeText={setNewTodoText}
          placeholder="saisir ici un nouvel item"
          onSubmitEditing={addNewTodo}
          value={newTodoText}
        />
        <View style={styles.buttoninput_view}>
          <Button onPress={addNewTodo} title="new" />
        </View>
      </View>
      {/* items displayed in flatlist      */}
      <FlatList
        style={{ paddingLeft: 10 }}
        data={todos.filter((todo) => {
          if (currentFilter === "enCours") {
            return !todo.done;
          } else if (currentFilter === "faites") {
            return todo.done;
          } else {
            return true;
          }
        })}
        renderItem={({ item }) => (
          <TodoItem
            item={item}
            deleteTodo={deleteTodo}
            updateItem={updateItem}
          />
        )}
      />

      <View style={styles.buttoninput_view2}>
        <Button onPress={checkAll} title="Check All" />
        <Button onPress={checkNone} title="Check None" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  textInput_group: {
    flexDirection: "row",
  },
  textinput_view: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttoninput_view: {
    margin: 12,
    paddingTop: 3,
  },
  buttoninput_view2: {
    margin: 12,
    paddingTop: 3,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  filterButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});
