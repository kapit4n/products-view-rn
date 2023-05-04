import React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';

import { useSearchParams } from "expo-router";

const cat = {
  id: 1,
  name: 'Category 1',
  img: "https://evolytics.com/wp-content/uploads/Circle_mark_placeholder_tableau.png",
  description: "The ScrollView is a generic scrolling container that can contain multiple components and views. The scrollable items can be heterogeneous, and you can scroll both vertically and horizontally",
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
}

interface Product {
  name: string;
  img: string;
  description: string;
  price: number;
  quantity: number;
}

interface Category {
  id: number;
  name: string;
  img: string;
  description: string;
  products: Product[];
}

export default function CategoryView() {

  const [category, setProduct] = React.useState(cat as Category)

  const { id } = useSearchParams()
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View>
          <Text style={styles.productName}>
            {category.name}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: category.img }} style={styles.productImage} />
        </View>
        <View style={styles.productDetails}>
          <Text>
            {category.description}
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
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
  productDetails: {
    gap: 10
  },
  productName: {
    fontSize: 24
  }
})
