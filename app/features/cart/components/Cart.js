
import React, { useState } from 'react'
import { Box, Center, FlatList, HStack, Image, ScrollView, Stack, Text, VStack } from 'native-base'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const data = [
  {
    id: 1,

  },
  {
    id: 2,

  },
  {
    id: 3,

  },
  {
    id: 4,

  },
]

const Header = ({ navigation }) => {
  return (
    <HStack w='100%' bg='#3b006e' px={4} pt={6} alignItems='center' justifyContent='space-between'>
      <HStack alignItems='center'>
        <TouchableOpacity onPress={() => {
          navigation.navigate('BottomStack')
        }}>
          <Icon name='arrow-back' color='#c70483' size={28} />
        </TouchableOpacity>
        <Text ml={2} fontSize='22' fontWeight='bold' color='white'>Cart(1)</Text>
      </HStack>
      <Text mr={4} fontSize='22' fontWeight='bold' color='white'>Empty Cart</Text>
    </HStack>
  )
}

const Cart = ({ navigation }) => {
  const [value, setValue] = useState(1)

  const addCount = () => {
    let v = value + 1;
    setValue(v)
  }

  const decreaseCount = () => {
    let v = value - 1;
    setValue(v)
  }

  
  return (
    <Box flex={1} bg='white' >
      <Header />

      {/* for first listing box       */}

      <ScrollView>
        <HStack mt={2} alignItems='center' >

          <HStack alignItems='flex-end'>
            <Box ml={2} bg='orange.400' h={10} w={12}>
              <Image alt='img1' style={{ height: '100%', width: '100%' }} source={{ uri: 'data:image/jpeg;base64,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' }} />
            </Box>

            <VStack ml={4}  >
              <Text width={170} fontWeight='bold' fontSize='14' color='black'>HERSHEY'S KISSES MOMENTS 103.2GM</Text>
              <Text fontWeight='bold' fontSize='14' color='black'>1 Pack</Text>
            </VStack>

          </HStack>

          <HStack alignItems='center' h={12} w={130} >
            <HStack h={10} w={70} px={1} alignItems='center' justifyContent='space-around' bg='rose.400' borderRadius={6} >
              <Text fontWeight='bold' fontSize={14} color='white' onPress={() => decreaseCount()} >-</Text>
              <Text fontWeight='bold' fontSize={14} color='white' >{value}</Text>
              <Text fontWeight='bold' fontSize={14} color='white' onPress={() => addCount()} >+</Text>
            </HStack>

            <VStack ml={2} >
              <Text fontWeight='bold' fontSize='12' color='black'>$170.00</Text>
              <Text fontWeight='bold' fontSize='10' color='black' textDecorationLine='line-through'>$175.00</Text>
            </VStack>
          </HStack>

        </HStack>

        <Box py={1} w='100%' borderTopWidth={8} borderBottomWidth={4} borderBottomColor='gray.300' borderTopColor='gray.300' mt={3} alignItem='center' justifyContent='center'>
          <HStack w='100%' justifyContent='space-between' px={4} alignItems='center' >
            <HStack >
              <Box h={10} w={10} borderRadius={50} alignItems='center' justifyContent='center' >
                <Image alt='img3' h={10} w={10} source={require('../../../../assets/images/settings.png')} />
              </Box>

              <Text mt={1} ml={2} fontWeight='bold' fontSize='16' color='black'>Avail Offer/Coupons</Text>

            </HStack>
            <Box h={5} w={5} alignItems='center' justifyContent='center' >
              <Image alt='img2' h={5} w={5} source={{ uri: 'data:image/png;base64,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' }} />
            </Box>

          </HStack>
        </Box>

        <Box mt={2} w='100%' pl={2} >
          <Text fontWeight='bold' fontSize='16' color='black' >You Might Also Like</Text>

        </Box>

        <Center>

          <FlatList

            w='100%'
            bg='gray.100'
            contentContainerStyle={{ paddingRight: 15, paddingLeft: 15, }}


            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={<Box w={2} />}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (



              <TouchableOpacity onPress={() => {
                //navigation.navigate('DetailedListing')
              }}>
                <VStack borderWidth={0.5} borderColor='gray.400' py={2} ml={2} mr={2} w={170} borderRadius={8} mt={4} mb={4} bg='white.200' >
                  <HStack justifyContent='space-between' pt={2}>
                    <Icon name='favorite' color='red' size={30} style={{ left: 10 }} />
                    <Box h={12} w={12} borderRadius={50} bg='rose.400' left={4} bottom={8} alignItems='center' justifyContent='center' >
                      <Text top={1} color='white' fontSize='12' fontWeight='bold' >3%</Text>
                      <Text bottom={1} color='white' fontSize='12' fontWeight='bold' >Off</Text>

                    </Box>
                  </HStack>

                  <Box style={{ height: 70 }} w='100%' px={8} >
                    <Box flex={1} >
                      <Image alt='img1' style={{ height: '100%', width: '100%' }} source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRQWFRYUFhgZHBkeHBwaHBwdFhoZGhgaGhkYHRwcIS4lHB4sHxgZJjsmKy8xNjVDGiU7QDs2Py40NTEBDAwMEA8QHxISHz8sJSw0PTQ4P0A7NDQ6PzY0PzE1MTQxMzY0NDQ1OjU9MTQxNDQ6NDY2NDQ0MT80NDQ0PzQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUDBgcCAQj/xABBEAACAgEDAgQDBQYEAQ0AAAABAgARAwQSITFBBSJRYQZxgQcTMkKRI3KhscHRFDVS8LIlM0Nic4KSorPC0uHx/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAKhEBAAICAQMCBAcBAAAAAAAAAAECAxEhEjFBBFETYZGhFCIycYGxwQX/2gAMAwEAAhEDEQA/AOzREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARKX4l+IsGhxLlzltrOEUKLZmIJA5IA4UmyQOJpmX7YNMDxp89XwWbGoPypjcDpsTm+L7WtOeTptTXquxv5sJungXjOLV4VzYSxQkjzCiCvBBH9rgWkREBERAREQEREBERAREQEREBERAREQEREBERAREQEREDnH23/5enS/v8dc1zsydB+bi+Pr2nDM6NsW7HzNj6T9Ffajo8T+G6k5Qv7Nd6EmqyDypR9Tu2133VPztqMSjAjUASzC+5AH95Az4Ucoa9Pf+Y/rO8/ZFlVvDcQWgVfKrcEebeWPJJvhhzx8uJw/T6ZDic7FuuDXP8J337M9PiTw3S/dAAMm5qN3kPGQk313Aiu1V2iBtkREkIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiJoX2hfHaaNWw4SG1BHJ4IxAjgkd2o2F+p7BgrPtl+JMK6Z9EDuy5ChYD/AKNVdXBP/WO0UPQ36Xw/Pq2ZFQhQFJIIHmJaybP1mXW6l8js7szMxJJJJJJNkknrIuyV2jqhOw+LMqlAq0RXe52r7HPiLC+mTSFqy4y5AP51d2clfcbiCPa/WuEbJL8P1T4nV0ZlZSCCDRBHQgiNo6ofrmJonwB8cprFGLKQudR7U9dwOze36dwN7lliIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgUnxd4x/hNHn1Aosi+UHoXYhUv23MJ+aGzHIz5crM7EkknksxNkn6md1+2b/K8vs+L/jE/On3h9f4mRMbRMbhuI+HV+6+9d2A2byAo4FXXXmayWE8HX5SNpyZCtVRZqr0q+k3/wCEvgAZEXNqt1MAy4wSvlPQs3Xkc0Kriz2GeS1a6+3vKtcU8zM8Na0GmQgGuTLnH4SrLyoP0m1eJfZ7p3UjCXwv2IZmW/RlYmx8iJyrxPDm0+V8OQsGQ0RZr1BHPQggj5yK2i061qfaUTh8xO4Wmq07ad1fGzI6EMrDqCDf9p+hPgrxz/GaPDnIAYgq4HTeppv1q/rPyu2QnqSfmTP0B9hzf8nN/wBvk/4MZ/rNYjS1a6dIiIkrEREBERAREQEREBERAREQEREBERAREQERPkDRftj/AMrz/vYv/UWc9+F/s9xvjw58zltyq+wABdrAFVJuzwQTVenvOsfHPhY1OjyYSaDNjJIFmlyKxA9zVX2uQNHgCIiKKCqAB6BQAB+gExyRN7RSszEeZT1RSvVPM+DBpURVVFVVAoBQFUewA6STgwljQniS9I/BAK36E8k+38onFTFHVSOfuwrktlt02nh4yaVlF8H/APakZlB6yeu8bi+1LHAJ5PuKkGUxxGeN5K/VbJvFOqS1f4j+BtPq2V7OF+dzIq03pY7kevXnntVz9lHh50+n1WBiGOPVONw4DA4sLA124YcdpPlt4DplVcrKKOR9zfvDGiX7cIstFLY7xWJmazH0Xpl64nfePuuInyfZukiIgIiICIiAiIgIiICIiAiIgIiICJ5Y1zMa6lSLDL+sDLMeXKqi2YKPUkAfxlP4/wCPrp8D5EVsrDhVUNyx6WQOFHUn0E5DiOo8Qzg5WbIxY0v5E9lXoo/sST1MiZ0zvkivHl2TVa7Fkx5BjyI+0ru2sG2ktwDR4PHSVEq8/j2i0eNNJp7z5DV/c7WG/cPxNdA2KoWRxY7yzQmhYo0LF3R9L7y1Z2xyTuR2ABJ6CQX1ZJOx0I8pXnswIBPsXK17GTnQEEEWDIK6IjouOrBFg8bQoUcdgFHHsJMqxofxFm5ZkJIVVJJ/EVXbY9PxNx1BHuZIxatGoA8np78A2D3FH69ZjOnNg7cXG31u1Whz7WR8jPen0qrtOxAw7rdcWBV+xPHa4iNdiZieZSJeeCfgP7x/kJRy78E/Af3v6CJ7LYv1LOIiVdRERAREQEREBERAREQEREBERAREx5Ran5GBXavUFuBwv8/n7e0rn4JHr/syQ7C+O0+OgP0/3/aRa2kxG0fuJWeN+FY8iZl82M5VCs6UHIsWLI6EDafUEiS/vtvuT0EObonrIraLcQTX3aH8PeDjDr2x7doQMy3zahfIb9TwT9RN9mLHp1DnIVt9hQH0UsrfzFf94zLNK104716Z017GusQtSM9uTbOhbYMq0vmcAXjLmxXIA6UJ6zNripQKASNu9Sg5ZMgLgF7G1xjI46MRzUucurRTTOinpywB/wDqRV0uaqOTm+vN1u+dDj25vt1ldeIk6onwiffa3n9mopSB5kosBjIN7yQCfvRX7vceb6ubWkt+zUcMRyhG6sZA4e6s5R2vapJEkf4XPR/ac8119Gr0o2V59ukl6TG6ht7bvN5f3dq/+7cfqOT1jpn3JtHs+6MuUG8U/Njy+pr8JI6VNg8E/C3739BKWWGg1W1CBVlr56AUP6ybzFa7mVsXNuF0zACyaE848wbof7/oZTeJasttWqX8RPNHqAOnzP1E+6TNTr7nb9Dx1s3zU5Z9RHXFY7O2Kfl2vYmDU5wgs/QdyZWnxJrvjjqK7dx6/Wa3y1rOplWKzPZdRPGNwQCOhAI+s9zRUiIgIiICIiAiIgIiICRdbkKrwL5/hJUw6jHuVh6jj59v4wKFSbJI/SQPF9RlONhiA32vejt3DcAa4Nexljz0PBmHJjmWWnVWY2tWVfpMb8bqLULJ78deOB9BJeRq6ipJyUoEjajUiu3MnFj6I0WnbwnM9TJpMJCPkI8u0gdbs8eUDr6fWRBqFby0/Ng2h2+hskVU2ifDmzRzCF4p4YHLPvKEqEY9V2XZFWObrk2OOhBIOHR6xtipfnDFL9l7+/Q/QTE2QOgKNu8wWr8u0Cww+o7cVfHEinFkQg49jcEeaxzwCwrvdmcObPEX6e3utX01skRGPmed/KF9jUoL3Wp/1GjfsQOb6V/GetJqt6FmAUhmWrsimIUGvzEUa7XUp28VyFdr48R47uSCRXNbPWjMLZXADO21KoBTdDvY2jtd0Zb8VjrERVtP/Pz1p+nc/uvsWq3OAqsVIY7vygAgD5k8n5CSS9C/9j3+XrzNf03iyrlGP7wMi+XdSqpcg0gN8/hNAAkm+e0sfFc20Dn5cGwegIrk+4ozT1UT8Hn5McVZpeN+zNi1RLspJoV1vg815uD69b6yYcoDYyTQ3J1PYMLPXn5zV/h/NtDMa5Ymlu1FDavZen0u5ctrFbmzQrtdHsSAT6da/rXlcxaJ9nZFtwsddrCzE8ccAHsOwYA9D61/KVGfWM2THiSycjba5I20d5Nd1HPY9OtTHm1oHlChtwIUXwKon2IA6dDyPnJfwlpk+/fM7DdtCIGrfZ/EeeSaodT1PrN6bveLWlWZ41DdUUAADgAUPkJknyfZ6jIiIgIiICIiAiIgIiICInwmBVeLnDjRsmRxjArzH16VQ6k+g5lDoPF8WexjazfQggn3APUSd8VKMuNQmx2DWCaYLYPIBO3eegJBIBaprfhud9O6s2N8gAPFtwSK3C7Fgbh9ZzX9RFbdMzwmK3meI4XutNLue1Hy9JTvrd5VUFtXJ/KnPf1NTN4/8RYs+L9nuVxYKOKO0iyQRYP4Rxfea1i8RVQqI3LKCT3O6/7Tlz5rzf8AJPDopSIruzZ31YRALvb7/ib0+ZMg4PGAGJOJVUVuK9VUkCzwLFmU/iniSA+U+RQFX3ardj68km/Sh6SJofF1ZD925O7cuRWVSD/po9aIPapOGb03zx5Y/Cn1N+infU62wDTviyMgYjax6HqVsA/Ou/vLNBW1Pv3Q0o2+Uj9Svv6yuZrvcTddTfbvf0kjTsfvFZgrq1GyLI8o9uKI4694zZPiTNpevlxTWmOKRqZ5nfDLkxPZ/av37J6/KNXpT9yxbNmPHTcqjrX5VBnltQLPpbf+UWf5xqdSyqhKAoL3K3ckNQPyHP6TGImbREf02rWkxuOf5+qN4ZrGwDepQqGFoxBdiEYKQKLbVvrx+LryZeeJZ2yLibehJQkhT5Q98Dr0HIPfiQ/hjNhso+JLrhym71vcxur7Cu1WZ61GoBfJxQB4FVQ/KK+Qnb6vNEY4r3nz/DwfXWiuTWtT/ir0XiVAo3Szd9LHH1PX9eOsuvCdUGIYqjKtbiB5j0IHHqL57V61KfVaRsmQKpxY8SC6bcC7sbNbFNccW1de8sPA9OTpywRhtyOGH5uoCtx1UgUCL6e4nDbfR1VZ4tWmOWfU5FB3URfFgHews8Ejkjp+gPXmeFeqIv1oHkEfy6i4z7uqkdq616iyBYmNQeC+3d6WPQjrXy7Tl3M8y6ta7Nk8M+Isikb2LCxuBINDuQeTddj1m74MyuoZTYIsH2nKULClCgknkA+/avxEkHidJ8B05TAimgRdgdBZLbfpdT0fRZLzMxPMM7xCziInpMyIiAiIgIiICIiAnhjQvn9L/gJ7iBV67SrkUjYCCedwIv3A637zUtT4M+PcEbKVPo1uh7Om4W1f6LojirojoEx5cQYUZlfDFu61bachzf4hs6JqsS5cTUA+Pymif+cVjZFc2rc9uD1+ZfhfEtN99lYijztC0GsKRts8cEg9+J0XWaYrYItTYPvf9ZpPiml1KkjGu/dag2BQPdgxHb0/hPNz1yVtEV4h3enil4mLT9VJ8NfDTZEy5NStorFEBvz7Sd70DyCel+nym9eBtgXGcWxURDt/CBjJoGrqiaPefMp8uPDjVmIVQF53dOrH+ZM2LSeGbMaoCL/MauyeSRNMdb5JmY7fZjbppxDj3x/qk02pVdNkVgy2yDayo18AHqLUg7b4+RE1IePZhdFRfoDx9Lrmd3132f8Ah+UU2CmLFi6swyEnrbXZHseJVv8AZL4eeh1C/LIP6qZ3VxViOYYZM2W3E2mY+cuRafxnUOVRCtsaACjkmrsntwP0m3Y0ZECu7O3vwPoAOB7mzNz0f2XaLG25X1N0Ry6Hg9fySzzfAuhet2NzQAIGXKob3YK4BMyyYJtxXUf2y3k1qJ1H7uZ6HT4DlDsSWQN+DnaSpAvzAA8+/wAjJeozrkZgCyVtKdH83JKswq1+n6zcNP8ABeI5sqqhw4F2hAnBc15jZJPXiz14rpNS8e0LafV5MYVtjEHH1JIIFbT3INj6Tky4r634jj5ue9bd5RMGUlirHzA9Ogm6eB5MSqpRmJ5VwR+Y9CR02kWB8ueZKx/BmPJiUZVOLMCbdCCWF8WDYIogevEsvBvhdNO28ZczmiCG2bSD2IC2f17TXDgvWYmY4Xx0tWdor+D4XshWQnuhoc+zAgevFTC/w1hb8TZD9QD8rrp3lwfDMiE/dsrKfyuKI9gy9R8xfvPf+FzemP8A8bf/AAm8+mxzO9OnqlE0nh+PFyiAH/UeW6VwT+Hj0qXelWlEi4NAbt23eigUo+fdj8+PaWE2pSKRqIRM7fYiJdBERAREQEREBERAREQEREDwVB4MiZvDMTdV/Qkfyk2JExE90xMwh6Pw3FivYoUnqep/UyZERERHEEzt9iIkoIiICYM2BGrcqttIYbgDTDoRfQ+8zxAREQEREBERAREQEREBERAREQEREBERAREQPk+xEBERAREQEREBERAREQEREBERAREQEREBERA//9k=' }} />
                      {/* <Image style={{height:'100%', width:'100%'}} source={{uri:'https://wpr.intertoons.net/kmshoppyadmin/secure/default/'+item?.imageUrl}} /> */}
                    </Box>
                  </Box>

                  <Box px={2} mt={1}>
                    <Text pr={2} fontWeight='bold'>PRODUCT NAME</Text>
                    <Text fontWeight='8' color='gray.300' textDecorationLine='line-through'  >$ 175.00</Text>
                    <Text fontWeight='bold' bottom={1} color='black' fontSize={18} >$ 170.00</Text>

                    <HStack justifyContent='space-between' alignItems='center'  >
                      <Text fontWeight='bold' color='black' >1 Pack</Text>
                      <View style={{ height: 40, width: 40, alignItems: 'center', justifyContent: 'center', elevation: 8, backgroundColor: 'white', borderRadius: 6 }}>
                        <Icon name='add' color='red' size={30} style={{ left: 0 }} />
                      </View>
                    </HStack>

                  </Box>

                </VStack>
              </TouchableOpacity>


            )}
          />
        </Center>

        <Box ml={2} px={2}>
          <Text fontWeight='bold' color='black' fontSize='16' >Bill Details</Text>
          <HStack justifyContent='space-between' mt={2}>
            <Text fontWeight='bold' color='gray' fontSize='14' >Item Total</Text>
            <Text fontWeight='bold' color='gray' fontSize='14'>$175.00</Text>
          </HStack>
          <HStack justifyContent='space-between' mt={2}>
            <Text fontWeight='bold' color='gray' fontSize='14' >Product Discount</Text>
            <Text fontWeight='bold' color='gray' fontSize='14'>$5.00</Text>
          </HStack>

          <Box h={10} w='100%' borderTopWidth='2' borderBottomWidth='2' borderBottomColor='gray.300' borderTopColor='gray.300'>
            <HStack justifyContent='space-between' mt={2}>
              <Text fontWeight='bold' color='gray' fontSize='16' >Sub Total</Text>
              <Text fontWeight='bold' color='gray' fontSize='16'>$170.00</Text>
            </HStack>

          </Box>
        </Box>

        <Box py={2} px={4} w='100%' mt={2} >
          <Box bg='rose.400' borderRadius='10' alignItems='center' justifyContent='center' >
            <Text fontWeight='bold' color='white' fontSize='20' >SELECT DELIVERY OPTIONS</Text>
          </Box>
        </Box>

        <Box h={10} w='100%'>
        </Box>
      </ScrollView>
    </Box>
  )
}

export default Cart

