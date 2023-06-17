import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../config/helper';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    backgroundColor: 'white',
    zIndex: 300,
    height: windowHeight > 800 ? windowHeight - 100 : windowHeight - 50,
    width: windowWidth,
  },
  centerView: {
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    width: 75,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'red',
    borderRadius: 5,
  },
  closeText: {
    fontWeight: '500',
    fontSize: 16,
    color: 'white',
  },
  backgroundVideo: {
    height: 250,
    width: windowWidth,
  },
  closeButton: {position: 'absolute', top: 10},
  closeView: {
    padding: 20,
  },
});