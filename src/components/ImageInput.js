import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import colors from '../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';

function ImageInput({imageUri, onChangeImage}) {
  const handlePress = () => {
    if (!imageUri) selectImage();
    else {
      Alert.alert('Delete', 'Do you want to delete the Image?', [
        {text: 'Yes', onPress: () => onChangeImage(null)},
        {text: 'No'},
      ]);
    }
  };

  const selectImage = () => {
    try {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        mediaType: 'image',
        multiple: false,
      }).then(image => {
        console.log(image);
        if (image.path !== null) onChangeImage(image.path);
      });
    } catch (error) {
      console.log('Error reading image', error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress} style={styles.touchable}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.mediumgrey}
          />
        )}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.lightgrey,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    width: 100,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  touchable: {
    flex: 1,
  },
});

export default ImageInput;
