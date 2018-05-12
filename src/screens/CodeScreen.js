import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CodeWindow from '../components/CodeWindow';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  codeWindow: {
    flex: 2
  },
  instructions: {
    flex: 1,
    backgroundColor: 'lightblue',
    padding: 20
  },
  instructionsText: {
    fontSize: 20
  }
});

export default class CodeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    title: navigation.state.params.challenge.title;
  };

  render() {
    const { challenge } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={styles.codeWindow}>
          <CodeWindow code={challenge.code} />
        </View>
        <View style={styles.instructions}>
          <Text style={styles.instructionsText}>{challenge.description}</Text>
        </View>
      </View>
    );
  }
}
