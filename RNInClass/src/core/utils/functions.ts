import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (value: any) => {
  try {
    const Global: any = global;
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('data', jsonValue);
    const getJsonValue = await AsyncStorage.getItem('data');
    console.log('getJsonValue', getJsonValue);

    Global.data = getJsonValue != null ? JSON.parse(jsonValue) : null;
    console.log('!1111');
  } catch (e) {
    // saving error
  }
};
export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('data');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
export const Global: any = global;
