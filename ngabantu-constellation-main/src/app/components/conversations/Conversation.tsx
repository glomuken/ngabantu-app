import React from 'react';
import {
  ConversationContainer,
  Question,
  Answer,
  ConversationItem,
  ConversationList
} from './Conversation.style';

// const conversations = [
//   { question: "What is your name?", answer: "My name is GitHub Copilot." },
//   { question: "What do you do?", answer: "I assist with coding tasks." },
//   // Add more conversations here
// ];

const Conversations: React.FC<{conversations: any[]}> = ({conversations}) => {
  return (
    <ConversationContainer>
      <ConversationList>
        {conversations.map((conv, index) => (
          <ConversationItem key={index}>
            <Question>{conv.question}</Question>
            <Answer>{conv.answer}</Answer>
          </ConversationItem>
        ))}
      </ConversationList>
    </ConversationContainer>
  );
};

export default Conversations;