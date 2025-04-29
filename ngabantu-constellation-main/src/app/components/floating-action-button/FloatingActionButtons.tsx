import * as React from 'react';
import Fab from '@mui/material/Fab';
import { StyledContainer } from './FloatingActionButtons.style';
import Icon from '@mdi/react';
import { mdiRobotExcitedOutline } from '@mdi/js';
import { FABInterface } from '../../types/types';

export const Chatbot: React.FC<FABInterface> = ({onClick}) => {
  return (
    <StyledContainer>
      <Fab color="primary" aria-label="add" className="primary" onClick={onClick}>
        <Icon path={mdiRobotExcitedOutline} size={1} />
      </Fab>
      </StyledContainer>
  );
}