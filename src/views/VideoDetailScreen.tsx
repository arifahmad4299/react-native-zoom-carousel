import React from 'react';
import {View, SafeAreaView, Pressable, Text} from 'react-native';
import Video from 'react-native-video';
import {CloseButton} from '../common/CloseButton';
import {styles} from './styles/VideoDetailScreenStyle';

const VideoDetailScreen = ({fullVideo, url}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <CloseButton style={styles.closeButton} onPress={() => fullVideo()} />
      <Video
        style={styles.backgroundVideo}
        source={{
          uri: url,
        }}
        ignoreSilentSwitch="ignore"
        controls={true}
        fullscreen={true}
        resizeMode={'contain'}
      />
      <View style={styles.closeView} />
    </SafeAreaView>
  );
};

export default VideoDetailScreen;
