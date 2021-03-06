import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import {Header, NotifList} from '../../../../../../../components';
import {ActivityListNotifi} from '../../../../../../../assets/svg';
import {DATA_ACTIVITY_NOTI} from './../../../../../../../assets/data';

const ActivityNotification = () => {
  const _renderCenter = ({item}) => {
    return (
      <NotifList
        image={ActivityListNotifi}
        title={item.title}
        content={item.content}
        time={item.time}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Activity" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_ACTIVITY_NOTI}
        renderItem={_renderCenter}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default ActivityNotification;
