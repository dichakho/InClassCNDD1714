/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  QuickView, Text, Container, Header, Body, Image,
} from '@components';
import {
  FlatList as RNFlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  View,
  TextInput,
  Image as AppImage,
} from 'react-native';
import NavigationService from '@utils/navigation';
import { TQuery, TArrayRedux } from '@utils/redux';
import { parseArraySelector, applyArraySelector } from '@utils/selector';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from 'lodash';
import { Color } from '@themes/Theme';
import { lightComponentColor } from '@themes/ThemeComponent/Common/CommonProps';
import Swiper from 'react-native-swiper';
import WishlistIcon from '../container/WishlistIcon';
import dogAppStack from '../routes';
import { dogGetList } from '../redux/slice';
import { dogListSelector } from '../redux/selector';

const { width } = Dimensions.get('window');
interface Props {
  list: TArrayRedux;
  getList: (query?: TQuery) => any;
  theme?: any;
}
interface State {
  dataDog: any;
  search: string;
}
class DogList extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      dataDog: [],
      search: '',
    };
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    const { dataDog, search } = prevState;
    if (!_.isNull(nextProps.list.data) && search === '') {
      return {
        dataDog: [...nextProps.list.data],
      };
    }
    return { dataDog };
  }

  componentDidMount() {
    const { getList } = this.props;
    getList();
  }

  renderItem = ({ item }: { item: any }) => (
    <Swiper showsPagination={false} horizontal style={{ height: 250 }}>
      <TouchableOpacity
        onPress={() => NavigationService.navigate(dogAppStack.dogDetail, item)}
        style={{
          width: width / 2 - 40,
          // borderWidth: 1,
          // borderColor: 'gray',
          flex: 1,
          marginHorizontal: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          backgroundColor: '#FFFFFF',
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <Image
          style={{ borderRadius: 10 }}
          sharp
          center
          width={width / 2 - 40}
          height={150}
          source={{ uri: item?.url }}
        />
        {/* <AppImage
          source={{ uri: item?.url }}
          style={{ width: width / 2 - 40, height: 150 }}
        /> */}

        <QuickView padding={10}>
          <QuickView row justifyContent="space-between">
            <Text numberOfLines={1} style={{ flex: 1 }} bold>
              {item?.name}
            </Text>
            <WishlistIcon />
          </QuickView>
          <Text type="subtitle">{item?.bred_for}</Text>
        </QuickView>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          borderRadius: 10,
          marginBottom: 10,
          padding: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          backgroundColor: '#FFFFFF',
          marginHorizontal: 5,
        }}
      >
        <QuickView marginTop={10}>
          <Text primary type="paragraph" bold>
            Breed for:
            {' '}
          </Text>
          <Text primary type="paragraph">
            {item?.bred_for}
          </Text>
        </QuickView>
        <QuickView marginTop={10}>
          <Text success type="paragraph" bold>
            Life span:
          </Text>
          <Text success type="paragraph">
            {item?.life_span}
          </Text>
        </QuickView>
        <QuickView marginTop={10}>
          <Text error type="paragraph" bold>
            Origin:
            {' '}
          </Text>
          <Text error type="paragraph">
            {item?.origin}
          </Text>
        </QuickView>
      </View>
    </Swiper>
  );

  updateSearch = (search: string) => {
    this.setState({ search });
    const {
      list: { data },
    } = this.props;
    const newData = data.filter((item: any) => {
      const itemName = `${item.name.toUpperCase()}`;
      const textData = search.toUpperCase();
      return itemName.indexOf(textData) > -1;
    });
    this.setState({ dataDog: newData });
  };

  render() {
    const { dataDog, search } = this.state;
    return (
      <Container>
        <Header title="Dog List" />
        <Body>
          <SearchBar
            // onClear={this.onClear}
            // onSubmitEditing={this.onSubmitEditing}
            inputStyle={{ fontSize: 14, color: lightComponentColor.textColor }}
            onChangeText={this.updateSearch}
            value={search}
            // platform="ios"
            lightTheme
            placeholder="Search"
            // searchIcon={false}
            searchIcon={{
              color: lightComponentColor.textColor,
            }}
            clearIcon={{ color: lightComponentColor.textColor }}
            placeholderTextColor={lightComponentColor.textColor}
            containerStyle={{
              width: '100%',
              elevation: 20,
              backgroundColor: Color.grey2,
              borderWidth: 1,
              borderColor: 'rgba(177, 173, 173, 0.2)',
              borderRadius: 10,
              marginVertical: 10,
            }}
            inputContainerStyle={{
              height: 30,
              borderRadius: 22.5,
              backgroundColor: Color.grey2,
            }}
          />
          {/* <QuickView
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              marginVertical: 15,
              borderRadius: 20,
              paddingHorizontal: 10,
            }}>
            <QuickView style={{ justifyContent: 'center', flex: 1 }}>
              <Icon name="magnify" size={20} />
            </QuickView>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                flex: 9,
              }}
              onChangeText={(text) => this.updateSearch(text)}
            />
          </QuickView> */}
          <RNFlatList
            // contentContainerStyle={{
            //   // flexGrow: 1,
            //   borderWidth: 1,
            //   // alignItems: 'flex-start',
            // }}
            style={{ marginTop: 15 }}
            keyExtractor={(item, index) => `${index}`}
            data={dataDog}
            // data={[{}, {}, {}]}
            renderItem={this.renderItem}
            numColumns={2}
          />
        </Body>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  list: parseArraySelector(applyArraySelector(dogListSelector, state)),
});

const mapDispatchToProps = (dispatch: any) => ({
  getList: (query?: TQuery) => dispatch(dogGetList({ query })),
});

export default connect(mapStateToProps, mapDispatchToProps)(DogList);
