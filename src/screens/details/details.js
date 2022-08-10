import React from 'react';
import {View, Text} from 'react-native';
import Layout from '../../components/layout';

const Details = props => {
  return (
    <Layout>
      <Text>{props.name}</Text>
    </Layout>
  );
};

export default Details;
