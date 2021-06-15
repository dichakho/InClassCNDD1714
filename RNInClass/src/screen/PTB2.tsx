/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
interface Props {
  navigation: any;
}
interface State {
  data: Array<string>;
  valueA: string;
  valueB: string;
  valueC: string;
}
export default class PTB2 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [],
      valueA: '',
      valueB: '',
      valueC: '',
    };
  }
  removeItem = (item: string) => {
    const {data} = this.state;
    let dataArr = [...data];
    dataArr = dataArr.filter((d) => d !== item);
    this.setState({data: dataArr});
  };
  renderRowItem = ({item}: {item: string}) => {
    const {navigation} = this.props;

    return (
      <TouchableOpacity
        onLongPress={() => this.removeItem(item)}
        onPress={() => navigation.navigate('Detail Result', {result: item})}
        style={{paddingVertical: 5}}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };
  onSolve = () => {
    const {valueA, valueB, valueC, data} = this.state;
    if (!valueA || !valueB || !valueC) {
      return ToastAndroid.showWithGravity(
        'Bạn phải nhập đầy đủ các trường!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
    }
    /**
     * convert string to number
     */
    const a = +valueA;
    const b = +valueB;
    const c = +valueC;
    const notify = `Phương trình ${a}x^2 + ${b}x + ${c} = 0`;
    /**
     * copy data -> dataArr
     */
    let dataArr = [...data];
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
      dataArr.push(`${notify} - vô nghiệm`);
    } else if (delta == 0) {
      let x = (-b / 2) * a;
      dataArr.push(
        `${notify}
có 1 nghiệm kép x= ${x}`,
      );
    } else if (delta > 0) {
      let x1 = (-b + Math.sqrt(delta)) / (2 * a);
      let x2 = (-b - Math.sqrt(delta)) / (2 * a);
      dataArr.push(
        `${notify} - có 2 nghiệm phân biệt 
x1 = ${x1} và x2 = ${x2}`,
      );
    }
    this.setState({
      data: dataArr,
    });
  };
  renderSeparatorComponent = () => {
    return (
      <View
        style={{height: 2, backgroundColor: '#636363', marginVertical: 2}}
      />
    );
  };
  render() {
    const {data, valueA, valueB, valueC} = this.state;
    return (
      <View style={{flex: 1, padding: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{alignSelf: 'center'}}>a: </Text>
          <TextInput
            keyboardType="number-pad"
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              width: '100%',
            }}
            onChangeText={(text) => this.setState({valueA: text})}
            value={valueA}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={{alignSelf: 'center'}}>b: </Text>
          <TextInput
            keyboardType="number-pad"
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              width: '100%',
            }}
            onChangeText={(text) => this.setState({valueB: text})}
            value={valueB}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={{alignSelf: 'center'}}>c: </Text>
          <TextInput
            keyboardType="number-pad"
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              width: '100%',
            }}
            onChangeText={(text) => this.setState({valueC: text})}
            value={valueC}
          />
        </View>
        <View style={{marginTop: 20, width: 100, alignSelf: 'center'}}>
          <Button title="Solve" onPress={() => this.onSolve()} />
        </View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={data}
          renderItem={this.renderRowItem}
          ItemSeparatorComponent={() => this.renderSeparatorComponent()}
        />
      </View>
    );
  }
}
