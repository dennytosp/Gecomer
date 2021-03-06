import React from 'react';
import {View, Image, Pressable} from 'react-native';
import styles from './styles';
import {Texting} from '../..';
import {getSize} from '../../../utils/reponsive';
import {COLORS, FONTS} from '../../../constants';

const RecommendProduct = ({image, title, subtitle, handleOnpress, style}) => {
  return (
    <Pressable
      onPress={handleOnpress}
      style={{...styles.wrapperRecommendProduct, ...style}}>
      <Image source={image} style={styles.imageRecommend} />
      <View style={styles.wrapperTitle}>
        <Texting
          title={title}
          fontSize={getSize.m(24)}
          color={COLORS.white}
          lineHeight={36}
          fontFamily={FONTS.bold}
        />
      </View>
      <View style={styles.wrapperSubTitle}>
        <Texting title={subtitle} color={COLORS.white} />
      </View>
    </Pressable>
  );
};

export default RecommendProduct;
