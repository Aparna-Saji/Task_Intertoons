import React from 'react';
import { Box, Text, Button, Input, HStack } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {  StyleSheet, TouchableOpacity } from 'react-native';



const Header = () => {
    return (
  
      <LinearGradient colors={['#3b006e', '#7034c9', '#7034c9']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.linearGradient}>
        <Box pt={6} pb={1} w='100%'  >
          <HStack h={50} px={0} w='100%' alignItems='center' justifyContent='space-between' >
            <Box flexDirection='row' >
              <Icon name='location-on' color='red' size={18} style={{ top: 5 }} />
              <Text ml={4} mr={4} color='white' >Choose Location</Text>
              <Icon name='expand-more' color='red' size={22} style={{ top: 5 }} />
            </Box>
            <TouchableOpacity>
            <Icon name='favorite' color='white' size={18} style={{ top: 5, right:10 }} />
            </TouchableOpacity>
  
  
          </HStack>
          <Input
            //w='100%'
            bg='white'
            backgroundColor='white'
            placeholderTextColor='black'
            fontSize={14}
            borderRadius={8}
            borderWidth={0}
            placeholder='Search for over 5000 products'
            InputLeftElement={ <Icon name='search' color='gray' size={20} style={{marginLeft:15, left:5}} /> }
            
          />
        </Box>
      </LinearGradient>
  
  
    )
  }

  var styles = StyleSheet.create({
    linearGradient: {
      //paddingVertical:10,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
  })

  export default Header;