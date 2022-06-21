import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="CategoriesPage" component={Categories}
                    options={{
                        title: "Categories",
                        headerStyle: { backgroundColor: 'white' },
                        headerTitleStyle: { color: 'orange' },
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen name="MealsPage" component={Meals}
                    options={{
                        title: "Meals",
                        headerStyle: { backgroundColor: 'white' },
                        headerTitleStyle: { color: 'orange' },
                        headerTitleAlign: 'center',
                        headerTintColor: 'orange',
                    }}
                />
                <Stack.Screen name="DetailPage" component={Detail}
                    options={{
                        title: 'Detail',
                        headerTitleAlign: 'center',
                        headerTitleStyle: { color: 'orange', fontWeight: '600' },
                        headerStyle: { backgroundColor: 'white' },
                        headerTintColor: 'orange',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;