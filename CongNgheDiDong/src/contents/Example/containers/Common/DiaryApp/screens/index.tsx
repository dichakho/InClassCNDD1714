/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/sort-comp */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import {
  Container,
  Body,
  QuickView,
  Button,
  Text,
  FlatList,
} from '@components';
import { Alert } from 'react-native';
import { lightPrimaryColor, Color } from '@themes/ThemeComponent/Common/Color';
import NavigationService from '@utils/navigation';
import firestore from '@react-native-firebase/firestore';
import diaryStack from '../routes';

interface Props {}
interface State {
  loggedIn: boolean;
  user: any;
  diaries: Array<any>;
}
class DiaryApp extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: null,
      diaries: [],
    };
  }

  onResult = (QuerySnapshot: any) => {
    console.log('Got Users collection result.', QuerySnapshot._docs);
    this.setState({ diaries: QuerySnapshot._docs });
  };

  onError = (error: any) => {
    console.error(error);
  };

  async componentDidMount() {
    GoogleSignin.configure({
      webClientId:
        '581876830723-kqgrcoq5tcedhk0q02nhle068i9qi1es.apps.googleusercontent.com',
      offlineAccess: false,
    });
    auth().onAuthStateChanged((user) => this.onAuthStateChanged(user));
    firestore().collection('Diaries').onSnapshot(this.onResult, this.onError);
  }

  onAuthStateChanged = (user: any) => {
    this.setState({ user });
    if (user) this.setState({ loggedIn: true });
  };

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      this.setState({ loggedIn: true, user: idToken });
      const credential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(credential);
    } catch (error) {
      console.log('DiaryApp -> signIn -> error', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        Alert.alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  signOut = async () => {
    try {
      // await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ loggedIn: false, user: [] });
    } catch (error) {
      console.error(error);
    }
  };

  renderItem = ({ item, index }: { item: any; index: number }) => (
    <QuickView
      backgroundColor={item._data.color}
      borderRadius={10}
      padding={20}
      marginVertical={10}
    >
      <Text color={Color.white}>{item._data.title}</Text>
      <Text color={Color.white}>{item._data.content}</Text>
      <Text color={Color.white}>{item._data.time}</Text>
      <Text color={Color.white}>{item._data.date}</Text>
    </QuickView>
  );

  render() {
    const { loggedIn, user, diaries } = this.state;
    console.log('DiaryApp -> render -> user', user?.displayName);
    return (
      <Container>
        <Body>
          <QuickView center>
            {/* {loggedIn && user && user?.displayName ? (
              <Text>{`Xin chào ${user?.displayName}`}</Text>
            ) : null} */}
            {loggedIn ? null : (
              <GoogleSigninButton
                onPress={this.signIn}
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
              />
            )}
            {/* {!loggedIn && <Text>You are currently logged out</Text>} */}
          </QuickView>
          {loggedIn && (
            <>
              <Button
                onPress={() => NavigationService.navigate(diaryStack.add)}
                title="Add diary"
                color={lightPrimaryColor}
              />
              <Button onPress={this.signOut} title="LogOut" color="red" />
            </>
          )}
          {loggedIn ? (
            <FlatList data={diaries} renderItem={this.renderItem} />
          ) : null}
        </Body>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DiaryApp);
