import React, { useState } from 'react'
import { View } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Drawer } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Theme'
import { Colors } from '@/Theme/Variables'
import { navigationConstants } from '@/Constants/navigation'

interface Props {
  navigation: any
}

const DrawerContent = (props: Props) => {
  const { t } = useTranslation()
  const { Layout } = useTheme()
  const [isSignedIn, setIsSignedIn] = useState(true)
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.content}>
          <View style={{ ...Layout.rowVCenter, ...styles.logoSection }}>
            <Avatar.Image
              source={require('@/Assets/Images/avatar-logo-w-padding.png')}
              size={100}
              style={{ backgroundColor: Colors.primary }}
            />
          </View>
          <Drawer.Section style={styles.section}>
            <DrawerItem
              labelStyle={styles.drawerItemLabel}
              label={t('drawer.services')}
              onPress={() => {
                props.navigation.navigate(navigationConstants.service)
              }}
            />
            <DrawerItem
              labelStyle={styles.drawerItemLabel}
              label={t('drawer.contacts')}
              onPress={() => {
                props.navigation.navigate(navigationConstants.contacts)
              }}
            />
          </Drawer.Section>
          <Drawer.Section
            style={styles.section}
            title={t('drawer.privateArea')}
          >
            {isSignedIn ? (
              <>
                <DrawerItem
                  labelStyle={styles.drawerItemLabel}
                  label={t('drawer.student')}
                  onPress={() => {
                    props.navigation.navigate(
                      navigationConstants.studentStackNavigator,
                    )
                  }}
                />
                <DrawerItem
                  labelStyle={styles.drawerItemLabel}
                  label={t('drawer.support')}
                  onPress={() => {
                    props.navigation.navigate(
                      navigationConstants.supportStackNavigator,
                    )
                  }}
                />
                <DrawerItem
                  labelStyle={styles.drawerItemLabel}
                  label={t('drawer.account')}
                  onPress={() => {
                    props.navigation.navigate(navigationConstants.account)
                  }}
                />
              </>
            ) : (
              <DrawerItem
                labelStyle={styles.drawerItemLabel}
                label={t('drawer.signIn')}
                onPress={() => {
                  props.navigation.navigate(navigationConstants.signIn)
                }}
              />
            )}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      {isSignedIn && (
        <Drawer.Section style={styles.bottomSection}>
          <DrawerItem
            labelStyle={styles.drawerItemLabel}
            icon={({ focused, color, size }) => (
              <Icon name="exit-to-app" color={Colors.white} size={size} />
            )}
            label={t('drawer.signOut')}
            onPress={() => {
              console.warn('Sign Out')
            }}
          />
        </Drawer.Section>
      )}
    </View>
  )
}

export default DrawerContent
