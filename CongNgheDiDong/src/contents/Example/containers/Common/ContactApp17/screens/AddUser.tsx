import React, { PureComponent } from 'react';
import {
  QuickView, Container, Header, Body, Input, Button,
} from '@components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { lightPrimaryColor } from '@themes/ThemeComponent/Common/Color';
import { Dimensions } from 'react-native';
import { parseArraySelector, applyArraySelector } from '@utils/selector';
import { connect } from 'react-redux';
import { TArrayRedux, TQuery } from '@utils/redux';
import NavigationService from '@utils/navigation';
import { contactListSelector } from '../redux/selector';
import { setContactList, contactGetList } from '../redux/slice';

const { width } = Dimensions.get('window');
interface Props {
  list: TArrayRedux;
  setList: (list: any) => any;
  getList: (query?: TQuery) => any;
}
interface State {}
class AddUser extends PureComponent<Props> {
  account: any;

  phoneNumber: any;

  email: any;

  handleOnAdd = () => {
    const { list, setList, getList } = this.props;
    const dataTemp = list.data;
    const payload = {
      id: list.data.length + 1,
      avatar: 'https://picsum.photos/1000/1000',
      name: this.account.getText(),
      phoneNumber: this.phoneNumber.getText(),
      email: this.email.getText(),
    };
    dataTemp.push(payload);
    setList(dataTemp);
    getList();
    NavigationService.goBack();
  };

  render() {
    return (
      <Container>
        <Header backIcon title="AddUser" />
        <Body>
          <QuickView style={{ alignItems: 'center' }}>
            <Icon name="account" size={100} color={lightPrimaryColor} />
          </QuickView>
          <Input
            ref={(ref: any) => {
              this.account = ref;
            }}
            leftIcon={{ name: 'account' }}
            marginTop={10}
          />
          <Input
            ref={(ref: any) => {
              this.phoneNumber = ref;
            }}
            leftIcon={{ name: 'phone' }}
            marginTop={10}
            validationField="phone"
          />
          <Input
            ref={(ref: any) => {
              this.email = ref;
            }}
            leftIcon={{ name: 'email' }}
            marginTop={10}
            validationField="email"
          />
          <Button
            onPress={() => this.handleOnAdd()}
            title="Add"
            width={width - 200}
            center
            marginTop={10}
          />
        </Body>
      </Container>
    );
  }
}
const mapStateToProps = (state: any) => ({
  list: parseArraySelector(applyArraySelector(contactListSelector, state)),
});

const mapDispatchToProps = (dispatch: any) => ({
  setList: (list: any) => dispatch(setContactList({ list })),
  getList: (query?: TQuery) => dispatch(contactGetList({ query })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
// export default AddUser;
