import React, { FC } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '@pages/Home';

const Tabs = createMaterialTopTabNavigator();

const HomeTabs: FC = () => {
  return (
    <Tabs.Navigator
      // 懒加载
      lazy
      tabBarOptions={{
        scrollEnabled: true,
        tabStyle: { width: 80 },
        indicatorStyle: {
          height: 4,
          width: 20,
          marginLeft: 30,
          borderRadius: 2,
          backgroundColor: '#f86442',
        },
        activeTintColor: '#f86442',
        inactiveTintColor: '#333333',
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: '推荐' }}
      />
    </Tabs.Navigator>
  );
};

export default HomeTabs;