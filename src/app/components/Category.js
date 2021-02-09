/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, Card, CardItem, Text, Body} from 'native-base';

//icon
import FruitsAndVegetables from '../assets/fruit_fruits_vegetable_vegetables_healthy.svg';
import Protein from '../assets/protein.svg';
import Loaf from '../assets/loaf.svg';

export default class CardHeaderFooterExample extends Component {
  render() {
    return (
      <Container style={{paddingTop: 10}}>
        <Content>
          <Card>
            <CardItem header>
              <Text style={styles.headerTitle}>Shop By Category</Text>
            </CardItem>
            <CardItem style={{}}>
              <CardItem
                bordered
                style={{
                  width: 108,
                  height: 104,
                  borderColor: 'gray',
                  borderWidth: 0.25,
                  borderRadius: 5,
                  paddingLeft: 20,
                  //   backgroundColor: 'green',
                  marginRight: 20,
                }}>
                <TouchableOpacity>
                  <Body
                    style={{
                      // backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}>
                    <FruitsAndVegetables />
                    <Text style={styles.title}>fruits & vegetables</Text>
                  </Body>
                </TouchableOpacity>
              </CardItem>
              <CardItem
                bordered
                style={{
                  width: 108,
                  height: 104,
                  borderColor: 'gray',
                  borderWidth: 0.25,
                  borderRadius: 5,
                  marginRight: 20,
                }}>
                <TouchableOpacity>
                  <Body
                    style={{
                      // backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}>
                    <FruitsAndVegetables />
                    <Text style={styles.title}>Cleaning & household</Text>
                  </Body>
                </TouchableOpacity>
              </CardItem>
              <CardItem
                bordered
                style={{
                  width: 108,
                  height: 104,
                  borderColor: 'gray',
                  borderWidth: 0.25,
                  borderRadius: 5,
                  marginRight: 20,
                }}>
                <TouchableOpacity>
                  <Body
                    style={{
                      // backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}>
                    <FruitsAndVegetables />
                    <Text style={styles.title}>foodgrain,oil & masala</Text>
                  </Body>
                </TouchableOpacity>
              </CardItem>
            </CardItem>
            <CardItem>
              <CardItem
                bordered
                style={{
                  width: 108,
                  height: 104,
                  borderColor: 'gray',
                  borderWidth: 0.25,
                  borderRadius: 5,
                  marginRight: 20,
                }}>
                <TouchableOpacity>
                  <Body
                    style={{
                      // backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}>
                    <Loaf
                      style={{
                        //   backgroundColor: 'red',
                        width: 56,
                        height: 52,
                        marginBottom: 5,
                      }}
                    />
                    <Text style={styles.title}>Bakery, Cake & Dairy</Text>
                  </Body>
                </TouchableOpacity>
              </CardItem>
              <CardItem
                bordered
                style={{
                  width: 108,
                  height: 104,
                  borderColor: 'gray',
                  borderWidth: 0.25,
                  borderRadius: 5,
                  marginRight: 20,
                }}>
                <TouchableOpacity>
                  <Body
                    style={{
                      // backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}>
                    <Protein />
                    <Text style={styles.title}>Eggs,Meat & Fish</Text>
                  </Body>
                </TouchableOpacity>
              </CardItem>
              <CardItem
                bordered
                style={{
                  width: 108,
                  height: 104,
                  borderColor: 'gray',
                  borderWidth: 0.25,
                  borderRadius: 5,
                  marginRight: 20,
                }}>
                <TouchableOpacity>
                  <Body
                    style={{
                      // backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}>
                    <FruitsAndVegetables />
                    <Text style={styles.title}>foodgrain,oil & masala</Text>
                  </Body>
                </TouchableOpacity>
              </CardItem>
            </CardItem>
            <CardItem>
              <CardItem
                bordered
                style={{
                  width: 108,
                  height: 104,
                  borderColor: 'gray',
                  borderWidth: 0.25,
                  borderRadius: 5,
                  marginRight: 20,
                }}>
                <TouchableOpacity>
                  <Body
                    style={{
                      // backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}>
                    <FruitsAndVegetables />
                    <Text style={styles.title}>fruits & vegetables</Text>
                  </Body>
                </TouchableOpacity>
              </CardItem>
              <CardItem
                bordered
                style={{
                  width: 108,
                  height: 104,
                  borderColor: 'gray',
                  borderWidth: 0.25,
                  borderRadius: 5,
                  marginRight: 20,
                }}>
                <TouchableOpacity>
                  <Body
                    style={{
                      // backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}>
                    <FruitsAndVegetables />
                    <Text style={styles.title}>Cleaning & household</Text>
                  </Body>
                </TouchableOpacity>
              </CardItem>
              <CardItem
                bordered
                style={{
                  width: 108,
                  height: 104,
                  borderColor: 'gray',
                  borderWidth: 0.25,
                  borderRadius: 5,
                  marginRight: 20,
                }}>
                <TouchableOpacity>
                  <Body
                    style={{
                      // backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}>
                    <FruitsAndVegetables />
                    <Text style={styles.title}>foodgrain,oil & masala</Text>
                  </Body>
                </TouchableOpacity>
              </CardItem>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: 'UniNeueBlack',
    fontSize: 18,
  },
  title: {
    justifyContent: 'center',
    fontFamily: 'UniNeueRegular',
    fontSize: 8,
    alignItems: 'center',
    // backgroundColor: 'red',
    alignContent: 'center',
  },
});
