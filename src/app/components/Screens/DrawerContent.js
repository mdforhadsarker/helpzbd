/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import LocationIcon from '../../assets/placeholder.svg';

export function DrawerContent() {
  return (
    <View style={styles.drawerContent}>
      <View style={styles.items}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{paddingTop: 4}}>
            <LocationIcon width={22} height={22} />
          </View>
          <Text style={{color: 'white', fontSize: 12}}>
            House No: 41/4 Hazi Afser Uddin Lane, 1st Floor Hazaribag Road,
            Zigatola, Dhanmondi
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
          }}>
          <View
            style={{
              marginBottom: 20,
              marginRight: 20,
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              paddingBottom: 15,
              marginTop: 15,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 12,
                  color: 'white',
                }}>
                Grocery & Staples
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginBottom: 20,
              marginRight: 20,
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              paddingBottom: 15,
              marginTop: 15,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 12,
                  color: 'white',
                }}>
                {' '}
                Vegetables & Fruits
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginBottom: 20,
              marginRight: 20,
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              paddingBottom: 15,
              marginTop: 15,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 12,
                  color: 'white',
                }}>
                {' '}
                Household Items
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginBottom: 20,
              marginRight: 20,
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              paddingBottom: 15,
              marginTop: 15,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 12,
                  color: 'white',
                }}>
                {' '}
                Biacuits, Snacks & Chocolates
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginBottom: 20,
              marginRight: 20,
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              paddingBottom: 15,
              marginTop: 15,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 12,
                  color: 'white',
                }}>
                {' '}
                Beverages
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginBottom: 20,
              marginRight: 20,
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              paddingBottom: 15,
              marginTop: 15,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 12,
                  color: 'white',
                }}>
                {' '}
                Fresh & Frozen Food
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginBottom: 20,
              marginRight: 20,
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              paddingBottom: 15,
              marginTop: 15,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 12,
                  color: 'white',
                }}>
                {' '}
                Baby Care
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginBottom: 20,
              marginRight: 20,
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              paddingBottom: 15,
              marginTop: 15,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 12,
                  color: 'white',
                }}>
                {' '}
                Personal Care
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: 20, paddingRight: 20}}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 12,
                  color: 'white',
                  marginTop: 15,
                }}>
                My List
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 12,
                  color: 'white',
                  marginTop: 10,
                }}>
                Loyalty point
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 12,
                  color: 'white',
                  marginTop: 10,
                }}>
                FAQ s
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 12,
                  color: 'white',
                  marginTop: 10,
                }}>
                Notification
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  items: {
    flex: 1,
    paddingLeft: 20,
    backgroundColor: '#44A72C',
  },
});
