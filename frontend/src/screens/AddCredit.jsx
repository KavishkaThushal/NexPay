import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../constants/colors';
import visa from '../Assets/Visa_Logo.png';
import masterCard from '../Assets/MasterCard.png';
import {RadioButton} from 'react-native-paper';
import Button from '../components/Button';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';

const AddCredit = () => {
  const cardNum = '5242 4242 4242 4242';
  const [cardSelect, setCardSelect] = useState('');

  const navigation = useNavigation();

  const handleNext = () => {
    if(cardSelect === ''){
        Toast.show({
            type: 'error',
            text1: 'Card Not Selected',
            text2: 'Please select a card to continue',
        })
    }else{
        Toast.show({
            type: 'success',
            text1: 'Card Added',
            text2: 'Credit amount added successfully',
        })
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={24} color={COLORS.black} />
      </TouchableOpacity>
      <Text style={styles.register}>Add Credit</Text>

      <View>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={styles.cardContent}>
            {cardNum.charAt(0) === '4' ? (
              <Image source={visa} style={styles.visaLogo} />
            ) : cardNum.charAt(0) === '5' ? (
              <Image source={masterCard} style={styles.masterCardLogo} />
            ) : null}
            <View style={styles.cardText}>
              <Text style={styles.txtNum}>Card ending 4242</Text>
              <Text style={styles.txtExp}>Expiry 09/24</Text>
            </View>
            <View style={styles.radioBtn}>
              <RadioButton
                value="4242"
                status={cardSelect === '4242' ? 'checked' : 'unchecked'}
                onPress={() => setCardSelect('4242')}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addCard} onPress={()=> navigation.navigate('AddCard')}>
        <Icon name="plus" size={12} color={COLORS.white} />
        <Text style={styles.addCardText}>Add Card</Text>
      </TouchableOpacity>

      <Button 
        style={styles.btnnext}
        title="Next" 
        filled 
        onpress={handleNext}
      />
    </View>
  );
};

export default AddCredit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 22,
    marginTop: 22,
  },
  register: {
    marginTop: -28,
    fontSize: 22,
    fontWeight: '500',
    color: COLORS.black,
    alignSelf: 'center',
  },
  cardContainer: {
    width: '100%',
    backgroundColor: COLORS.primary,
    marginTop: 20,
    padding: 10,
    opacity: 0.7,
    borderRadius: 10,
  },
  visaLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  cardText: {
    marginLeft: 10,
  },
  txtNum: {
    color: COLORS.black,
    fontSize: 16,
  },
  txtExp: {
    fontSize: 14,
  },
  radioBtn: {
    position: 'absolute',
    right: 0,
  },
  addCard: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    width: 90,
    padding: 8,
    borderRadius: 30,
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  addCardText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '500',
  },
  btnnext: {
    marginTop: 450,
  }
});
