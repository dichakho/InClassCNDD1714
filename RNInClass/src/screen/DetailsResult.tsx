/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
interface Props {
  route: any;
}
export default class DetailsResult extends PureComponent<Props> {
  render() {
    const {route} = this.props;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> {route.params.result} </Text>
      </View>
    );
  }
}
