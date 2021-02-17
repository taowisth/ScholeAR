import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, Dimensions, View,Image } from "react-native";
import { GameLoop } from "react-native-game-engine";
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail,Footer, FooterTab, Text, Content, Card, CardItem } from 'native-base';

export const Quiz = ({ navigation }) => {
  return (
       <Container>
               <Header>
          <Left/>
          <Body>
            <Title>QUIZ</Title>
          </Body>
          <Right>
          <Button hasText transparent  >
              <Text>Sonraki</Text>
            </Button>
            </Right>
        </Header>
<Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>

                  <Text>Matematik</Text>
                  <Text note>1. Soru</Text>
                <Body>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/1ff11ff73598cfaee3f52848e291f24c'}} style={styles.questionImg}/>
                <Text>  
Yukarıda verilen ifadede “x” yerine hangi değer yazılmalıdır?
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
          <Button styles={styles.answerBtn} onPress={() => alert("Doğru Cevap")}><Text>5</Text> 
</Button>
          <Button styles={styles.answerBtn} onPress={() => alert("Yanlış Cevap")}><Text>10</Text>
          
</Button></Card>
          

        </Content>
      </Container>
    );
  }

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  quizAnswers: {
    paddingEnd: 200,
  },
  answer: {
    height: 200
  },
  answerBtn: {
    backgroundColor: "#fff"
  },
  answerDiv: {
    paddingTop: 40
  },
  lectureLogo:{
      height: 200,
  },
  questionImg: {
      marginLeft: 70,
      height: 200, width: 200, flex: 1,
  },
});
export default Quiz;
