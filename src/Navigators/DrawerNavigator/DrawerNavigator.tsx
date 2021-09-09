import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Contacts from '@/Containers/Contacts'
import PrivateArea from '@/Containers/PrivateArea'
import Services from '@/Containers/Services'
import DrawerContent from './DrawerContent'
import { navigationConstants } from '@/Constants/navigation'
import Account from '@/Containers/Account'
import StudentStackNavigator from '../StudentStackNavigator'
import SupportStackNavigator from '../SupportStackNavigator'

const Drawer = createDrawerNavigator()

// @refresh reset
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name={navigationConstants.service} component={Services} />
      <Drawer.Screen name={navigationConstants.contacts} component={Contacts} />
      <Drawer.Screen
        name={navigationConstants.signIn}
        component={PrivateArea}
      />
      <Drawer.Screen
        name={navigationConstants.studentStackNavigator}
        component={StudentStackNavigator}
      />
      <Drawer.Screen
        name={navigationConstants.supportStackNavigator}
        component={SupportStackNavigator}
      />
      <Drawer.Screen name={navigationConstants.account} component={Account} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
