import React from "react";
import { StyledContainer, Incoming, Outgoing } from "./Message.style";

export interface MessageInterface {
  message: string;
  attachments?: File[];
  type: 'outgoing' | 'incoming';
}

const Message: React.FC<MessageInterface> = ({type, message}) => {
  console.log('messageType', type)
  return (
  <StyledContainer $isOutgoing={type === 'outgoing'}>
    {type === 'incoming' ? <Incoming>
      {message}
    </Incoming> : <Outgoing>{message}</Outgoing>}
  </StyledContainer>
  )
}

export default Message;