import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button, Icon, Title, Card, CardItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { AntDesign } from '@expo/vector-icons'; 

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
            
            <Container>
        
        <Header transparent>
          <Left>
            <Button transparent onPress={() => navigation.navigate('Favs')}>
            <AntDesign styles={styles.headerFav} name="hearto" size={24} color="black" />
            </Button>
          </Left>
          <Body>
            <Title transparent>PROFİLİNİZ</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => navigation.navigate('Settings')}>
            <AntDesign name="setting" size={24} color="black" />
            </Button>
          </Right>
        </Header>

        <Content>
          <List style={styles.avatar}>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://instagram.fsaw1-8.fna.fbcdn.net/v/t51.2885-19/s320x320/83462930_392944114862397_3896053087189598208_n.jpg?_nc_ht=instagram.fsaw1-8.fna.fbcdn.net&_nc_ohc=WTVkrV1xJk0AX_NE5WO&tp=1&oh=e3155c2ec58fda77d7588ecd21061d73&oe=604CE828' }} />
              </Left>
              <Body>
                <Text>Merhaba, Abdurrahman</Text>
                <Text note>Senin için çalışmalarını ve sana uygun programları derledik.</Text>
              </Body>
              <Right>                
              </Right>
            </ListItem>
          </List>

                <Grid>
          <Col style={styles.grid1}>
          
                    <Text style={styles.lectureText} >Kimya</Text>
                    <Text style={styles.lectureSubText} >37 AR İçeriği</Text>
                                        <Text style={styles.lectureSubText} >9 Konu Sınavı</Text>

          <Thumbnail square source={{ uri: 'http://scholear.com/app-imgs/iconsa/10.png' }}  style={styles.lectureLogo}  ></Thumbnail>
          </Col>
          <Col style={styles.grid2}></Col>
        </Grid>

        </Content>
        <Content style={styles.listStyle}>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://scholear.com/app-imgs/iconsa/1.png' }} />
              </Left>
              <Body>
                <Text>Atomun Yapısı</Text>
                <Text note numberOfLines={1}>Öğrt. Ali Peker</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => navigation.navigate('Scanner')}>
                  <Text>Aç</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://scholear.com/app-imgs/iconsa/2.png' }} />
              </Left>
              <Body>
                <Text>Maddenin Fiziksel Halleri</Text>
                <Text note numberOfLines={1}>Öğrt. Derya Uzunoğlu</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => navigation.navigate('Scanner')}>
                  <Text>Aç</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://scholear.com/app-imgs/iconsa/3.png' }} />
              </Left>
              <Body>
                <Text>Periyodik Sistem</Text>
                <Text note numberOfLines={1}>Öğrt. Derya Uzunoğlu</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => navigation.navigate('Scanner')}>
                  <Text>Aç</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://scholear.com/app-imgs/iconsa/4.png' }} />
              </Left>
              <Body>
                <Text>Sıvılar</Text>
                <Text note numberOfLines={1}>Öğrt. Furkan Hayat</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => navigation.navigate('Scanner')}>
                  <Text>Aç</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: '' }} />
              </Left>
              <Body>
                <Text></Text>
                <Text note numberOfLines={1}></Text>
              </Body>
              <Right>
                <Button transparent onPress={() => navigation.navigate('Scanner')}>
                  <Text></Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatar: {
    backgroundColor: '#fff',
  },
  avatarTitle: {
        marginTop: 15,
        fontSize: 30,
        fontWeight: "bold",
  },
  lectureText: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  lectureLogo: {
    width: 160,
    height:160,
    marginLeft: 130,
    marginTop: -50,

  },
  grid1: {
     marginLeft: 30,
     backgroundColor: '#635DB7', 
     marginTop: 30,
     height: 180, 
     borderRadius: 25,
     width: 300,
  },
  headerFav: {
    marginLeft: 40,
  },
  lectureSubText: {
    fontSize: 10,
    marginTop: 5,
    marginLeft: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  listStyle: {
    marginTop: 30,
  },
});

export default Profile;
