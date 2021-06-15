/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Global} from '../core/utils/functions';
interface Props {}
interface State {
  nameValue: string;
  phoneNumValue: string;
  emainValue: string;
}
export default class AddUser extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nameValue: '',
      phoneNumValue: '',
      emainValue: '',
    };
  }
  handleOnAdd = () => {
    console.log('!!!');
    const data: Array<any> = Global.data;
    // data.merge({})
    console.log('data', data);
  };
  render() {
    return (
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <View style={{alignItems: 'center'}}>
          <Icon name="account" size={100} color="#012066" />
        </View>
        {/* Name */}
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            marginBottom: 15,
            borderRadius: 20,
            paddingHorizontal: 10,
          }}>
          <View style={{justifyContent: 'center', flex: 1}}>
            <Icon name="account" size={20} />
          </View>
          <TextInput
            onChangeText={(value: string) =>
              this.setState({phoneNumValue: value})
            }
            style={{
              height: 40,
              borderColor: 'gray',
              flex: 9,
            }}
            // onChangeText={(text) => this.onChangeText(text)}
          />
        </View>
        {/* PhoneNumber */}
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            marginBottom: 15,
            borderRadius: 20,
            paddingHorizontal: 10,
          }}>
          <View style={{justifyContent: 'center', flex: 1}}>
            <Icon name="phone" size={20} color="green" />
          </View>
          <TextInput
            onChangeText={(value: string) => this.setState({nameValue: value})}
            style={{
              height: 40,
              borderColor: 'gray',
              flex: 9,
            }}
          />
        </View>
        {/* Email */}
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            marginBottom: 15,
            borderRadius: 20,
            paddingHorizontal: 10,
          }}>
          <View style={{justifyContent: 'center', flex: 1}}>
            <Icon name="gmail" size={20} color="red" />
          </View>
          <TextInput
            onChangeText={(value: string) => this.setState({emainValue: value})}
            style={{
              height: 40,
              borderColor: 'gray',
              flex: 9,
            }}
          />
        </View>
        {/* Submit btn */}
        <TouchableOpacity
          onPress={() => this.handleOnAdd()}
          style={{
            padding: 20,
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: '#012066',
            borderRadius: 10,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
