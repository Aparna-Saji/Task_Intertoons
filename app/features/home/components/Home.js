
import React, { useState, useCallback, useEffect } from 'react';
import { Box, Center, HStack, ScrollView, Button, Text, VStack, Alert, FlatList } from 'native-base';
import { StatusBar, Image, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Header } from '../../common';
import { useFocusEffect } from '@react-navigation/native';







const Home = ({ navigation }) => {

  const [bannerData, setBannerData] = useState([])
  const [productData, setProductData] = useState([])

  useFocusEffect(
    useCallback(() => {
      getBannerData();
      getProductData();
      return () => {

      }
    }, [])
  )

 


  const getBannerData = () => {
    axios.get('https://wpr.intertoons.net/kmshoppyapi/api/v2/Products/HomeProducts')
      .then(res => {
       // console.log(" getBannerData RESPONSE :  ", res);
       // console.log("Banner image : ", res?.data?.Data?.MobileMainBanners[0]?.imageUrl);
        setBannerData(res?.data?.Data?.MobileMainBanners[1]?.imageUrl)
      })
      .catch((e) => {
        console.log("getBannerData ERR :  ", e);
      })
  }

  const getProductData = () => {
    axios.get('https://wpr.intertoons.net/kmshoppyapi/api/v2/FeaturedProduct?custId=%27%27&guestId=%27%27', {
      headers: {
        vendorUrlKey: 'kmshoppy'
      }
    })
      .then(res => {
       // console.log(" getProductData RESPONSE :  ", res);
        console.log("Datas from product data", res?.data?.Data);
        setProductData(res?.data?.Data)
       
        //console.log(" getProductData RESPONSE banner img path :  ", res?.data?.Data);


      })
      .catch((e) => {
        console.log("getProductData ERR :  ", e);
      })
  }

 

  return (
    <Box flex={1} bg='#fff' >
      <StatusBar backgroundColor='#3b006e' />
      <Header />

      <ScrollView>
        <Box w='100%' mt={2} px={2} borderRadius={8}>
          <Image style={{ height: 150, width: '100%', }} source={{ uri: 'https://wpr.intertoons.net/kmshoppyadmin/' + bannerData }} />
          {/* <Image style={{ height: 150, width: '100%', }} source={require('../../../../assets/images/FreeDelivery.png')} /> */}
        </Box>

        <HStack justifyContent='space-between' px={4} mt={5}>
          <Text fontSize={16} fontWeight='bold' >Featured products</Text>
          <HStack alignItems='center' pr={4} >
            <Text fontSize={16} fontWeight='bold' color='#c70483' >See More</Text>
            <Icon name='arrow-forward-ios' color='#c70483' size={12} style={{ left: 10 }} />
          </HStack>
        </HStack>

        <Center mt={6}>
          <FlatList
            w='100%'
            contentContainerStyle={{ paddingRight: 30, paddingLeft: 15, paddingTop:10,paddingBottom:10 }}
            bg='gray.100'

            data={productData}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={<Box w={2} />}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (



              <TouchableOpacity onPress={() => {
                navigation.navigate('DetailedListing',{urlkey:item.urlKey})
              }}>
                <VStack borderWidth={0.5} borderColor='gray.400' py={2} ml={2} mr={2} w={190} borderRadius={8} mt={4} mb={4} bg='white'  >
                  <HStack justifyContent='space-between' pt={2}>
                    <Icon name='favorite' color='red' size={30} style={{ left: 10 }} />
                    <Box h={12} w={12} borderRadius={50} bg='rose.400' left={4} bottom={8} alignItems='center' justifyContent='center' >
                      <Text top={1} color='white' fontSize='12' fontWeight='bold' >3%</Text>
                      <Text bottom={1} color='white' fontSize='12' fontWeight='bold' >Off</Text>
                     
                    </Box>
                  </HStack>


                  <Box w='100%' alignItems='center' justifyContent='center'>
                    <Box style={{height:100, width:100}} alignItems='center' justifyContent='center'  >

                      <Image style={{ height: '100%', width: '100%' }} source={{ uri: 'https://wpr.intertoons.net/kmshoppyadmin/' + item?.imageUrl }} />
                    </Box>
                  </Box>


                  <Box px={2} mt={1}>
                    <Text numberOfLines={2} pr={2} fontWeight='bold'>{item?.prName}</Text>
                    <Text fontWeight='8' color='gray.300' textDecorationLine='line-through'  >{item?.unitPrice}</Text>
                    <Text fontWeight='bold' bottom={1} color='black' fontSize={18} >{item?.specialPrice}</Text>

                    <HStack justifyContent='space-between' alignItems='center'  >
                      <Text fontWeight='bold' color='black' >{item?.prWeight}</Text>
                      <View style={{ height: 40, width: 40, alignItems: 'center', justifyContent: 'center', elevation: 8, backgroundColor: 'white', borderRadius: 6 }}>
                        <Icon name='add' color='red' size={30} style={{ left: 0 }} />
                      </View>
                    </HStack>

                  </Box>

                </VStack>
              </TouchableOpacity>


            )}
          />



          <Box px={5} >
            <HStack mt={4} py={2} w='100%' bg='#fcf1f7' borderRadius={6} alignItems='center' >
              <VStack py={2} w={'65%'} bg='#fcf1f7' alignItems='center' pl={6} >
                <HStack left={2} alignItems='center' justifyContent='center'  >
                  <Box h={8} w={8} borderRadius={50} bg='green.600' />
                  <Text ml={2} pr={8} fontWeight='bold' color='#3b006e' >Get things  delivered to your doorstep</Text>
                </HStack>

                <HStack left={2} mt={2} alignItems='center' justifyContent='center' >
                  <Box h={8} w={8} borderRadius={50} bg='green.600' />
                  <Text ml={2} pr={6} fontWeight='bold' color='#3b006e' >No minimum order value on your purchase</Text>
                </HStack>

                <HStack left={2} mt={2} alignItems='center' justifyContent='center' >
                  <Box h={8} w={8} borderRadius={50} bg='green.600' />
                  <Text ml={2} pr={10} fontWeight='bold' color='#3b006e' >Operational hours:08:00 AM-10:00 PM</Text>
                </HStack>

              </VStack>

              <Box>
                <Image style={{ height: 100, width: 120 }} source={require('../../../../assets/images/Pumpkin.png')} />
              </Box>
            </HStack>
          </Box>



          


        </Center>
        <Box h={50} w='100%' />
      </ScrollView>



    </Box>
  )
}




export default Home

