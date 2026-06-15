import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Tabs } from 'expo-router';
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { Platform } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      {
        Platform.OS === 'ios' ? <>
          <NativeTabs>
            <NativeTabs.Trigger name="index">
              <Label>Home</Label>
              <Icon sf="house.fill" drawable="custom_android_drawable" />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="explore">
              <Icon sf="map" drawable="custom_settings_drawable" />
              <Label>Explore</Label>
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="settings">
              <Icon sf="gear" drawable="custom_settings_drawable" />
              <Label>Settings</Label>
            </NativeTabs.Trigger>
          </NativeTabs>
        </> :
          <>
            <Tabs
              screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarButton: HapticTab,
              }}>
              <Tabs.Screen
                name="index"
                options={{
                  title: 'Home',
                  tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
                }}
              />
              <Tabs.Screen
                name="explore"
                options={{
                  title: 'Explore',
                  tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
                }}
              />
              <Tabs.Screen
                name="settings"
                options={{
                  title: 'Settings',
                  tabBarIcon: ({ color }) => <IconSymbol size={28} name="gear.circle.fill" color={color} />,
                }}
              />
            </Tabs>
          </>
      }

    </>

  );
}
