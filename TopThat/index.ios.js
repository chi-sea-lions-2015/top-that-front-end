/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} = React;


var REQUEST_URL = 'https://localhost:3000';
// this will be referencing the api that we built (topthat rails backend)


var TopThat = React.createClass({
  // adding an initial state function that will let us know if loading was successful
  getInitialState: function(){
    return {
      // movies here will actually be 'publicArenas'
    videos: null,
    }
  },

  componentDidMount: function(){
    this.fetchData();
  },

  fetchData: function(){
    fetch(REQUEST_URL)
    // .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        videos: responseData.videos,
      });
    }).done();
  },

  render: function() {
      if (!this.state.videos){
        return this.renderLoadingView();
      }

    var video = this.state.videos[0];
    return this.renderVideo(video);
  },

  renderLoadingView: function(){
    return (
      <View style = {styles.container}>
      <Text>
          Loading movies...
      </Text>
      </View>
      );
  },




  renderVideo: function(video){
  return (

        <View style={styles.rightContainer}>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.year}>{video.created_at}</Text>
      </View>
    );
  }
});



var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },

  rightContainer: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },

  year: {
    textAlign: 'center',
  }

});

AppRegistry.registerComponent('TopThat', () => TopThat);
