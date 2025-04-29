import styled, {css} from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-sizing: border-box;
	background-color: #1c2024;
	border-radius: 6px;
	box-shadow:
		hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
		hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
	position: fixed;
	top: 5%;
	left: 0;
  right: 0;
  bottom: 0;
	/* transform: translate(-50%, -50%); */
	/* width: 100%; */
  /* height: 90%; */
	padding: 25px;
	animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const ChatContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* align-items: flex-end; */
  gap: 10px;
  /* padding: 20px;  */
  min-height: 500px;
  box-sizing: border-box;
  /* width: 100%; */
  /* max-width: 500px; */
  /* margin: auto; */
  /* border: 1px solid #e0e0e0; */
  border-radius: 8px;
  /* background-color: #ffffff; */
`;


export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(28, 32, 36, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h2`
margin: 0;
font-weight: 500;
color: #fff;
font-size: 17px;
`

export const Row = styled.div`
display: flex;
flex-direction: row;
gap: 0.8rem;
align-items: center;
`

export const Spacer = styled.div<{$width?: string}>`
  ${({$width}) => css`width: ${$width ? $width : `50%`};`}
`

export const MessageInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledInputContainer = styled.div`
   display: flex;
  align-items: center;
  width: 500px; /* Adjust width as needed */
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 12px 16px;
  font-size: 16px;
`

export const TopicsButton = styled.button`
    display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: #f7f7f7;
  color: #34a853; /* Green color for the icon and text */
  border: none;
  cursor: pointer;
  font-size: 16px;

  .icon {
    margin-right: 4px;
  }
`

export const SendButton = styled.button`
  padding: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #cccccc; /* Gray color for the icon */
  font-size: 18px;`

export const ChatBox = styled.div`
  height: 80%
`;