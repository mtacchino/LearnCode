import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableHighlight } from 'react-native';
import { ScreenNames } from '../components/Navigator';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const ListItem = ({ item, onPress }) => (
  <TouchableHighlight underlayColor="lightblue" onPress={() => onPress(item)}>
    <View style={{ padding: 10 }}>
      <Text>{item.title}</Text>
    </View>
  </TouchableHighlight>
);

export default class ChallengeListScreen extends Component {
  render() {
    const data = [
      {
        key: 'addNumbers',
        title: 'Add numbers',
        description: 'Write a function to add two numbers together :)',
        code: `function add(a, b) {\r  // Write your code here!\r  \r}\r`
      },
      {
        key: 'bfs',
        title: 'Breadth-first Search',
        description: 'search it!',
        code: `class Node {\r  constructor(val) {\r    this.val = val;\r    this.left = null\r    this.right = null\r  }\r}\r\rfunction bfs(root) {\r  // Write your code here!\r  \r}\r`
      }
    ];
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ListItem
              item={item}
              onPress={item =>
                this.props.navigation.navigate(ScreenNames.CODE_SCREEN, {
                  challenge: data.find(d => d.key === item.key)
                })
              }
            />
          )}
        />
      </View>
    );
  }
}
