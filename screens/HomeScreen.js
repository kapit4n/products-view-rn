import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SectionList, Button } from 'react-native';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: [
      ]
    }
  }
  
  componentWillMount() {
    fetch('https://rest-customers-1212.herokuapp.com/categories')
    .then((response) => response.json())
    .then((categories) => {
      this.setState({
        categories: categories
      });
    })
  }

  static navigationOptions = {
    header: null,
  };

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {this.state.categories.map(cat => (
            <View style={styles.imageContainer} key={cat.id}>
              <View style={styles.welcomeContainer}>
                <Image source={ {uri: cat.img } } style={styles.categoryImage} />
              </View>
              <SectionList
                sections={[
                  { title: cat.name, data: cat.products },
                ]}
                renderItem={({ item }) => 
                <View>
                  <Text style={styles.item}>
                  {item.name}
                  </Text>
                  <Button
                    title="Details"
                    onPress={() => navigate('ProductView', { name: item.name, img: item.img, description: item.description, price: item.price, quantity: item.quantity })}
                  />
                 </View>
                  }

                renderSectionHeader={({ section }) => <Text style={styles.category}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
              />
            </View>
          ))
          }
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  category: {
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 2,
    fontSize: 18,
    height: 44,
  },
  contentContainer: {
    paddingTop: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  categoryImage: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
    marginTop: 3
  },
  imageContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
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
    paddingVertical: 2,
  },
});
