/* eslint-disable react/no-unused-state */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Container, Body, Text, Header, QuickView, Image,
} from '@components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput, FlatList, TouchableOpacity } from 'react-native';
import { TQuery, TArrayRedux } from '@utils/redux';
import { parseArraySelector, applyArraySelector } from '@utils/selector';
import Overlay from '../containers/Overlay';
import AddFloatBtn from '../containers/AddFloatBtn';
import { contactGetList } from '../redux/slice';
import { contactListSelector } from '../redux/selector';

interface Props {
  navigation: any;
  list: TArrayRedux;
  getList: (query?: TQuery) => any;
}
interface State {
  data: Array<any>;
  isModalVisible: boolean;
  item: any;
}
class ContactApp17 extends PureComponent<Props, State> {
  data = [
    {
      avatar: 'https://picsum.photos/1000/1000',
      name: 'Nguyen Van A',
      phoneNumber: '0981234567',
      email: 'nguyenvana@gmail.com',
    },
    {
      avatar: 'https://picsum.photos/1000/1000',
      name: 'Vo Tien B',
      phoneNumber: '0981234568',
      email: 'nguyenvanb@gmail.com',
    },
    {
      avatar: 'https://picsum.photos/1000/1000',
      name: 'Le Van C',
      phoneNumber: '0981234569',
      email: 'nguyenvanc@gmail.com',
    },
    {
      avatar: 'https://picsum.photos/1000/1000',
      name: 'Tran Van D',
      phoneNumber: '0981234556',
      email: 'nguyenvandc@gmail.com',
    },
    {
      avatar: 'https://picsum.photos/1000/1000',
      name: 'Nguyen Thi E',
      phoneNumber: '0981234235',
      email: 'nguyenfv@gmail.com',
    },
  ];

  constructor(props: Props) {
    super(props);
    const {
      list: { data: dataContact },
    } = this.props;
    this.state = {
      data: dataContact,
      isModalVisible: false,
      item: {},
    };
  }

  componentDidMount() {
    const { getList } = this.props;
    getList();
  }

  onChangeText = (text: string) => {
    const {
      list: { data: dataContact },
    } = this.props;
    const newData = dataContact.filter((item: any) => {
      const itemName = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemName.indexOf(textData) > -1;
    });
    this.setState({ data: newData });
  };

  renderRowItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      onPress={() => {
        this.setState((prevState: any) => ({
          isModalVisible: !prevState.isModalVisible,
          item,
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
      }}
    >
      <QuickView>
        <Image
          width={50}
          height={50}
          source={{ uri: item.avatar }}
          // style={{ width: 50, height: 50, resizeMode: 'contain' }}
        />
      </QuickView>
      <QuickView style={{ justifyContent: 'center', marginLeft: 10 }}>
        <Text>{item.name}</Text>
      </QuickView>
    </TouchableOpacity>
  );

  closeOverlay = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  render() {
    const { isModalVisible, item } = this.state;
    const {
      list: { data: dataContact },
    } = this.props;

    return (
      <Container>
        <Header title="ContactApp17" />
        <Body>
          <QuickView
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              marginVertical: 15,
              borderRadius: 20,
              paddingHorizontal: 10,
            }}
          >
            <QuickView style={{ justifyContent: 'center', flex: 1 }}>
              <Icon name="magnify" size={20} />
            </QuickView>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                flex: 9,
              }}
              onChangeText={(text) => this.onChangeText(text)}
            />
          </QuickView>
          <QuickView>
            <FlatList
              keyExtractor={(index) => index.toString()}
              data={dataContact}
              renderItem={this.renderRowItem}
              // extraData={dataContact}
            />
          </QuickView>
        </Body>
        <AddFloatBtn />
        {isModalVisible ? <Overlay data={item} parent={this} /> : null}
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  list: parseArraySelector(applyArraySelector(contactListSelector, state)),
});

const mapDispatchToProps = (dispatch: any) => ({
  getList: (query?: TQuery) => dispatch(contactGetList({ query })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactApp17);
