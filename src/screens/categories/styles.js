import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryContainer: {
    marginTop: 25,
    marginHorizontal: 10,
  },
  listCategory: {
    gap: 25,
    paddingBottom: 25,
  },
  categoryItemLandscape: {
    height: 100,
  },
});