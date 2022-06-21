import React from "react";
import { Text, View, FlatList } from "react-native";
import Config from "react-native-config";

import MealsCard from '../../components/MealsCard';
import fetchData from "../../hooks";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

function Meals(props) {
  const { strCategory } = props.route.params;
  const { data, loading, error } = fetchData(Config.API_MEALS_URL + strCategory);

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

  const onPressDetail = (idMeal) => {
    props.navigation.navigate('DetailPage', { idMeal })
  }

  const renderMeals = ({ item }) => <MealsCard meals={item} onSelect={() => onPressDetail(item.idMeal)} />;

  return (
    <View style={{ backgroundColor: 'orange', flex: 1 }}>
      <FlatList
        data={data.meals}
        renderItem={renderMeals}
      />
    </View>
  );
}

export default Meals;