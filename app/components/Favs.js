import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import AnimatedScrollView from './AnimatedScrollView';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title  } from 'native-base';
import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 

const Favs = () => {
  return (

<AnimatedScrollView style={styles.container}>
                
               <Header>
          <Left/>
          <Body>
            <Title>Favorilerim</Title>
          </Body>
          <Right>
            </Right>
        </Header>

        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.pinimg.com/originals/12/95/85/1295853ea2e3724a42ef18d4b54d9e44.png'}} />
                <Body>
                  <Text>Derya Uzunoğlu</Text>
                  <Text note>Yanardağı Modeli</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.blippar.com/uploads/images/_pageHeaderSecondaryL/AR-in-education-_-Blippar.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent><AntDesign name="heart" size={24} color="black" />
                  <Text>12 kişi beğendi</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent><EvilIcons name="comment" size={24} color="black" />
                  <Text>4 yorum</Text>
                </Button>
              </Body>
              <Right>
                <Text>11s önce</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://pickaface.net/gallery/avatar/14154226_161019_0048_ykk23.png'}} />
                <Body>
                  <Text>Ali Peker</Text>
                  <Text note>Kalp Model</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://www.sdmesa.edu/_resources/images/ldp-gallery/.private_ldp/a596/production/master/a9fc53bf-1724-4d3b-a70a-0169f40c611c.JPG'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent><AntDesign name="heart" size={24} color="black" />
                  <Text>108 kişi beğendi</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent><EvilIcons name="comment" size={24} color="black" />
                  <Text>16 yorum</Text>
                </Button>
              </Body>
              <Right>
                <Text>1g önce</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>

    </AnimatedScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Favs;
