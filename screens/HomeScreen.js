import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
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
    .then((responseJson) => {
      this.setState({
        categories: responseJson
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
                <Button
                  title="Details"
                  onPress={() => navigate('ProductView', { name: 'Jane' })}
                />
              </View>
              <SectionList
                sections={[
                  { title: cat.name, data: ['Apples', 'Bananas', 'Cherries'] },
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({ section }) => <Text style={styles.category}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
              />
            </View>
          ))
          }
          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
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
  category: {
    paddingTop: 2,
    paddingLeft: 3,
    paddingRight: 3,
    paddingBottom: 2,
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
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  categoryImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
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
