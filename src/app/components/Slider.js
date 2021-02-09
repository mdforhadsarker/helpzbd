/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../assets/images/slider-image.png'),
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree',
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          sliderBoxHeight={105}
          inactiveDotColor="#C4C4C4"
          dotColor="#44A72C"
          resizeMethod={'resize'}
          resizeMode={'cover'}
          autoplay
          circleLoop
          images={this.state.images}
          onCurrentImagePressed={(index) =>
            console.warn(`image ${index} pressed`)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
});
