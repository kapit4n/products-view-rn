import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Image, SectionList, Button } from 'react-native';

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
  products: Product[]

}


const cats = [
  {
    id: 1,
    name: 'Category 1',
    img: "https://evolytics.com/wp-content/uploads/Circle_mark_placeholder_tableau.png",
    products: [
      {
        id: 1,
        name: 'Product 1',
        img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-5_large.png?format=jpg&quality=90&v=1530129458",
        description: "A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted.",
        price: 100,
        quantity: 100
      },
      {
        id: 2,
        name: 'Product 2',
        img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-5_large.png?format=jpg&quality=90&v=1530129458",
        description: "A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted.",
        price: 100,
        quantity: 100
      },
    ]
  },
  {
    id: 2,
    name: 'Category 2',
    img: "https://evolytics.com/wp-content/uploads/Circle_mark_placeholder_tableau.png",
    products: [
      {
        id: 3,
        name: 'Product',
        img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-5_large.png?format=jpg&quality=90&v=1530129458",
        description: "A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted.",
        price: 100,
        quantity: 100
      }
    ]
  },
  {
    id: 3,
    name: 'Category 3',
    img: "https://evolytics.com/wp-content/uploads/Circle_mark_placeholder_tableau.png",
    products: [
      {
        id: 4,
        name: 'Product',
        img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-5_large.png?format=jpg&quality=90&v=1530129458",
        description: "A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted.",
        price: 100,
        quantity: 100
      }
    ]
  }
]

export default function TabOneScreen() {

  const [categories, setCategories] = React.useState(cats)
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.schoolView}>
        {categories.map(cat => (
          <View style={styles.categoryContainer} key={cat.id}>
            <SectionList
              sections={[
                { title: cat.name, data: cat.products },
              ]}
              renderItem={({ item }) =>
                <View style={styles.productContainer}>
                  <Text style={styles.item}>
                    {item.name}
                  </Text>

                  <View style={styles.imageContainer}>
                    <Image source={{ uri: item.img }} style={styles.categoryImage} />
                  </View>
                  <Text>
                    {item.description}
                  </Text>
                  <Button
                    title="Details"
                    onPress={() => {
                      router.push({ pathname: "/productView", params: { id: item.id } });
                    }}
                  />
                </View>
              }
              renderSectionHeader={({ section }) => <Text style={styles.category}>{section.title}</Text>}
            />
          </View>
        ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  schoolView: {
    flex: 1,
    backgroundColor: '#fff',
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
