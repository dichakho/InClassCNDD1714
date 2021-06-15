import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import realmStack from './routes';
import RealmTodoList from './screens';

const Stack = createStackNavigator();

export default function RealmStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={realmStack.todolist} component={RealmTodoList} />
    </Stack.Navigator>
  );
}
