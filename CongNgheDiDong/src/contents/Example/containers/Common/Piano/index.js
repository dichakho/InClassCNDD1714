/* eslint-disable react/jsx-filename-extension */
// import React, { PureComponent } from 'react';
// import { View, Text } from 'react-native';
// import { connect } from 'react-redux';

// export class PianoScreen extends PureComponent {
//   render() {
//     return (
//       <View>
//         <Text> prop </Text>
//       </View>
//     );
//   }
// }

// const mapStateToProps = (state: any) => ({});

// const mapDispatchToProps = (dispatch: any) => ({});

// export default connect(mapStateToProps, mapDispatchToProps)(PianoScreen);

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Sound from 'react-native-sound';

export default class PianoScreen extends React.Component {
  constructor(props) {
    super(props);

    // backgroundColor
    this.state = {
      colorC: 'white',
      colorCs: 'black',
      colorD: 'white',
      colorDs: 'black',
      colorE: 'white',
      colorF: 'white',
      colorFs: 'black',
      colorG: 'white',
      colorGs: 'black',
      colorA: 'white',
      colorAs: 'black',
      colorB: 'white',
      // two
      colorC1: 'white',
      colorCs1: 'black',
      colorD1: 'white',
      colorDs1: 'black',
      colorE1: 'white',
      colorF1: 'white',
      colorFs1: 'black',
      colorG1: 'white',
      colorGs1: 'black',
      colorA1: 'white',
      colorAs1: 'black',
      colorB1: 'white',
    };

    // preload sounds
    this.sound = {};
    const soundList = [
      'C',
      'Cs',
      'D',
      'Ds',
      'E',
      'F',
      'Fs',
      'G',
      'Gs',
      'A',
      'As',
      'B',
      // two
      'C1',
      'Cs1',
      'D1',
      'Ds1',
      'E1',
      'F1',
      'Fs1',
      'G1',
      'Gs1',
      'A1',
      'As1',
      'B1',
    ];

    soundList.forEach((note) => {
      this.sound[note] = new Sound(
        `${note}.mp3`,
        Sound.MAIN_BUNDLE,
        (error) => {
          console.log('hello', error);
          if (error) {
            console.log('failed to load the sound.', error);
          }
        },
      );
    });
  }

  stroke(note) {
    // change backgroundColor
    switch (note) {
      case 'C':
        this.setState({ colorC: 'yellow' });
        break;
      case 'Cs':
        this.setState({ colorCs: 'yellow' });
        break;
      case 'D':
        this.setState({ colorD: 'yellow' });
        break;
      case 'Ds':
        this.setState({ colorDs: 'yellow' });
        break;
      case 'E':
        this.setState({ colorE: 'yellow' });
        break;
      case 'F':
        this.setState({ colorF: 'yellow' });
        break;
      case 'Fs':
        this.setState({ colorFs: 'yellow' });
        break;
      case 'G':
        this.setState({ colorG: 'yellow' });
        break;
      case 'Gs':
        this.setState({ colorGs: 'yellow' });
        break;
      case 'A':
        this.setState({ colorA: 'yellow' });
        break;
      case 'As':
        this.setState({ colorAs: 'yellow' });
        break;
      case 'B':
        this.setState({ colorB: 'yellow' });
        break;
      // two
      case 'C1':
        this.setState({ colorC1: 'yellow' });
        break;
      case 'Cs1':
        this.setState({ colorCs1: 'yellow' });
        break;
      case 'D1':
        this.setState({ colorD1: 'yellow' });
        break;
      case 'Ds1':
        this.setState({ colorDs1: 'yellow' });
        break;
      case 'E1':
        this.setState({ colorE1: 'yellow' });
        break;
      case 'F1':
        this.setState({ colorF1: 'yellow' });
        break;
      case 'Fs1':
        this.setState({ colorFs1: 'yellow' });
        break;
      case 'G1':
        this.setState({ colorG1: 'yellow' });
        break;
      case 'Gs1':
        this.setState({ colorGs1: 'yellow' });
        break;
      case 'A1':
        this.setState({ colorA1: 'yellow' });
        break;
      case 'As1':
        this.setState({ colorAs1: 'yellow' });
        break;
      case 'B1':
        this.setState({ colorB1: 'yellow' });
        break;

      default:
        break;
    }

    // play sound
    setTimeout(() => {
      this.sound[note].play((success) => {
        if (success) {
          console.log('successfully finished playing.');
        } else {
          console.log('failed to play the sound.');
        }
      });
    }, 1);
  }

  stop(note) {
    // change backgroundColor
    switch (note) {
      case 'C':
        this.setState({ colorC: 'white' });
        break;
      case 'Cs':
        this.setState({ colorCs: 'black' });
        break;
      case 'D':
        this.setState({ colorD: 'white' });
        break;
      case 'Ds':
        this.setState({ colorDs: 'black' });
        break;
      case 'E':
        this.setState({ colorE: 'white' });
        break;
      case 'F':
        this.setState({ colorF: 'white' });
        break;
      case 'Fs':
        this.setState({ colorFs: 'black' });
        break;
      case 'G':
        this.setState({ colorG: 'white' });
        break;
      case 'Gs':
        this.setState({ colorGs: 'black' });
        break;
      case 'A':
        this.setState({ colorA: 'white' });
        break;
      case 'As':
        this.setState({ colorAs: 'black' });
        break;
      case 'B':
        this.setState({ colorB: 'white' });
        break;
      // two
      case 'C1':
        this.setState({ colorC1: 'white' });
        break;
      case 'Cs1':
        this.setState({ colorCs1: 'black' });
        break;
      case 'D1':
        this.setState({ colorD1: 'white' });
        break;
      case 'Ds1':
        this.setState({ colorDs1: 'black' });
        break;
      case 'E1':
        this.setState({ colorE1: 'white' });
        break;
      case 'F1':
        this.setState({ colorF1: 'white' });
        break;
      case 'Fs1':
        this.setState({ colorFs1: 'black' });
        break;
      case 'G1':
        this.setState({ colorG1: 'white' });
        break;
      case 'Gs1':
        this.setState({ colorGs1: 'black' });
        break;
      case 'A1':
        this.setState({ colorA1: 'white' });
        break;
      case 'As1':
        this.setState({ colorAs1: 'black' });
        break;
      case 'B1':
        this.setState({ colorB1: 'white' });
        break;
      default:
        break;
    }

    // stop sound
    setTimeout(() => {
      // gradually decrease the volume
      for (let i = 0; i < 2000; i++) {
        this.sound[note].setVolume(1.0 - i / 2000.0);
      }
      this.sound[note].stop();
      this.sound[note].setVolume(1.0);
    }, 1);
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {/* 1 */}
            <View
              style={{
                backgroundColor: this.state.colorC,
                height: 100,
                width: 32,
                borderLeftWidth: 1,
                borderTopWidth: 1,
              }}
            />
            {/* 2 */}
            <View
              onTouchStart={() => this.stroke('Cs')}
              onTouchEnd={() => this.stop('Cs')}
              style={{
                backgroundColor: this.state.colorCs,
                height: 100,
                width: 32,
                borderTopWidth: 1,
                borderLeftWidth: 1,
              }}
            />
            {/* 3 */}
            <View
              style={{
                backgroundColor: this.state.colorD,
                height: 100,
                width: 16,
                borderTopWidth: 1,
              }}
            />
            {/* 4 */}
            <View
              onTouchStart={() => this.stroke('Ds')}
              onTouchEnd={() => this.stop('Ds')}
              style={{
                backgroundColor: this.state.colorDs,
                height: 100,
                width: 32,
                borderTopWidth: 1,
                borderLeftWidth: 1,
              }}
            />
            {/* 5 */}
            <View
              style={{
                backgroundColor: this.state.colorE,
                height: 100,
                width: 32,
                borderTopWidth: 1,
              }}
            />
            {/* 6 */}
            <View
              style={{
                backgroundColor: this.state.colorF,
                height: 100,
                width: 32,
                borderTopWidth: 1,
                borderLeftWidth: 1,
              }}
            />
            {/* 7 */}
            <View
              onTouchStart={() => this.stroke('Fs')}
              onTouchEnd={() => this.stop('Fs')}
              style={{
                backgroundColor: this.state.colorFs,
                height: 100,
                width: 32,
                borderTopWidth: 1,
              }}
            />
            {/* 8 */}
            <View
              style={{
                backgroundColor: this.state.colorG,
                height: 100,
                width: 16,
                borderTopWidth: 1,
              }}
            />
            {/* 9 */}
            <View
              onTouchStart={() => this.stroke('Gs')}
              onTouchEnd={() => this.stop('Gs')}
              style={{
                backgroundColor: this.state.colorGs,
                height: 100,
                width: 32,
                borderTopWidth: 1,
              }}
            />
            {/* 10 */}
            <View
              style={{
                backgroundColor: this.state.colorA,
                height: 100,
                width: 16,
                borderTopWidth: 1,
              }}
            />
            {/* 11 */}
            <View
              onTouchStart={() => this.stroke('As')}
              onTouchEnd={() => this.stop('As')}
              style={{
                backgroundColor: this.state.colorAs,
                height: 100,
                width: 32,
                borderTopWidth: 1,
              }}
            />
            {/* 12 */}
            <View
              style={{
                backgroundColor: this.state.colorB,
                height: 100,
                width: 32,
                borderRightWidth: 1,
                borderTopWidth: 1,
              }}
            />

            {/* two */}

            {/* 1 */}
            <View
              style={{
                backgroundColor: this.state.colorC1,
                height: 100,
                width: 32,
                borderLeftWidth: 1,
                borderTopWidth: 1,
              }}
            />
            {/* 2 */}
            <View
              onTouchStart={() => this.stroke('Cs1')}
              onTouchEnd={() => this.stop('Cs1')}
              style={{
                backgroundColor: this.state.colorCs1,
                height: 100,
                width: 32,
                borderTopWidth: 1,
                borderLeftWidth: 1,
              }}
            />
            {/* 3 */}
            <View
              style={{
                backgroundColor: this.state.colorD1,
                height: 100,
                width: 16,
                borderTopWidth: 1,
              }}
            />
            {/* 4 */}
            <View
              onTouchStart={() => this.stroke('Ds1')}
              onTouchEnd={() => this.stop('Ds1')}
              style={{
                backgroundColor: this.state.colorDs1,
                height: 100,
                width: 32,
                borderTopWidth: 1,
                borderLeftWidth: 1,
              }}
            />
            {/* 5 */}
            <View
              style={{
                backgroundColor: this.state.colorE1,
                height: 100,
                width: 32,
                borderTopWidth: 1,
              }}
            />
            {/* 6 */}
            <View
              style={{
                backgroundColor: this.state.colorF1,
                height: 100,
                width: 32,
                borderTopWidth: 1,
                borderLeftWidth: 1,
              }}
            />
            {/* 7 */}
            <View
              onTouchStart={() => this.stroke('Fs1')}
              onTouchEnd={() => this.stop('Fs1')}
              style={{
                backgroundColor: this.state.colorFs1,
                height: 100,
                width: 32,
                borderTopWidth: 1,
              }}
            />
            {/* 8 */}
            <View
              style={{
                backgroundColor: this.state.colorG1,
                height: 100,
                width: 16,
                borderTopWidth: 1,
              }}
            />
            {/* 9 */}
            <View
              onTouchStart={() => this.stroke('Gs1')}
              onTouchEnd={() => this.stop('Gs1')}
              style={{
                backgroundColor: this.state.colorGs1,
                height: 100,
                width: 32,
                borderTopWidth: 1,
              }}
            />
            {/* 10 */}
            <View
              style={{
                backgroundColor: this.state.colorA1,
                height: 100,
                width: 16,
                borderTopWidth: 1,
              }}
            />
            {/* 11 */}
            <View
              onTouchStart={() => this.stroke('As1')}
              onTouchEnd={() => this.stop('As1')}
              style={{
                backgroundColor: this.state.colorAs1,
                height: 100,
                width: 32,
                borderTopWidth: 1,
              }}
            />
            {/* 12 */}
            <View
              style={{
                backgroundColor: this.state.colorB1,
                height: 100,
                width: 32,
                borderRightWidth: 1,
                borderTopWidth: 1,
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              onTouchStart={() => this.stroke('C')}
              onTouchEnd={() => this.stop('C')}
              style={{
                backgroundColor: this.state.colorC,
                height: 100,
                width: 48,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
              }}
            />
            <View
              onTouchStart={() => this.stroke('D')}
              onTouchEnd={() => this.stop('D')}
              style={{
                backgroundColor: this.state.colorD,
                height: 100,
                width: 48,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
              }}
            />
            <View
              onTouchStart={() => this.stroke('E')}
              onTouchEnd={() => this.stop('E')}
              style={{
                backgroundColor: this.state.colorE,
                height: 100,
                width: 48,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
              }}
            />
            <View
              onTouchStart={() => this.stroke('F')}
              onTouchEnd={() => this.stop('F')}
              style={{
                backgroundColor: this.state.colorF,
                height: 100,
                width: 48,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
              }}
            />
            <View
              onTouchStart={() => this.stroke('G')}
              onTouchEnd={() => this.stop('G')}
              style={{
                backgroundColor: this.state.colorG,
                height: 100,
                width: 48,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
              }}
            />
            <View
              onTouchStart={() => this.stroke('A')}
              onTouchEnd={() => this.stop('A')}
              style={{
                backgroundColor: this.state.colorA,
                height: 100,
                width: 48,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
              }}
            />
            <View
              onTouchStart={() => this.stroke('B')}
              onTouchEnd={() => this.stop('B')}
              style={{
                backgroundColor: this.state.colorB,
                height: 100,
                width: 48,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
                borderRightWidth: 1,
              }}
            />
            {/* two */}
            <View
              onTouchStart={() => this.stroke('C1')}
              onTouchEnd={() => this.stop('C1')}
              style={{
                backgroundColor: this.state.colorC1,
                height: 100,
                width: 48,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
              }}
            />
            <View
              onTouchStart={() => this.stroke('D1')}
              onTouchEnd={() => this.stop('D1')}
              style={{
                backgroundColor: this.state.colorD1,
                height: 100,
                width: 48,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
              }}
            />
            <View
              onTouchStart={() => this.stroke('E1')}
              onTouchEnd={() => this.stop('E1')}
              style={{
                backgroundColor: this.state.colorE1,
                height: 100,
                width: 48,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
              }}
            />
            <View
              onTouchStart={() => this.stroke('F1')}
              onTouchEnd={() => this.stop('F1')}
              style={{
                backgroundColor: this.state.colorF1,
                height: 100,
                width: 48,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
              }}
            />
            <View
              onTouchStart={() => this.stroke('G1')}
              onTouchEnd={() => this.stop('G1')}
              style={{
                backgroundColor: this.state.colorG1,
                height: 100,
                width: 48,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
              }}
            />
            <View
              onTouchStart={() => this.stroke('A1')}
              onTouchEnd={() => this.stop('A1')}
              style={{
                backgroundColor: this.state.colorA1,
                height: 100,
                width: 48,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
              }}
            />
            <View
              onTouchStart={() => this.stroke('B1')}
              onTouchEnd={() => this.stop('B1')}
              style={{
                backgroundColor: this.state.colorB1,
                height: 100,
                width: 48,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
                borderRightWidth: 1,
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
  },
});
