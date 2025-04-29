import styled, { createGlobalStyle } from 'styled-components';

export const UserTypeSelectionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const UserTypeButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  color: #333;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #1d72b8;
    color: #fff;
    border-color: #1d72b8;
  }

  &.active {
    background-color: #1d72b8;
    color: #fff;
    border-color: #1d72b8;
  }
`;

export const PollFormContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
	background-color: #fff;
	border-radius: 6px;
	box-shadow:
		hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
		hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
	width: 100%;

  .avatar {
  position: relative;
  align-self: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: white; /* Adjust as needed */
  border: #15B097 2px solid;
}
`;

export const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
	background-color: #1c2024;
	border-radius: 6px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
	box-shadow:
		hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
		hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
	width: 25%;
	padding: 25px;
  position: fixed;
  left: 0;
  height: 100%;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f3f4f6;
  }
`;

export const PollContainer = styled.div`
  display: flex;
  width: 90%;
  max-width: 1200px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Sidebar = styled.div`
  width: 25%;
  background-color: #1c2024;
	border-radius: 6px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 2rem;
  border-right: 1px solid #bdee63;
`;

export const SidebarHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #fff;
`;

export const SidebarDescription = styled.p`
  font-size: 0.9rem;
  color: #fff;
  margin-bottom: 2rem;
`;

export const SidebarNav = styled.nav`
  ul {
    list-style-type: none;
  }

  li {
    padding: 0.8rem 0;
    color: #fff;
    cursor: pointer;

    &.active {
      font-weight: bold;
      color: #bdee63;
    }
  }
`;

export const NewLabel = styled.span`
  font-size: 0.75rem;
  color: #d9534f;
  margin-left: 0.5rem;
`;

export const StepIndicator = styled.div`
  margin-top: 2rem;
  font-size: 0.7rem;
  color: #777;
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
`;

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainHeaderTitle = styled.h3`
  font-size: 1.25rem;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #888;
`;

export const PollFormLabel = styled.label`
  display: block;
  margin-top: 1rem;
  text-align: left;
  /* font-weight: bold; */
`;

export const PollFormInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const SectionHeading = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const OptionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const OptionButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  border-radius: 4px;
  cursor: pointer;

  &.active {
    background-color: #1d72b8;
    color: #fff;
    border-color: #1d72b8;
  }
`;

export const OptionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const OptionItemSpan = styled.span`
  font-size: 1.5rem;
`;

export const OptionItemInput = styled.input`
  flex: 1;
`;

export const DeleteOptionButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #888;
  cursor: pointer;
`;

export const AddOptionButton = styled.button`
  color: #1d72b8;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
`;

export const DurationInputs = styled.div`
  display: flex;
  gap: 0.5rem;

  input[type="number"] {
    width: 4rem;
  }
`;

export const CancelButton = styled.button`
  background: none;
  border: 1px solid #ccc;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
`;

export const ContinueButton = styled.button`
  background-color: #1c2024;
  color: #fff;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;