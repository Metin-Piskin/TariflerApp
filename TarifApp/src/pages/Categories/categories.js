import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import Config from 'react-native-config';

import CategoriesCard from '../../components/CategoriesCard';
import fetchData from "../../hooks";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Categories = (props) => {
  const { data, loading, error } = fetchData(Config.API_CATEGORY);

  function onPressCategories(strCategory) {
    props.navigation.navigate('MealsPage', { strCategory })
  }


  if (loading) {
    return <Loading />;
  };

  if (error) {
    return (
      <View style={{ flex: 1 }}>
        <Error />
        <Text>{error}</Text>
      </View>
    );
  }


  const renderCategorie = ({ item }) => <CategoriesCard category={item} onSelect={() => onPressCategories(item.strCategory)} />;

  return (
    <View style={{ backgroundColor: 'orange', flex: 1 }}>
      <FlatList
        data={data.categories}
        renderItem={renderCategorie}
      />
    </View>
  );
}

export default Categories;