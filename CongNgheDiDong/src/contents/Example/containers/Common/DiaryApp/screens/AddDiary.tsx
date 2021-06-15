/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Body,
  QuickView,
  Button,
  Text,
  Input,
  Header,
  DateTimePicker,
} from '@components';
import { ColorPicker } from 'react-native-color-picker';
import firestore from '@react-native-firebase/firestore';
import { lightPrimaryColor } from '@themes/ThemeComponent/Common/Color';
import NavigationService from '@utils/navigation';

interface Props {}
interface State {
  color: string;
}
class AddDiary extends PureComponent<Props, State> {
  title: any;

  content: any;

  datePickerRef: any;

  timePickerRef: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      color: lightPrimaryColor,
    };
  }

  handleAddDiary = () => {
    const { color } = this.state;
    const title = this.title.getText();
    const content = this.content.getText();
    const date = this.datePickerRef.getText();
    const time = this.timePickerRef.getText();
    console.log('payload', title, content, date, time, color);
    firestore()
      .collection('Diaries')
      .add({
        title,
        content,
        date,
        time,
        color,
      })
      .then(() => {
        console.log('Diary added!');
      });
  };

  render() {
    return (
      <Container>
        <Header backIcon title="Add Diary" />
        <Body scroll>
          <Input
            marginTop={10}
            ref={(ref: any) => {
              this.title = ref;
            }}
            placeholder="Add title"
          />
          <Input
            ref={(ref: any) => {
              this.content = ref;
            }}
            marginTop={10}
            placeholder="Add content"
          />
          <DateTimePicker
            marginTop={10}
            ref={(ref) => {
              this.datePickerRef = ref;
            }}
            value={new Date()}
            // minimumDate={new Date('2020-08-12')}
            // maximumDate={new Date('2020-08-20')}
            placeholder="Pick a date"
            shadow
          />
          <DateTimePicker
            mode="time"
            shadow
            value={new Date()}
            ref={(ref) => {
              this.timePickerRef = ref;
            }}
          />
          <QuickView style={{ borderWidth: 1 }} width={300} height={200}>
            <ColorPicker
              onColorSelected={(color) =>
                // Alert.alert(`Color selected: ${color}`)
                this.setState({ color })}
              style={{ flex: 1 }}
            />
          </QuickView>
          <Button
            title="Add note"
            onPress={() => {
              this.handleAddDiary();
              NavigationService.goBack();
            }}
          />
        </Body>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AddDiary);
