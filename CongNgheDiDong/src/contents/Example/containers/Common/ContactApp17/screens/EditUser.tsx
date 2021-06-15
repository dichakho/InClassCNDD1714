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
import { getIdFromParams } from '@utils/appHelper';
import { contactListSelector } from '../redux/selector';
import { setContactList, contactGetList } from '../redux/slice';

const { width } = Dimensions.get('window');
interface Props {
  list: TArrayRedux;
  setList: (list: any) => any;
  getList: (query?: TQuery) => any;
}
interface State {}
class EditUser extends PureComponent<Props> {
  account: any;

  phoneNumber: any;

  email: any;

  handleOnEdit = () => {
    const {
      list: { data },
      setList,
      getList,
    } = this.props;
    const dataTemp = data;
    const payload = {
      id: getIdFromParams(this.props),
      avatar: 'https://picsum.photos/1000/1000',
      name: this.account.getText(),
      phoneNumber: this.phoneNumber.getText(),
      email: this.email.getText(),
    };
    // eslint-disable-next-line array-callback-return
    dataTemp.map((d: any) => {
      if (d.id === getIdFromParams(this.props)) {
        d.name = payload.name;
        d.phoneNumber = payload.phoneNumber;
        d.email = payload.email;
      }
    });
    setList(dataTemp);
    getList();
    NavigationService.goBack();
  };

  render() {
    const {
      list: { data },
    } = this.props;
    // console.log('!!!', data[getIdFromParams(this.props)].name);

    return (
      <Container>
        <Header backIcon title="EditUser" />
        <Body>
          <QuickView style={{ alignItems: 'center' }}>
            <Icon name="account" size={100} color={lightPrimaryColor} />
          </QuickView>
          <Input
            value={data[getIdFromParams(this.props) - 1].name}
            ref={(ref: any) => {
              this.account = ref;
            }}
            leftIcon={{ name: 'account' }}
            marginTop={10}
          />
          <Input
            value={data[getIdFromParams(this.props) - 1].phoneNumber}
            ref={(ref: any) => {
              this.phoneNumber = ref;
            }}
            leftIcon={{ name: 'phone' }}
            marginTop={10}
            validationField="phone"
          />
          <Input
            value={data[getIdFromParams(this.props) - 1].email}
            ref={(ref: any) => {
              this.email = ref;
            }}
            leftIcon={{ name: 'email' }}
            marginTop={10}
            validationField="email"
          />
          <Button
            onPress={() => this.handleOnEdit()}
            title="Edit"
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

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
