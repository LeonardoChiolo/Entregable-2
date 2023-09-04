import { TouchableHighlight, ImageBackground, Text, useWindowDimensions } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../../themes';

const CategoryItem = ({ id, name, backgroundColor, backgroundImage, onSelectCategory, style }) => {

  return (
    <TouchableHighlight
      onPress={() => onSelectCategory(id)}
      style={[styles.container, { backgroundColor }]}
      underlayColor={COLORS.primary}>
      <ImageBackground
        source={{ uri: backgroundImage }}
        style={[styles.imageBackground, style]}
        resizeMode="cover">
        <Text style={styles.categoryName}>{name}</Text>
      </ImageBackground>
    </TouchableHighlight>
  );
};

export default CategoryItem;