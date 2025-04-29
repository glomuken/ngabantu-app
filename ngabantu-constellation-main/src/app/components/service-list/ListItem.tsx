import React from 'react';
import { Badge, Row, SmallTitle } from '../user-profile/UserProfile.styled';
import { ServiceOffer } from '../../types/types';

const ListItem: React.FC<Partial<ServiceOffer>> = ({name, category, hourly_rate }) => {
  return (
  <Row>
    <SmallTitle>{name}</SmallTitle>
    <Badge><strong>{category}</strong></Badge>
    <SmallTitle><strong>{`R${hourly_rate}/hr`}</strong></SmallTitle>
  </Row>)
}

export default ListItem;