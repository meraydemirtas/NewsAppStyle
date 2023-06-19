import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,FlatList, Button } from 'react-native';
import music_data from'./music-data.json';
import SongCard from './src/Card/SongCard';
function App() {

  const renderSong = ({item}) => <SongCard song={item}></SongCard>

  return (
    <SafeAreaView >
      <View>
       <FlatList
       keyExtractor={(item) => item.id}
       data={music_data}
       renderItem={renderSong}
       />
      </View>
    </SafeAreaView>
  );
}

export default App;
