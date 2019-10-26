import React from 'react';
import { StyleSheet, Text, View, ScrollView,FlatList } from 'react-native';
import Category from './components/Category';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-96-145571e29d72',
    title: 'Third Item',
  },
  // {
  //   id: '58694a0f-3da1-471f-b96-145571e29d72',
  //   title: '4 Item',
  // },
  // {
  //   id: '586940f-3da1-471f-bd96-145571e29d72',
  //   title: '5 Item',
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //   title: '6 Item',
  // },
];

export default function App() {
  return (
    
      <FlatList style={{paddingLeft:16, paddingRight:16}}
        data={DATA}
        renderItem={({item})=>(
          <Category data_send_to_props={item}/>
        )}
        keyExtractor={item => item.id}
      />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: "stretch",
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
});
