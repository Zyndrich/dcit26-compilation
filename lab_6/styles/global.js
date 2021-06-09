// BSCS 3-3
//AlAG, HANNAH JUNE C.
//NOBLEZA, ZYNDRICH A.
//QUIJANO, MARILIN A.
//
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#FF4500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    textAlign: 'center',
    padding: 10,
    fontSize: 25,
    color: '#000000',
  },
  text: {
    padding: 5,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: '#000000',
    fontStyle:'bold',
  },
  info: {
    padding: 10,
    textAlign: 'auto',
    fontSize: 15,
    color: '#000000',
    justifyContent: 'center',
    fontStyle:'italic',

  },
  picture: {
    alignItems: 'center',
    borderColor: '#FFFFE0',
    borderWidth: 5,
    borderRadius: 10,
    width: 250,
    height: 250,
  },
});
