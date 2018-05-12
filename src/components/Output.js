import React from 'react';
import { Text, ScrollView, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 5,
    borderColor: '#777'
  },
  output: {
    flex: 15
  },
  trashContainer: {
    flex: 1
  },
  trashImage: {
    tintColor: '#777',
    width: 20,
    height: 20,
    alignSelf: 'flex-end'
  },
  runButton: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-start'
  },
  runImage: {
    height: 35,
    width: 35,
    tintColor: 'green'
  }
});

const successStyle = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 15
  }
});

const errorStyle = StyleSheet.create({
  text: {
    color: 'darkred',
    fontSize: 15
  }
});

const Output = ({ output, onClearOutput, runCode }) => (
  <View style={styles.container}>
    <View style={styles.output}>
      <ScrollView>
        {output && output.length
          ? output.map((line, i) => {
              const styles = line.status === 'ERROR' ? errorStyle : successStyle;
              return (
                <View key={i} style={styles.lineWrapper}>
                  <Text style={styles.text}>{line.message}</Text>
                </View>
              );
            })
          : null}
      </ScrollView>
    </View>
    <TouchableOpacity style={styles.runButton} onPress={() => runCode()}>
      <Image style={styles.runImage} source={require('../../assets/run.png')} />
    </TouchableOpacity>
    {/* <View style={styles.trashContainer}>
      <TouchableOpacity onPress={() => onClearOutput()}>
        <Image style={styles.trashImage} source={require('../../assets/delete.png')} />
      </TouchableOpacity>
    </View> */}
  </View>
);

export default Output;
