import React from 'react';
import { StyleSheet, Image, Button, ScrollView } from 'react-native';

import { Text, View } from '../../components/Themed';
import { useRouter } from "expo-router";

interface Product {
  id: string,
  name: string;
  img: string;
  description: string;
  price: number;
  quantity: number;
}

interface Category {
  id: number,
  name: string;
  img: string;
  products: Product[];
  description: string;
}


const cats = [
  {
    id: 1,
    name: 'Category 1',
    img: "https://evolytics.com/wp-content/uploads/Circle_mark_placeholder_tableau.png",
    description: "Description 1",
    products: [
     
    ]
  },
  {
    id: 2,
    name: 'Category 2',
    img: "https://evolytics.com/wp-content/uploads/Circle_mark_placeholder_tableau.png",
    description: "Description 2",
    products: [
     
    ]
  },
  {
    id: 3,
    name: 'Category 3',
    img: "https://evolytics.com/wp-content/uploads/Circle_mark_placeholder_tableau.png",
    description: "Description 3",
    products: [
    
    ]
  }
]

export default function TabTwoScreen() {

  const [categories, setCategories] = React.useState<Category[]>(cats)
  const router = useRouter();


  return (
    <View  style={styles.container}>
    <ScrollView style={styles.scrollView}>
      { categories.map((category) => {
        return (
          <View style={styles.productContainer}>
            <Text style={styles.item}>
              {category.name}
            </Text>

            <View style={styles.imageContainer}>
              <Image source={{ uri: category.img }} style={styles.categoryImage} />
            </View>
            <Text>
              {category.description}
            </Text>
            <Button
              title="Details"
              onPress={() => {
                router.push({ pathname: "/categoryView", params: { id: category.id } });
              }}
              />
          </View>
        )
      })
    }
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  scrollView: {
    gap: 20,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  category: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    fontSize: 18,
  },
  categoryContainer: {
    gap: 20,
    padding: 10
  },
  categoryImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 3
  },
  imageContainer: {
    alignItems: 'center',
  },
  productContainer: {
    gap: 10
  }
});
