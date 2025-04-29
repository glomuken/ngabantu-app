import styled from 'styled-components';

export const ConversationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Question = styled.div`
  background-color: #f1f1f1;
  padding: 1rem;
  border-radius: 4px;
  font-weight: bold;
  color: #333;
`;

export const Answer = styled.div`
  background-color: #e2e2e2;
  padding: 1rem;
  border-radius: 4px;
  color: #555;
`;

export const ConversationItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ConversationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;