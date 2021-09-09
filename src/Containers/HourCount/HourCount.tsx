import FloatingDrawerButton from '@/Components/FloatingDrawerButton'
import Header from '@/Components/Header'
import ItemCard from '@/Components/ItemCard'
import ToTheBottomCard from '@/Components/ToTheBottomCard'
import { navigationConstants } from '@/Constants/navigation'
import { useTheme } from '@/Theme'
import { Colors, FontSize } from '@/Theme/Variables'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, SafeAreaView, Pressable } from 'react-native'
import styles from './styles'

interface Props {
  navigation: any
}

const HourCount = ({ navigation }: Props) => {
  const { t } = useTranslation()
  const { Layout } = useTheme()
  return (
    <SafeAreaView style={{ ...styles.container, ...Layout.fullSize }}>
      <View style={styles.headerContainer}>
        <Header
          title={t('hourCount.headerTitle')}
          navigation={navigation}
          style={{
            title: { color: Colors.white, fontSize: FontSize.large },
            icon: { color: Colors.white, marginTop: 5 },
          }}
        />
      </View>
      <ToTheBottomCard>
        <>
          <Pressable
            onPress={() =>
              navigation.navigate(navigationConstants.activePackage)
            }
          >
            <ItemCard
              title={t('hourCount.activePackages')}
              backgroundColor="#db504a"
            />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate(navigationConstants.warningNote)}
          >
            <ItemCard
              title={t('hourCount.warningNote')}
              backgroundColor="#db504a"
            />
          </Pressable>
        </>
      </ToTheBottomCard>
      <FloatingDrawerButton navigation={navigation} color={Colors.white} />
    </SafeAreaView>
  )
}

export default HourCount
