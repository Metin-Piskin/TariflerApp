import React from "react";
import { Text, View, FlatList } from "react-native";
import Config from "react-native-config";

import DetailCard from "../../components/DetailCard";
import fetchData from "../../hooks";
import Loading from '../../components/Loading';
import Error from "../../components/Error";

function Detail(props) {
  const { idMeal } = props.route.params;
  const { data, loading, error } = fetchData(Config.API_DETAIL_URL + idMeal );


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

  const renderDetail = ({ item }) => <DetailCard meals={item} />;

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data.meals}
        renderItem={renderDetail}
      />
    </View>
  );
}

export default Detail;