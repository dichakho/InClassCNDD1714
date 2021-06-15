/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Global, storeData} from '../core/utils/functions';
interface Props {
  navigation: any;
}
interface State {
  data: Array<any>;
  value: string;
  isModalVisible: boolean;
}
class Day3Ex2 extends Component<Props, State> {
  dataContact = [
    {
      avatar:
        'https://lh3.googleusercontent.com/proxy/-qzoCSZ8iF5d0z7BHB37vVDei_dDHbFd4dcEEX92dH9EA6aMpPebT1AZUZ9Yh6vB3NMOZJc29GlOFElXyyei2uWroq6rleeZMLkPcP6G2mjRdtdrk-OuTA',
      name: 'Nguyen Van A',
      phoneNumber: '0981234567',
    },
    {
      avatar:
        'https://lh3.googleusercontent.com/proxy/-qzoCSZ8iF5d0z7BHB37vVDei_dDHbFd4dcEEX92dH9EA6aMpPebT1AZUZ9Yh6vB3NMOZJc29GlOFElXyyei2uWroq6rleeZMLkPcP6G2mjRdtdrk-OuTA',
      name: 'Vo Tien B',
      phoneNumber: '0981234567',
    },
    {
      avatar:
        'https://lh3.googleusercontent.com/proxy/-qzoCSZ8iF5d0z7BHB37vVDei_dDHbFd4dcEEX92dH9EA6aMpPebT1AZUZ9Yh6vB3NMOZJc29GlOFElXyyei2uWroq6rleeZMLkPcP6G2mjRdtdrk-OuTA',
      name: 'Le Van C',
      phoneNumber: '0981234567',
    },
    {
      avatar:
        'https://lh3.googleusercontent.com/proxy/-qzoCSZ8iF5d0z7BHB37vVDei_dDHbFd4dcEEX92dH9EA6aMpPebT1AZUZ9Yh6vB3NMOZJc29GlOFElXyyei2uWroq6rleeZMLkPcP6G2mjRdtdrk-OuTA',
      name: 'Tran Van D',
      phoneNumber: '0981234567',
    },
    {
      avatar:
        'https://lh3.googleusercontent.com/proxy/-qzoCSZ8iF5d0z7BHB37vVDei_dDHbFd4dcEEX92dH9EA6aMpPebT1AZUZ9Yh6vB3NMOZJc29GlOFElXyyei2uWroq6rleeZMLkPcP6G2mjRdtdrk-OuTA',
      name: 'Nguyen Thi E',
      phoneNumber: '0981234567',
    },
  ];
  constructor(props: Props) {
    super(props);
    this.state = {
      value: '',
      data: Global.data,
      isModalVisible: false,
    };
  }

  renderRowItem = ({item}: {item: any}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState((prevState: any) => ({
            isModalVisible: !prevState.isModalVisible,
          }));
        }}
        style={{
          // padding: 20,
          borderRadius: 20,
          marginHorizontal: 10,
          marginBottom: 15,
          flexDirection: 'row',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          backgroundColor: '#FFFFFF',

          elevation: 5,
        }}>
        <View>
          <Image
            source={{uri: item.avatar}}
            style={{width: 50, height: 50, resizeMode: 'contain'}}
          />
        </View>
        <View style={{justifyContent: 'center', marginLeft: 10}}>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  onChangeText = (text: string) => {
    const newData = Global.data.filter((item: any) => {
      const itemName = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemName.indexOf(textData) > -1;
    });
    this.setState({data: newData});
  };
  sendMail = () => {
    let url = `mailto:${'dichakhosam@gmail.com'}`;
    Linking.openURL(url);
  };
  makeCall = () => {
    Linking.openURL('tel:${0981234899}');

    // let phoneNumber = '';

    // if (Platform.OS === 'android') {
    //   phoneNumber = 'tel:${0981234899}';
    // } else {
    //   phoneNumber = 'telprompt:${0981234899}';
    // }

    // Linking.openURL(phoneNumber);
  };

  render() {
    const {navigation} = this.props;
    const {data, isModalVisible} = this.state;
    console.log('Global', Global.data);

    return (
      <View style={{padding: 20, flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              marginBottom: 15,
              borderRadius: 20,
              paddingHorizontal: 10,
            }}>
            <View style={{justifyContent: 'center', flex: 1}}>
              <Icon name="magnify" size={20} />
            </View>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                flex: 9,
              }}
              onChangeText={(text) => this.onChangeText(text)}
            />
          </View>
          <View>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={Global.data}
              renderItem={this.renderRowItem}
            />
          </View>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            padding: 20,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Add User')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'flex-end',
            }}>
            <Icon name="plus" color="white" size={20} />
          </TouchableOpacity>
        </View>
        {isModalVisible ? (
          <View
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
            }}>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => {
                this.setState({isModalVisible: !isModalVisible});
              }}
              activeOpacity={1}>
              <TouchableWithoutFeedback>
                <View
                  style={{
                    padding: 20,
                    borderRadius: 10,
                    position: 'absolute',
                    backgroundColor: 'white',
                    zIndex: 100,
                    alignSelf: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon name="account" size={30} color="#012066" />
                    <Text
                      style={{fontSize: 30, marginLeft: 5, color: '#012066'}}>
                      Nguyen Van A
                    </Text>
                  </View>
                  {/* Phone number */}
                  <TouchableOpacity
                    onPress={this.makeCall}
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      // justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon name="phone" size={20} color="green" />
                    <Text style={{fontSize: 20, marginLeft: 5}}>
                      0981234567
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
                    }}>
                    <Icon name="gmail" size={20} color="red" />
                    <Text style={{fontSize: 20, marginLeft: 5}}>
                      nguyenvana@gmail.com
                    </Text>
                  </TouchableOpacity>
                  {/* Info */}
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Edit Info');
                      this.setState({isModalVisible: false});
                    }}
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      // justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon name="information-outline" size={20} />
                    <Text style={{fontSize: 20, marginLeft: 5}}>
                      Information
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  }
}

export default Day3Ex2;
