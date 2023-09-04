import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../../themes';

export const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 15,
  },
  imageBackground: {
    width: '100%',
    height: 380,
    justifyContent: 'flex-end',
  },
  imageBackgroundTablet: {
    width: '100%',
    height: 450,
    justifyContent: 'flex-end',
  },
  categoryName: {
    fontSize: 50,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    padding: 10,
    textShadowColor: 'rgba(0,0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6,
  },
  categoryNameTablet: {
    fontSize: 50,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    padding: 20,
    textShadowColor: 'rgba(0,0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6,
  },
});