import React from 'react'
import { connect } from 'react-redux'
import { FlatList, View, Button, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import Disciplina from '../../components/Disciplina'
import styles from './styles'

let HomeScreen = ({ disciplinas, navigation }) => (
  <View style={styles.container}>
    <FlatList
      data={Object.values(disciplinas)}
      keyExtractor={(item) => item.id}
      style={styles.list}
      renderItem={({ item }) => <Disciplina onClick={(id) => navigation.navigate('Disciplina', { disciplina: item })} {...item} />}
    />

    <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('DisciplinaAdd')}>
      <Icon name="md-add" size={24} color="white" />
    </TouchableOpacity>
  </View>
)

HomeScreen.navigationOptions = {
  title: `Calculadora DeVry`
}

const mapStateToProps = ({ disciplinas }) => ({ disciplinas })

HomeScreen = connect(mapStateToProps)(HomeScreen)

export default HomeScreen