import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


const Lecture = () => {
  return (
        <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Matematik</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Grid>
          <Col style={{ backgroundColor: '#fff', width: 250 }}></Col>
          <Col style={{ backgroundColor: '#00CE9F', height: 100 }}>
          <Thumbnail square source={{ uri: 'https://i.pinimg.com/originals/dd/37/03/dd3703c08a47b6b6ad238ebd5ea5e303.png' }} ></Thumbnail></Col>
        </Grid>
      </Container>

  );
};

export default Lecture;
