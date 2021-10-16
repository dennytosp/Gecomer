import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import Texting from '../../../components/Texting';

const Cart = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const _renderHeader = () => {
    return (
      <View style={styles.wrapperHeader}>
        <Texting title="Cart" />
      </View>
    );
  };

  const _renderCenter = () => {
    return <View style={styles.wrapperCenter}></View>;
  };

  const _renderContent = () => {
    return <View style={styles.wrapperContent}></View>;
  };

  return (
    <View style={styles.container}>
      <_renderHeader />
    </View>
  );
};

export default Cart;
