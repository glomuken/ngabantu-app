import React, { useState } from 'react';
import { Container, Title, BodyCopy, Row, Badge } from './ServiceProvider.style';
import { UserProfileProps } from '../../types/types';
import { StarFilled, Service } from '../CustomIcons';
import CenteredTabs from '../tabs/Tabs';
// import { Chatbot } from '../floating-action-button/FloatingActionButtons';


const ServiceProvider: React.FC<UserProfileProps> = ({name, surname, location, rating, type, serviceCategories, about, setShowChat}) => {
  const [userData, setUserData] = useState({
    firstName: name,
    lastName: surname,
    location: '',
    rating: '',
    type: '',
    services: [],
    serviceCategories: [],
  });

  function updateSharedState(fields: Partial<typeof userData>)  {
    setUserData((prevUserData) => {
      const updatedState = {...prevUserData, ...fields};
      return updatedState;
    })
  }

  const CapitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <>
    <Container>
      {type.toString().toLowerCase().includes('provider') && (<Row>
        <Service />
        <Title style={{textAlign: 'left'}}>Service Provider</Title>
      </Row>)}
      <img src='https://media.licdn.com/dms/image/v2/D4D03AQEn5ljn7dl3AQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1687524090018?e=1733356800&v=beta&t=RUiqyHZRst7k2a1rRLGRpQzHzpT6D1kgi0uBEdXUzNI' alt='avatar' className='avatar' />
       <div style={{display: 'flex', flexDirection: 'column', gap: '0.25rem'}}>
      <Title>{name} {surname}</Title>
      <Row style={{justifyContent: 'center'}}>
        <BodyCopy>{location.area} | {rating}<StarFilled /></BodyCopy>
      </Row>
      {(type.toString().toLowerCase().includes('provider') && serviceCategories) && (<div style={{display: 'flex', flexDirection: 'row', gap: '0.5rem', justifyContent: 'center'}}>
        {serviceCategories?.map((service, index) => <Badge key={`badge-${index}`}><strong>{CapitalizeFirstLetter(service)}</strong></Badge>)}
        </div>)}
        {about && (<><Row style={{justifyContent: 'center'}}><BodyCopy>{about}</BodyCopy></Row>
        </>
      )}
      <CenteredTabs updateFields={updateSharedState} services={userData.services} />
      </div>
    </Container>
    </>
  )
}

export default ServiceProvider;
