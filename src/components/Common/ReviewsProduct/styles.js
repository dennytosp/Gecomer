import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {getSize} from '../../../utils/reponsive';

export const styles = StyleSheet.create({
  wrapperInfor: {
    flexDirection: 'row',
    marginBottom: getSize.m(16),
    alignItems: 'center',
  },
  wrapperImagePersonReviews: {
    width: getSize.s(70),
    height: getSize.v(70),
    borderRadius: getSize.s(70),
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderColor: COLORS.border,
    borderWidth: getSize.m(2),
  },
  imagePersonReviews: {
    width: getSize.s(60),
    height: getSize.v(60),
    borderRadius: getSize.s(60),
  },
  rating0: {
    marginHorizontal: getSize.m(16),
  },
  imageProductReviews: {
    width: getSize.s(72),
    height: getSize.v(72),
    borderRadius: getSize.s(8),
  },
  wrapperImageReviews: {
    flexDirection: 'row',
    marginBottom: getSize.m(16),
  },
});
export default styles;
