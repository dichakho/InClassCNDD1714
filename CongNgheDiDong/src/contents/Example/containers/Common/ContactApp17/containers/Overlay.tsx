import React, { PureComponent } from 'react';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationService from '@utils/navigation';
import { Text, QuickView } from '@components';
import { setIdIntoParams } from '@utils/appHelper';
import contactAppStack from '../routes';

interface Props {
  data?: any;
  parent?: any;
}
interface State {}
export default class Overlay extends PureComponent<Props, State> {
  sendMail = () => {
    const { data } = this.props;
    const url = `mailto:${data?.email}`;
    Linking.openURL(url);
  };

  makeCall = () => {
    const { data } = this.props;
    Linking.openURL(`tel:${data?.phoneNumber}`);

    // let phoneNumber = '';

    // if (Platform.OS === 'android') {
    //   phoneNumber = 'tel:${0981234899}';
    // } else {
    //   phoneNumber = 'telprompt:${0981234899}';
    // }

    // Linking.openURL(phoneNumber);
  };

  render() {
    const { data, parent } = this.props;
    return (
      <QuickView
        style={{
          backgroundColor: 'rgba(0,0,0,0.2)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // justifyContent: 'center',
          // alignItems: 'center',
          zIndex: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'center' }}
          onPress={() => {
            parent?.closeOverlay();
          }}
          activeOpacity={1}
        >
          <TouchableWithoutFeedback>
            <QuickView
              style={{
                padding: 20,
                borderRadius: 10,
                position: 'absolute',
                backgroundColor: 'white',
                zIndex: 100,
                alignSelf: 'center',
              }}
            >
              <QuickView row center>
                <Icon name="account" size={30} color="#012066" />
                <Text style={{ fontSize: 30, marginLeft: 5, color: '#012066' }}>
                  {data?.name}
                </Text>
              </QuickView>
              {/* Phone number */}
              <TouchableOpacity
                onPress={this.makeCall}
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  // justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Icon name="phone" size={20} color="green" />
                <Text style={{ fontSize: 20, marginLeft: 5 }}>
                  {data?.phoneNumber}
                </Text>
              </TouchableOpacity>
              {/* Mail */}
              <TouchableOpacity
                onPress={this.sendMail}
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  // justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Icon name="gmail" size={20} color="red" />
                <Text style={{ fontSize: 20, marginLeft: 5 }}>
                  {data?.email}
                </Text>
              </TouchableOpacity>
              {/* Info */}
              <TouchableOpacity
                onPress={() => {
                  NavigationService.navigate(
                    contactAppStack.editUser,
                    setIdIntoParams(data),
                  );
                  parent?.closeOverlay();
                }}
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  // justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Icon name="information-outline" size={20} />
                <Text style={{ fontSize: 20, marginLeft: 5 }}>Information</Text>
              </TouchableOpacity>
            </QuickView>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </QuickView>
    );
  }
}
