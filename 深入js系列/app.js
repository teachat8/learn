import React from 'react';
import Swiper from 'react-native-swiper';
import { ImageBackground, FlatList, ScrollView, StyleSheet, Text, View,  Image,  TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movies: '',text : ''};
   fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        // return responseJson.movies;
        this.setState({
          movies: responseJson.movies
        });
        
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    let pic = {
      uri: 'https://avatars1.githubusercontent.com/u/30363813?s=400&u=542f7cce66cb193fa9a1d884c4ca4cfeb7ac1a7a&v=4'
    };
    let pic1 = {
      uri: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i2/3228113622/TB1CZ5kjILJ8KJjy0FnXXcFDpXa_!!0-item_pic.jpg_360x360Q90.jpg'
    };
    let pic2 = {
      uri: 'https://img.alicdn.com/tfs/TB1KPB0lsLJ8KJjy0FnXXcFDpXa-520-280.png'
    };
    return (
      <ScrollView>
        <View style={styles.container}>
          <Swiper
            style={styles.swiper}
            height={200}
            horizontal={true}
            paginationStyle={{bottom: 10}}
            showsButtons={false}>
            <Image source={pic} style={styles.img}/>
            <Image source={pic1} style={styles.img}/>
            <Image source={pic2} style={styles.img}/>            
          </Swiper>
          <Image source={pic} style={{width: 320, height: 300}} />
          {/*<ImageBackground source={pic}>
            <Text>Inside</Text>
          </ImageBackground>*/}
          <Text style={styles.info}>大家好，我叫吕胖胖哦</Text>
          <Text style={styles.info1}>这是本胖的第一个app哦</Text>
          <View style={styles.view}>
            <View style={styles.viewItem1} />
            <View style={styles.viewItem2} />
            <View style={styles.viewItem3} />
          </View>
          <TextInput
            style={{height: 40}}
            keyboardType='numeric'
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
          <FlatList style={{height:100}}
            data={[
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'}
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view : {
    height: 300,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  img: {
      width: 320,
      height: 200,
  },
  viewItem1 : {
    flex:1,
    height: 100,
    backgroundColor: 'yellow'
  },
  viewItem2 : {
    flex:1,
    height:100,
    backgroundColor: 'red'
  },
  viewItem3 : {
    flex:1,
    height: 100,
    backgroundColor: 'blue'
  },
  info : {
    marginTop: 50,
    fontSize: 24,
    textAlign: 'center'
  },
  info1 : {
    marginTop: 10,
    textAlign: 'center',    
    color: 'red',
    fontSize : 16
  }
});
