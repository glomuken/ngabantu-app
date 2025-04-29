import React, { useState } from 'react';
import { Container, Title, SmallTitle, BodyCopy, Row, Badge, Card } from './UserProfile.styled';
import { UserProfileProps } from '../../types/types';
import { StarFilled, Service, LocationPin, ChevronDown } from '../CustomIcons';
import CenteredTabs from '../tabs/Tabs';
import { ServiceOffer } from '../../types/types';


const UserProfile: React.FC<UserProfileProps> = ({name, surname, location, rating, type, serviceCategories, about}) => {
  // const [services, setServices] = useState<ServiceOffer[]>([])
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

  const truncate = (str: string) => {
    return ''
  }

  console.log(about);

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
      {/* {about && (<><Row style={{justifyContent: 'center'}}>
        <SmallTitle>Read More</SmallTitle></Row>
        <Row style={{justifyContent: 'center'}} onClick={() => alert('Read more clicked...')}>
          <ChevronDown />
        </Row></>)} */}
      </div>

    </Container>
    </>
  )
}

export default UserProfile;
