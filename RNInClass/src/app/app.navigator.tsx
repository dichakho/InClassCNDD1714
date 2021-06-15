import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import PTB2 from '../screen/PTB2';
// import DetailsResult from '../screen/DetailsResult';
// import Day3Ex1 from '../screen/Day3Ex1';
import Day3Ex2 from '../screen/Day3Ex2';
import EditInfo from '../screen/EditInfo';
import AddUser from '../screen/AddUser';
import {storeData} from '../core/utils/functions';

const Stack = createStackNavigator();

function App() {
  const dataC = [
    {
      avatar:
        'https://lh3.googleusercontent.com/proxy/-qzoCSZ8iF5d0z7BHB37vVDei_dDHbFd4dcEEX92dH9EA6aMpPebT1AZUZ9Yh6vB3NMOZJc29GlOFElXyyei2uWroq6rleeZMLkPcP6G2mjRdtdrk-OuTA',
      name: 'Nguyen Van A',
    },
    {
      avatar:
        'https://lh3.googleusercontent.com/proxy/-qzoCSZ8iF5d0z7BHB37vVDei_dDHbFd4dcEEX92dH9EA6aMpPebT1AZUZ9Yh6vB3NMOZJc29GlOFElXyyei2uWroq6rleeZMLkPcP6G2mjRdtdrk-OuTA',
      name: 'Vo Tien B',
    },
    {
      avatar:
        'https://lh3.googleusercontent.com/proxy/-qzoCSZ8iF5d0z7BHB37vVDei_dDHbFd4dcEEX92dH9EA6aMpPebT1AZUZ9Yh6vB3NMOZJc29GlOFElXyyei2uWroq6rleeZMLkPcP6G2mjRdtdrk-OuTA',
      name: 'Le Van C',
    },
    {
      avatar:
        'https://lh3.googleusercontent.com/proxy/-qzoCSZ8iF5d0z7BHB37vVDei_dDHbFd4dcEEX92dH9EA6aMpPebT1AZUZ9Yh6vB3NMOZJc29GlOFElXyyei2uWroq6rleeZMLkPcP6G2mjRdtdrk-OuTA',
      name: 'Tran Van D',
    },
    {
      avatar:
        'https://lh3.googleusercontent.com/proxy/-qzoCSZ8iF5d0z7BHB37vVDei_dDHbFd4dcEEX92dH9EA6aMpPebT1AZUZ9Yh6vB3NMOZJc29GlOFElXyyei2uWroq6rleeZMLkPcP6G2mjRdtdrk-OuTA',
      name: 'Nguyen Thi E',
    },
  ];
  storeData(dataC);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Phương trình bậc 2" component={PTB2} />
        <Stack.Screen name="Detail Result" component={DetailsResult} /> */}
        {/* <Stack.Screen name="Buổi 3 bài 1" component={Day3Ex1} /> */}
        <Stack.Screen name="ContactApp17" component={Day3Ex2} />
        <Stack.Screen name="Edit Info" component={EditInfo} />
        <Stack.Screen name="Add User" component={AddUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
