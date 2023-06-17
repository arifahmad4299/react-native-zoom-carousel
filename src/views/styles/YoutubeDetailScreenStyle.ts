import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../config/helper';

export const styles = StyleSheet.create({
  root: {
    zIndex: 430,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    height: windowHeight > 800 ? windowHeight - 100 : windowHeight - 50,
    width: windowWidth,
    top: 0,
    position: 'absolute'
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
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
});