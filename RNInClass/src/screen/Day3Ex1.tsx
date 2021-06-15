/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {}
interface State {
  count: number;
}
class Day3Ex1 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const {count} = this.state;
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{alignSelf: 'center', fontSize: 20}}>{count}</Text>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            padding: 20,
          }}>
          <TouchableOpacity
            onPress={() =>
              this.setState((prevState) => ({count: prevState.count + 1}))
            }
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'flex-end',
            }}>
            <Icon name="plus" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Day3Ex1;
