import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {getSize, height, width} from '../../../utils/reponsive';

export const styles = StyleSheet.create({
  wrapperPromotion: marginBottom => ({
    marginBottom: marginBottom,
  }),
  wrapperContentPromotion: {
    position: 'absolute',
    left: getSize.m(24),
    top: getSize.m(32),
  },
  imagePromotion: {
    width: width - getSize.m(32),
    height: height / getSize.m(4),
    borderRadius: 5,
  },
  wrapperTime: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: getSize.m(24),
    bottom: getSize.m(32),
  },
  wrapperCardTime: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: getSize.m(12),
    paddingVertical: getSize.m(8),
    borderRadius: 5,
  },
  wrapperContent: {},
});
export default styles;
