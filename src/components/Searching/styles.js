import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
import {getSize} from '../../utils/reponsive';

export const styles = StyleSheet.create({
  wrapperHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: getSize.m(5),
    borderWidth: getSize.s(1),
    borderColor: COLORS.border,
    flex: 1,
    paddingHorizontal: getSize.m(16),
  },
  input: {
    fontFamily: FONTS.regular,
    flex: 1,
    fontSize: getSize.m(12),
    marginTop: getSize.m(3.5),
    paddingHorizontal: getSize.m(8),
    color: COLORS.secondary,
  },
  wrapperFavorite: {
    paddingHorizontal: getSize.m(16),
  },
  wrapperLines: {
    borderWidth: getSize.s(1),
    borderColor: COLORS.border,
    marginTop: getSize.m(16),
    marginHorizontal: getSize.m(-16),
  },
});
export default styles;
