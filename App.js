/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, SectionList} from 'react-native';
import MyReactNativeToast from './JSCode/ToastModules';

MyReactNativeToast.show('MyReactNativeToast', MyReactNativeToast.SHORT);
MyReactNativeToast.showLog('Show_Log');
MyReactNativeToast.measureLayout(100,200,(arg1, arg2, message)=>{
  MyReactNativeToast.showLog(arg1);
  MyReactNativeToast.showLog(arg2);
  MyReactNativeToast.showLog(message);
},(errorMessage)=>{
  MyReactNativeToast.showLog(errorMessage);
});

async function measureLayoutPromise() {
  try {
    var {
      First,
      Last
    } = await MyReactNativeToast.measureLayoutPromise(100, 100);
    MyReactNativeToast.showLog(First);
    MyReactNativeToast.showLog(Last);
  } catch (e) {
    MyReactNativeToast.showLog("error");
  }
}
measureLayoutPromise();

// import { DeviceEventEmitter } from 'react-native';

// componentWillMount: ()=>{
//   DeviceEventEmitter.addListener('keyEvent', (params)=>{
//     MyReactNativeToast.showLog("addListener");
//     MyReactNativeToast.showLog(params.action);
//   });

import ImagePicker from './JSCode/ImagePicker'
ImagePicker.pickImage().then((uri)=>{
  MyReactNativeToast.showLog(uri);
}).catch((err)=>{
  MyReactNativeToast.showLog(err);
});

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {

  constructor(props){
    super(props);
  }

  async getMoviesFromApi(){
    try{
      let result = await fetch('https://facebook.github.io/react-native/movies.json');
      let responseJson = await result.json();
      this.setState(responseJson.movies);
      return responseJson.movies;
    }catch(error){

    }
  }

  render() {
    return (
     <View style={styles.container}>
        <Text style={styles.base}> "Base Style" </Text>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
     </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    fontSize: 10,
    color: 'red',
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  hello: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  base: {
    width: 38,
    height: 38,
  },
  background: {
    backgroundColor: '#000000',
  },
  active: {
    borderWidth: 2,
    borderColor: '#00ff00',
  },
});
