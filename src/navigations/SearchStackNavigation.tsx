import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Genre from "../screens/Genre";
import MovieDetail from "../screens/MovieDetail";
import Search from "../screens/Search";

const Stack = createNativeStackNavigator();

function SearchStackNavigation(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="searching">
      <Stack.Screen
        name="searching"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{ headerBackVisible: true, headerTitle: "Detail" }}
      />
      <Stack.Screen
        name="genre"
        component={Genre}
        options={{ headerBackVisible: true, headerTitle: "Search by Genre" }}
      />
    </Stack.Navigator>
  );
}

export default SearchStackNavigation;
