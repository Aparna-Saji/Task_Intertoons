import { StyleSheet, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { HStack, Box, StatusBar, Center, Text, Stack, ScrollView, Image, VStack, FlatList } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';


const DetailedListing = ({ navigation, route }) => {

    const [like, setLike] = useState(false);
    const [colorChange, setColorChange] = useState('gray');
    const [detailProduct, setDetailProduct] = useState([]);
    const [img, setImg] = useState('');
    const [flatListData, setFlatListData] = useState([])


    const UrlKey = route.params.urlkey;
    console.log("urlkey====", UrlKey);

    useFocusEffect(
        useCallback(() => {
            getDetailedProductData();
            return () => {

            }
        }, [])
    )

    useEffect(() => {
        console.log("detailProduct", detailProduct);
        console.log("variationJson ==>", JSON.stringify(detailProduct?.ProdDetails?.variationJson));
        let arr=(detailProduct?.ProdDetails?.variationJson);
        arr=JSON.stringify(arr)
        console.log('Arr===>', arr);
        setImg(detailProduct?.ProdDetails?.imageUrl)
    }, [detailProduct])

    const handleLike = () => {
        setLike(!like);

        if (like == false) {
            setColorChange('gray')
        } else {
            setColorChange('red')
        }
    }


    const getDetailedProductData = () => {
        axios.get('https://wpr.intertoons.net/kmshoppyapi/api/v2/ProductDetails/', {
            headers: {
                vendorUrlKey: 'kmshoppy',
            },
            params: {
                guestId: "4653631114",
                pincode: 'kmshoppy',
                custId: '',
                urlKey: 'greenchef-lpg-stove-glass-top-crystal-3-burner'
                //urlKey:UrlKey,   
            }
        })
            .then(res => {
                console.log(" getProductDataDetail RESPONSE :  ", res);
                //console.log(" getProductDataDetail RESPONSE :  ", res?.data?.Data);

                setDetailProduct(res?.data?.Data)

            })
            .catch((e) => {
                console.log("getProductDataDetail ERR :  ", e);
            })
    }

    return (

        <Box flex={1} bg='white' >
            <StatusBar backgroundColor='#3b006e' />
            <HStack mt={2} justifyContent='space-between' pt={4} pl={4} pr={1} >
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Home')
                }} >
                    <Icon name='arrow-back' size={28} color='black' />
                </TouchableOpacity>

                <HStack >
                    <Icon name='search' size={28} color='black' />
                    <TouchableOpacity>
                        <HStack ml={8}>
                            <Icon name='shopping-cart' size={28} color='black' />
                            <Box bottom={3} right={3} style={{ height: 17, width: 17 }} borderRadius={50} bg='red.400' alignItems='center' justifyContent='center' >
                                <Text bottom={.5} fontSize={10} fontWeight='bold' color='#fff' >1</Text>
                            </Box>
                        </HStack>
                    </TouchableOpacity>
                </HStack>
            </HStack>

            <ScrollView>

                <Box h={10} w='100%' alignItems='flex-end' pr={9} mt={4} >
                    <TouchableHighlight underlayColor='transparent' onPress={() => handleLike()} >
                        <Icon name='favorite' size={28} color={colorChange} />
                    </TouchableHighlight>
                </Box>



                <HStack left={3} w='100%' justifyContent='center' alignItems='flex-end'>
                    <Box mt={12} style={{ height: 200, width: 200 }} bg='gray.100' borderRadius={6} >
                        <Image alt='productImage' style={{ height: '100%', width: '100%' }} source={{ uri: img ? 'https://wpr.intertoons.net/kmshoppyadmin/' + img : null }} />
                    </Box>
                    <TouchableOpacity>
                        <Box bottom={2} left={6}>
                            <Icon name='open-with' size={28} color='gray' />
                        </Box>
                    </TouchableOpacity>
                </HStack>

                <Stack>
                    <Text pl={6} mt={4} fontWeight='bold' fontSize={18} color='black' >{detailProduct?.ProdDetails?.prName}</Text>
                    <Text pl={6} mt={4} fontSize={16} fontWeight='bold' color='gray' >{detailProduct?.ProdDetails?.prWeight}</Text>
                    <Text pl={6} mt={4} fontSize={16} color='black' fontWeight='bold' >{detailProduct?.ProdDetails?.unitPrice}</Text>
                </Stack>

                <Box py={1} w='100%' px={5} bg='#fcf1f7'>
                    <Text mt={3} fontSize={16} color='black' fontWeight='bold' >Please select a variant.</Text>

                    <Box w='100%' borderWidth={2} borderColor='#3b006e' borderRadius={8} py={1} px={1} >
                        <HStack py={2} justifyContent='space-between' alignItems='center' px={1} >
                            <Stack>
                                <Text fontWeight='bold' fontSize={14} color='black' >PARLE-G BISCUITS 250GM</Text>
                                <HStack>
                                    <Text fontWeight='bold' fontSize={12} color='black' >$ 24.00</Text>
                                    <Text ml={2} fontSize={14} color='gray' textDecorationLine='line-through' >$ 25.00</Text>
                                    <Box h={8} w={20} bg='#3b006e' borderRadius={6} ml={4} justifyContent='center' alignItems='center' >
                                        <Text fontWeight='bold' fontSize={14} color='white' >4 % Off</Text>
                                    </Box>
                                </HStack>
                            </Stack>

                            <Stack h={10} w={100} alignItems='center' justifyContent='center' bg='rose.400' borderRadius={6} >
                                <Text fontWeight='bold' fontSize={14} color='white' >Add</Text>
                            </Stack>
                        </HStack>

                    </Box>

                    <Box mt={4} w='100%' borderWidth={2} borderColor='#3b006e' borderRadius={8} py={1} px={1} >
                        <HStack py={2} justifyContent='space-between' alignItems='center' px={1} >
                            <Stack>
                                <Text fontWeight='bold' fontSize={14} color='black' >PARLE-G BISCUITS 250GM</Text>
                                <HStack>
                                    <Text fontWeight='bold' fontSize={12} color='black' >$ 10.00</Text>
                                </HStack>
                            </Stack>

                            <Stack h={10} w={100} alignItems='center' justifyContent='center' bg='rose.400' borderRadius={6} >
                                <Text fontWeight='bold' fontSize={14} color='white' >Add</Text>
                            </Stack>
                        </HStack>

                    </Box>
                </Box>

                <HStack h={12} w='100%' px={4} mt={4} justifyContent='space-between' alignItems='center'>
                    <Text fontWeight='bold' fontSize={16} color='black' >About Product</Text>
                    <Icon name='expand-less' size={28} color='gray' />
                </HStack>

                <Text mt={4} pl={8} fontWeight='bold' fontSize={14} color='black' >PARLE-G BISCUITS 250GM</Text>
                <Box mt={2} h={6} w='100%' bg='gray.200' />

                <FlatList

                    w='100%'
                    
                    contentContainerStyle={{ paddingRight: 15, paddingLeft: 15, }}

                //    data={[
                //         { id: 1 }, { id: 2 }, { id: 3 },
                //     ]}
                    data={detailProduct}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={<Box w={2} h={4} />}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (

                        <Box >
                            <Box w='100%' borderWidth={2} borderColor='#3b006e' borderRadius={8} py={1} px={1} >
                                <HStack py={2} justifyContent='space-between' alignItems='center' px={1} >
                                    <Stack>
                                        <Text fontWeight='bold' fontSize={14} color='black' >{detailProduct?.ProdDetails?.variationJson}</Text>
                                        <HStack>
                                            <Text fontWeight='bold' fontSize={12} color='black' >$ 24.00</Text>
                                            <Text ml={2} fontSize={14} color='gray' textDecorationLine='line-through' >$ 25.00</Text>
                                            <Box h={8} w={20} bg='#3b006e' borderRadius={6} ml={4} justifyContent='center' alignItems='center' >
                                                <Text fontWeight='bold' fontSize={14} color='white' >4 % Off</Text>
                                            </Box>
                                        </HStack>
                                    </Stack>

                                    <Stack h={10} w={100} alignItems='center' justifyContent='center' bg='rose.400' borderRadius={6} >
                                        <Text fontWeight='bold' fontSize={14} color='white' >Add</Text>
                                    </Stack>
                                </HStack>

                            </Box>
                        </Box>
                    )}
                />

                <Box h={50} w='100%'></Box>
            </ScrollView>
        </Box>
    )
}

export default DetailedListing

const styles = StyleSheet.create({})