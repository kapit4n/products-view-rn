import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

export default class ProductView extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    const productName = this.props.navigation.getParam('name', '');
    const productImg = this.props.navigation.getParam('img', '');
    const productPrice = this.props.navigation.getParam('price', '');
    const productQuantity = this.props.navigation.getParam('quantity', '');
    const productDescription = this.props.navigation.getParam('description', '');

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Button title="Back to Home" onPress={() => navigate('Home')} />
          <View>
            <Text>
            { productName }
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={ {uri: productImg} } style={styles.productImage} />
          </View>

          <View>
            <Text>Price: ${productPrice}</Text>
            <Text>Quantity: {productQuantity}</Text>
            <Text>
            {productDescription}
            </Text>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  productImage: {
    width: 250,
    height: 230,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  imageContainer: {
    alignItems: 'center',
    marginHorizontal: 3,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
