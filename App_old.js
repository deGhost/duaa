import React , {useState,useEffect}from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedbackBase, TextInput, Dimensions} from 'react-native'
import {duaaArabic, duaaLogo, prayerTracker,adkarCounter,writeAdkar,loginButton, registerButton, rightArrow, leftArrow} from './assets'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const App = () => {
  const Stack = createNativeStackNavigator();
const { width } = Dimensions.get('window');
const SPACING = 10;
const THUMB_SIZE = 80;
const [images, setImages] = useState(
    [
      {id:'1', image:prayerTracker},
      {id:'2', image:adkarCounter},
      {id:'3', image:writeAdkar},

    ]
  )
  const [indexSelected, setIndexSelected] = useState(0);

  const onSelect = indexSelected => {
    setIndexSelected(indexSelected);
  };

  return (
    <View style={[styles.container, {flexDirection:'column'}]}>
          <View >
          <Image style={styles.logo} source={ duaaLogo}/>
          </View>
          <View style={{ flex: 1 / 2, marginTop: 20 }}>
      <Carousel
        layout='default'
        data={images}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={index => onSelect(index)}
        renderItem={({ item, index }) => (
          <Image
            key={index}
            style={{ width: '100%', height: '100%' }}
            resizeMode='contain'
            source={item.image}
          />
        )}
      />
         </View> 
         <View>
        {/* Carousel Component code remains same */}
        <Pagination
          inactiveDotColor='gray'
          dotColor={'#77916D'}
          activeDotIndex={indexSelected}
          dotsLength={images.length}
          animatedDuration={150}
          inactiveDotScale={1}
        />
      </View>

          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
              name='Login'
              component={Login}
              oprions={{title:'Let us get you logged in!!'}}
              >
          <TouchableOpacity style={styles.loginButton}   onProgress={()=>console.logs('Login is clicked')}>
          <Text style={{textAlign:'center', color:'#354C32'}}>Login</Text>
            </TouchableOpacity>
            </Stack.Screen>

            <Stack.Screen
                          name='Register'
                          component={Register}
                          oprions={{title:'Let us get you regsitered!!'}}
            >
          <TouchableOpacity style={styles.registerButton}  onProgress={()=>console.log('Registered is clicked')}>
            <Text style={{textAlign:'center', color:'#354C32'}}>Register</Text>
            </TouchableOpacity>
            </Stack.Screen>
            </Stack.Navigator>
            </NavigationContainer>            
          </View>
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#C5D5BF',
  },
  buttonsContainer: {
    marginTop:80,
    backgroundColor:'#C5D5BF',
    
  },
  text:{
    alignSelf:'center'
  },
  subText:{
    alignSelf:'center'
  },
  logo:{
    marginTop:40,
    height:180,
    width:180,
    justifyContent:'center',
    alignSelf:'center'
  },
  image:{
    marginTop:40,
    justifyContent:'center',
    alignSelf:'center'
  },
  loginButton:{
    marginTop:32,
    alignSelf:'stretch',
    padding:10,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'#94B487',
    borderRadius:12,
    
  },
  registerButton:{
    marginTop:10,
    alignSelf:'stretch',
    padding:10,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'#D5D5D5',
    borderRadius:12,
    borderColor:'#94B487',
    borderWidth:0.5,
  
  },
  input:{
    marginBottom:10,
    backgroundColor:'white',
    borderRadius:12,
    padding:10
  },
  inputsContainer:{
    margin:10,
    padding:10,
    fontSize:14,

    borderRadius:12,
    color:'#354C32',
  },
  galleryPagination:{
    flexDirection: 'row', justifyContent: 'space-between'
  },

});

export default App
