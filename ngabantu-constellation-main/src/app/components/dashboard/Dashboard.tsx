import React from 'react';
import {
  GlobalStyle,
  PollContainer,
  Sidebar,
  SidebarHeading,
  SidebarDescription,
  SidebarNav,
  NewLabel,
  StepIndicator,
  MainContent,
  MainHeader,
  MainHeaderTitle,
  CloseButton,
  PollFormLabel,
  PollFormInput,
  SectionHeading,
  OptionsContainer,
  OptionButton,
  OptionItem,
  OptionItemSpan,
  OptionItemInput,
  DeleteOptionButton,
  AddOptionButton,
  DurationInputs,
  FormActions,
  CancelButton,
  ContinueButton,
  Overlay,
  PollFormContainer
} from './Dashboard.style';
import Icon from '@mdi/react';
import { mdiCreation } from '@mdi/js';
import { Button, IconButton } from '@mui/material';
import Close from '@mui/icons-material/Close';
import Conversations from '../conversations/Conversation';

export interface DashboardProps {
  conversations: Conversation[];
  setConversations: any;
}

export type Conversation = {
  id: number;
  question: string;
  answer: string;
}

const Dashboard: React.FC<DashboardProps> = ({conversations, setConversations}) => {
  const [question, setQuestion] = React.useState<string>('');
  const [answer, setAnswer] = React.useState<string>('');
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const handleFAQSubmit = () => {
    if (question.trim() === '' || answer.trim() === '') {
      return;
    }

    const newConversation: Conversation = {
      id: conversations.length + 1,
      question,
      answer
    };

    setConversations([...conversations, newConversation]);
    setQuestion('');
    setAnswer('');
    setShowModal(false);
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  }

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  }

  return (
    <>
      <GlobalStyle />
      {showModal ? (
        <Overlay>
          <PollFormContainer>
            <MainHeader>
              <MainHeaderTitle>Add Conversation</MainHeaderTitle>
              <IconButton onClick={() => setShowModal(false)}>
                <Close style={{ color: '#000' }} />
              </IconButton>
            </MainHeader>
            <SidebarDescription style={{ color: '#000', textAlign: 'left', margin: '24px 0' }}>
              Add a Frequently Asked Question and the answer you would like your chatbot to give to clients.
            </SidebarDescription>
            <PollFormInput
              type="text"
              id="question"
              placeholder="Frequently Asked Question"
              value={question}
              onChange={handleQuestionChange}
            />
            <PollFormInput
              type="text"
              id="answer"
              placeholder="Answer"
              value={answer}
              onChange={handleAnswerChange}
            />
            <FormActions>
              <Button variant="contained" color="success" style={{ marginLeft: 'auto' }} onClick={handleFAQSubmit}>
                Submit
              </Button>
            </FormActions>
          </PollFormContainer>
        </Overlay>
      ) : (
        <PollContainer>
          <Sidebar>
            <Icon path={mdiCreation} size={1} className='icon-primary' style={{ color: '#bdee63' }} />
            <SidebarHeading>AI Assistant</SidebarHeading>
            <SidebarDescription>
              Create and manage an AI assistant to answer questions and engage with potential clients.
            </SidebarDescription>
            <SidebarNav>
              <ul>
                <li className="active">Conversations</li>
                <li>Upload Chats <NewLabel>New</NewLabel></li>
              </ul>
            </SidebarNav>
            <StepIndicator>Zenith Tech 2024</StepIndicator>
          </Sidebar>
          <MainContent>
            <MainHeader>
              <MainHeaderTitle>Dashboard</MainHeaderTitle>
              <CloseButton>×</CloseButton>
            </MainHeader>
            <div className="options">
              <SectionHeading>Frequently Asked Questions</SectionHeading>
              {conversations.length > 0 && <Conversations conversations={conversations} />}
              <AddOptionButton onClick={() => setShowModal(true)}>+ Add FAQ</AddOptionButton>
            </div>
          </MainContent>
        </PollContainer>
      )}
    </>
  );
};

export default Dashboard;