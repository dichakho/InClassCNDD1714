import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import contactAppStack from './routes';
import ContactApp17 from './screens';
import AddUser from './screens/AddUser';
import EditUser from './screens/EditUser';

const Stack = createStackNavigator();

export default function ContactApp17Stack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={contactAppStack.index} component={ContactApp17} />
      <Stack.Screen name={contactAppStack.addUser} component={AddUser} />
      <Stack.Screen name={contactAppStack.editUser} component={EditUser} />

    </Stack.Navigator>
  );
}
