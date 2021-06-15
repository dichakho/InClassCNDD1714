/* eslint-disable consistent-return */
/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { QuickView, Text } from '@components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  active?: boolean;
  id?: number;
  onPress?: () => any;
}
interface State {
  active: boolean;
}
class WishlistIcon extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { active } = this.props;
    this.state = {
      active,
    };
  }

  // toggleStatus = async (id: number | undefined) => {
  //   if (id) {
  //     try {
  //       const result = await toggleFavoriteProject(id);
  //       this.setState({ active: result.favourite });
  //       return result;
  //     } catch (error) {}
  //   } else {
  //   }
  // };

  toggleStatus = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  };

  onPress = async () => {
    const { id, onPress } = this.props;
    await this.toggleStatus();
    if (onPress) {
      onPress();
    }
  };

  render() {
    const { active } = this.state;
    return (
      <TouchableOpacity onPress={() => this.onPress()}>
        <QuickView
          // marginTop={5}
          row
          alignItems="center"
        >
          <Icon
            name={active ? 'heart' : 'heart-outline'}
            color="#D36363"
            size={24}
          />
        </QuickView>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(WishlistIcon);
