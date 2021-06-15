import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import dogAppStack from './routes';
import DogList from './screens/DogList';
import DogDetail from './screens/DogDetail';

const Stack = createStackNavigator();

export default function DogAppStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={dogAppStack.dogList} component={DogList} />
      <Stack.Screen name={dogAppStack.dogDetail} component={DogDetail} />
    </Stack.Navigator>
  );
}
