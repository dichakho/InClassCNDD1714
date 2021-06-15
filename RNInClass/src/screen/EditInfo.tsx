/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class EditInfo extends Component {
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
            style={{
              height: 40,
              borderColor: 'gray',
              flex: 9,
            }}
            // onChangeText={(text) => this.onChangeText(text)}
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
            style={{
              height: 40,
              borderColor: 'gray',
              flex: 9,
            }}
            // onChangeText={(text) => this.onChangeText(text)}
          />
        </View>
        {/* Submit btn */}
        <TouchableOpacity
          onPress={() => {}}
          style={{
            padding: 20,
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: '#012066',
            borderRadius: 10,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Edit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
