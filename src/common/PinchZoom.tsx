import React, { useRef, useState } from 'react';
import { View, Image, Animated, PanResponder, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../config/helper';

const PinchableImage = ({ source, scale, translateX, translateY, onPinchGesture, onPanGesture }: any) => {
  const imageRef = useRef();
  const previousScale = useRef(scale);
  const [previousTranslateX, setPreviousTranslateX] = useState(translateX);
  const [previousTranslateY, setPreviousTranslateY] = useState(translateY);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const { dx, dy } = gestureState;
        onPanGesture(dx - previousTranslateX, dy - previousTranslateY);
      },
      onPanResponderRelease: (_, gestureState) => {
        setPreviousTranslateX(gestureState.dx);
        setPreviousTranslateY(gestureState.dy);
      },
    })
  ).current;

  const onPinchEvent = Animated.event([{ nativeEvent: { scale } }], {
    useNativeDriver: true,
  });

  const onPinchStateChange = (event: any) => {
    if (event.nativeEvent.oldState === 4) {
      previousScale.current *= event.nativeEvent.scale;
    }
    onPinchGesture(previousScale.current * event.nativeEvent.scale);
  };

  const imageStyle = [
    styles.image,
    {
      transform: [{ scale }, { translateX }, { translateY }],
    },
  ];

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Animated.Image ref={imageRef} source={source} style={imageStyle} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 546,
    height: 566,
  },
});

export { PinchableImage };