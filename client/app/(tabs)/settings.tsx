import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Switch, Text, TextStyle, View, ViewStyle } from 'react-native';

// 1. Define strict TypeScript Interface for SettingItem Props
interface SettingItemProps {
  // use the Ionicons component prop type for `name` to get correct union of icon names
  icon: React.ComponentProps<typeof Ionicons>['name'];
  name: string;
  color: string;
  rightComponent?: React.ReactNode;
  onPress?: () => void;
}

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [notifications, setNotifications] = useState<boolean>(true);

  // 2. Apply the interface to the component
  const SettingItem = ({ icon, name, color, rightComponent, onPress }: SettingItemProps) => (
    <Pressable style={styles.itemRow} onPress={onPress}>
      <View style={styles.leftContainer}>
        <View style={[styles.iconWrapper, { backgroundColor: color }]}>
          <Ionicons name={icon} size={20} color="#fff" />
        </View>
        <Text style={styles.itemText}>{name}</Text>
      </View>
      {rightComponent ? (
        rightComponent
      ) : (
        <Ionicons name="chevron-forward" size={18} color="#86868b" />
      )}
    </Pressable>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* 👤 Header Profile Card */}
      <BlurView intensity={50} tint="dark" style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>KP</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Krishnendu Sekhar</Text>
          <Text style={styles.profileEmail}>krishnendu@developer.com</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#86868b" />
      </BlurView>

      {/* ⚙️ General Settings Group */}
      <Text style={styles.sectionHeader}>GENERAL</Text>
      <BlurView intensity={40} tint="dark" style={styles.groupCard}>
        <SettingItem 
          icon="moon" 
          name="Dark Mode" 
          color="#5856D6" 
          rightComponent={
            <Switch 
              value={isDarkMode} 
              onValueChange={setIsDarkMode} 
              trackColor={{ false: '#2e2e30', true: '#0071e3' }}
              thumbColor="#fff"
            />
          }
        />
        <View style={styles.separator} />
        <SettingItem 
          icon="notifications" 
          name="Notifications" 
          color="#FF3B30" 
          rightComponent={
            <Switch 
              value={notifications} 
              onValueChange={setNotifications} 
              trackColor={{ false: '#2e2e30', true: '#0071e3' }}
              thumbColor="#fff"
            />
          }
        />
      </BlurView>

      {/* 🔒 Security & Privacy Group */}
      <Text style={styles.sectionHeader}>ACCOUNT & SECURITY</Text>
      <BlurView intensity={40} tint="dark" style={styles.groupCard}>
        <SettingItem icon="lock-closed" name="Privacy & Password" color="#34C759" />
        <View style={styles.separator} />
        <SettingItem icon="wallet" name="Subscriptions" color="#FF9500" />
        <View style={styles.separator} />
        <SettingItem icon="cloud-upload" name="iCloud Storage Backup" color="#0071e3" />
      </BlurView>

      {/* 🚪 Logout Section */}
      <Pressable style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>
      
      <Text style={styles.versionText}>App Version 54.0.0 (TS Stable)</Text>
    </ScrollView>
  );
}

// 3. Separate Specific Types to prevent TypeScript from getting confused
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
  } as ViewStyle,
  contentContainer: {
    padding: 16,
    paddingTop: 60,
  } as ViewStyle,
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  } as ViewStyle,
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0071e3', 
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  avatarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  } as TextStyle,
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  } as ViewStyle,
  profileName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  } as TextStyle,
  profileEmail: {
    color: '#86868b', 
    fontSize: 13,
    marginTop: 2,
  } as TextStyle,
  sectionHeader: {
    color: '#86868b',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
    marginLeft: 8,
    letterSpacing: 0.5,
  } as TextStyle,
  groupCard: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  } as ViewStyle,
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // ✅ FIXED: 'between' was breaking the types, 'space-between' is correct
    padding: 14,
    paddingHorizontal: 16,
  } as ViewStyle,
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  } as ViewStyle,
  iconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  itemText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 14,
    fontWeight: '500',
  } as TextStyle,
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginLeft: 62, 
  } as ViewStyle,
  logoutButton: {
    backgroundColor: '#1D1D1F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 10,
  } as ViewStyle,
  logoutText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
  } as TextStyle,
  versionText: {
    textAlign: 'center',
    color: '#2e2e30',
    fontSize: 12,
    marginTop: 24,
    marginBottom: 40,
  } as TextStyle,
});