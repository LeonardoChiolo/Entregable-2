import { useFonts } from 'expo-font';
import { SafeAreaView, StyleSheet, View, ActivityIndicator, LogBox } from 'react-native';

import RootNavigator from './navigations';
import { FONTS, COLORS } from './themes';

// const categoryDefault = {
//   categoryId: null,
//   color: COLORS.primary,
// };

export default function App() {
  // Ignore log notification by message
  LogBox.ignoreLogs(['Warning: ...']);

  //Ignore all log notifications
  LogBox.ignoreAllLogs();

  const [loaded] = useFonts({
    [FONTS.regular]: require('../assets/fonts/Jost-Regular.ttf'),
    [FONTS.bold]: require('../assets/fonts/Jost-Bold.ttf'),
    [FONTS.medium]: require('../assets/fonts/Jost-Medium.ttf'),
    [FONTS.light]: require('../assets/fonts/Jost-Light.ttf'),
  });
  // const [isCategorySelected, setIsCategorySelected] = useState(false);
  // const [selectedCategory, setSelectedCategory] = useState(categoryDefault);

  // const headerTitle = isCategorySelected ? 'Products' : 'Categories';

  // const onHandleSelectCategory = ({ categoryId, color }) => {
  //   setSelectedCategory({ categoryId, color });
  //   setIsCategorySelected(!isCategorySelected);
  // };
  // const onHandleNavigate = () => {
  //   setIsCategorySelected(!isCategorySelected);
  //   setSelectedCategory(categoryDefault);
  // };

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <RootNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
