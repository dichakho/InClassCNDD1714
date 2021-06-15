import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import NavigationService from '@utils/navigation';
import { QuickView } from '@components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import contactAppStack from '../routes';

export default class AddFloatBtn extends PureComponent {
  render() {
    return (
      <QuickView
        style={{
          justifyContent: 'flex-end',
          padding: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => NavigationService.navigate(contactAppStack.addUser)}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'flex-end',
          }}
        >
          <Icon name="plus" color="white" size={20} />
        </TouchableOpacity>
      </QuickView>
    );
  }
}
