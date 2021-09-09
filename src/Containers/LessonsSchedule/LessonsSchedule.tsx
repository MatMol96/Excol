import FloatingDrawerButton from '@/Components/FloatingDrawerButton'
import Header from '@/Components/Header'
import ItemCard from '@/Components/ItemCard'
import ToTheBottomCard from '@/Components/ToTheBottomCard'
import { useTheme } from '@/Theme'
import { Colors, FontSize, MetricsSizes } from '@/Theme/Variables'
import lessonsSchedule from '@/__mocks__/data/lessonsSchedule'
import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, SafeAreaView, FlatList, Pressable } from 'react-native'
import styles from './styles'
import moment from 'moment'
import LessonCard from '@/Components/LessonCard'
import { Modalize } from 'react-native-modalize'
import Button from '@/Components/Button'
import { navigationConstants } from '@/Constants/navigation'
interface Props {
  navigation: any
}

const LessonsSchedule = ({ navigation }: Props) => {
  const { t } = useTranslation()
  const { Layout } = useTheme()
  const modalizeRef = useRef<Modalize>(null)
  const [lessonSelected, setLessonSelected] = useState({ lesson: null })

  const onOpenModal = () => {
    modalizeRef.current?.open()
  }

  return (
    <SafeAreaView style={{ ...styles.container, ...Layout.fullSize }}>
      <View style={styles.headerContainer}>
        <Header
          title={t('lessonsSchedule.headerTitle')}
          navigation={navigation}
          style={{
            title: { color: Colors.white, fontSize: FontSize.large },
            icon: { color: Colors.white, marginTop: 5 },
          }}
        />
      </View>
      <View style={styles.bodyContainer}>
        <View>
          <Text style={styles.fullDate}>
            {moment().format('dddd D MMMM YYYY')}
          </Text>
        </View>
        <View>
          <Text style={styles.listTitle}>
            {t('lessonsSchedule.todayLesson')}
          </Text>
        </View>
        <FlatList
          data={lessonsSchedule[0].lessons}
          renderItem={({ item }) => (
            <LessonCard
              data={item}
              onPress={onOpenModal}
              setSelected={setLessonSelected}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Modalize ref={modalizeRef} adjustToContentHeight>
        <View style={styles.modalContainer}>
          <Text style={styles.modalLessonTitle}>{lessonSelected?.lesson}</Text>
          <Button
            title={t('lessonCard.joinToLesson')}
            style={{ fontSize: FontSize.medium }}
            pressableStyle={{
              backgroundColor: Colors.success,
              marginTop: 0,
              paddingVertical: MetricsSizes.regular,
            }}
            onPress={() =>
              navigation.navigate(navigationConstants.lessonRemote, {
                ...lessonSelected,
              })
            }
          />
          <Button
            title={t('lessonCard.deleteLesson')}
            style={{ fontSize: FontSize.medium }}
            pressableStyle={{
              backgroundColor: Colors.error,
              paddingVertical: MetricsSizes.regular,
            }}
            onPress={() =>
              navigation.navigate(navigationConstants.lessonDeletion)
            }
          />
        </View>
      </Modalize>
      <FloatingDrawerButton navigation={navigation} color={Colors.white} />
    </SafeAreaView>
  )
}

export default LessonsSchedule
