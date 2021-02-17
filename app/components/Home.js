import React from 'react';
import { StyleSheet, View,Image } from 'react-native';
import AnimatedScrollView from './AnimatedScrollView';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Item,
  Input,
  Title
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Ionicons, Fontisto } from '@expo/vector-icons';

const Home = () => {
  return (
        <AnimatedScrollView style={styles.container}>
      <Header searchBar rounded span noShadow>
          <Item>
          <Fontisto name="search" size={24} color="black" style={styles.searchIcon}/>
          <Input placeholder="Ara..." />
        </Item>
        
        <Button transparent>
          <Text>Ara</Text>
        </Button>

        
      </Header>

      <Content style={styles.contens}>
              <Grid>
          <Col style={styles.grid1}>
                    <Text style={styles.lectureText} >AR</Text>
                    <Text style={styles.lectureSubText} >119 Konu</Text>
          <Thumbnail square source={{ uri: 'http://scholear.com/app-imgs/iconsa/15.png' }}  style={styles.lectureLogo}  ></Thumbnail>
          </Col>
          <Col style={styles.grid2}>
          
                    <Text style={styles.lectureText} >Mesajlarım</Text>
                    <Text style={styles.lectureSubText} >4 Yeni mesaj</Text>
          <Thumbnail square source={{ uri: 'http://scholear.com/app-imgs/iconsa/17.png' }}  style={styles.lectureLogo}  ></Thumbnail>
          </Col>
        </Grid>

      </Content>
      <Content style={styles.contens}>
              <Grid>
          <Col style={styles.grid3}>
          
                              <Text style={styles.lectureText} >Deniz Uzunoğlu</Text>
                    <Text style={styles.lectureSubText} >7 Paylaşım</Text>
          </Col>
          <Col style={styles.grid4}>
          
          <Text style={styles.lectureText} >Matematik - Quiz Sourları</Text>
                    <Text style={styles.lectureSubText} >10 soru</Text>
          <Thumbnail square source={{ uri: 'http://scholear.com/app-imgs/iconsa/16.png' }}  style={styles.lectureLogo}  ></Thumbnail></Col>
        </Grid>
        <Grid>
        </Grid>
      </Content>
    </AnimatedScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerText: {
    marginLeft:140,
  },
  contens: {
      marginTop: 15,
  },
  grid1: {
     marginLeft: 15,
    marginRight: 15,
     backgroundColor: '#635DB7', 
     height: 200, 
     borderRadius: 25,
    
  },
  grid2: {
    marginRight: 15,
     marginLeft: 15,
    backgroundColor: '#00CE9F',
    height: 200, 
    borderRadius: 25,
  },
  grid3: {
     marginLeft: 15,
    marginRight: 15,
     backgroundColor: '#c073a6', 
     height: 110, 
     borderRadius: 25,
    
  },
  grid4: {
    marginRight: 15,
     marginLeft: 15,
    backgroundColor: '#e57a19',
    height: 230, 
    borderRadius: 25,
  },
  lectureText: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  lectureSubText: {
    fontSize: 10,
    marginTop: 5,
    marginLeft: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  lectureLogo: {
    width: 120,
    height:120,
    marginTop: 10,
    marginLeft: 20,
  },
  searchIcon: {
     marginLeft: 15
  }
});
export default Home;
