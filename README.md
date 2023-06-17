<h1 align="center">
  react-native-zoom-carousel
</h1>

<div align="center">

[![Version](https://img.shields.io/npm/v/react-native-zoom-carousel.svg)](https://www.npmjs.com/package/react-native-zoom-carousel)
[![Downloads](https://img.shields.io/npm/dt/react-native-zoom-carousel.svg)](https://www.npmjs.com/package/react-native-zoom-carousel)

Performant and customizable carousel component for React Native with zooming and panning capabilities.

</div>

<p align="center">
  <img src="https://github.com/your-username/react-native-zoom-carousel/blob/main/docs/demo.gif" alt="Demo" />
</p>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation {#installation}

To use `react-native-zoom-carousel` in your React Native project, you need to follow these steps:

1. Install the package using npm:

   ```bash
   npm install react-native-zoom-carousel
   ```

## Usage {#usage}

**Note: In react-native-zoom-carousel `data` props is used for server/online images and for local/offline images use `localImagesData` props (see below).**

Example for server/URLs media(images, video URL, youtube video URL), pass Array in data prop as below:

```jsx
import React from "react";
import { SafeAreaView } from "react-native";
import MediaCarousel from "react-native-zoom-carousel";

const YourImage = () => {
  const MediaUrls = [
    "https://www.visualeducation.com/wp-content/uploads/2020/05/Beats_headphones-2-1558px.jpg", //Image URL
    "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Video URL
    "https://www.youtube.com/watch?v=Tmnv3g3cy-w", // Youtube Video URL
  ];

  return (
    <SafeAreaView>
      <MediaCarousel
        style={{ width: 200, height: 200 }}
        data={MediaUrls}
        styledView={true} //This styled prop will give you desinged view or carousel
      />
    </SafeAreaView>
  );
};
```

Example for offline data (images only), pass Array in data prop as below:

```jsx
import React from "react";
import { SafeAreaView } from "react-native";
import MediaCarousel from "react-native-zoom-carousel";

const YourImage = () => {
  const OfflineImages = {
    Logo: require("../assets/images/Thumbnail.png"),
    YouTubeLogo: require("../assets/images/YoutubeIcon.jpeg"),
    VideoIcon: require("../assets/images/VideoIcon.png"),
    CloseIcon: require("../assets/images/Close.png"),
  };

  return (
    <SafeAreaView>
      <MediaCarousel
        style={{ width: 200, height: 200 }}
        localImagesData={[
          OfflineImages.FirstImage,
          OfflineImages.SecondImage,
          OfflineImages.ThirdImage,
        ]}
        resizeMode={FastImage.resizeMode.contain}
      />
    </SafeAreaView>
  );
};
```
