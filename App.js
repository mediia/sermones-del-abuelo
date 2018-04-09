import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import db from './Database';
import resolveAssetSource from 'resolveAssetSource';
import HTML from 'react-native-render-html';

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    fetch(resolveAssetSource(require('./sermones/la_justificacion_por_la_fe_laodicea_y_sus_males.html')).uri)
      .then(response => response.text())
      .then(response => this.setState({html: response}))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Shake your phone to open the developer menu.</Text>
        {/*
        { db.map((sermon, key) => 
          <Text key={key}>
            { sermon.title }
          </Text>
        )}
        */}
        { this.state.html ? 
          <HTML html={this.state.html} />
        : undefined }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
