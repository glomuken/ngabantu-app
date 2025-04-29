import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
	background-color: #1c2024;
	border-radius: 6px;
	box-shadow:
		hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
		hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  border: #15B097 2px solid;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90%;
	/* max-width: 450px; */
  height: 95%;
	/* max-height: 85vh; */
	padding: 25px;
	animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

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

export const Title = styled.div`
margin: 0;
font-weight: 500;
color: #fff;
font-size: 17px;
`
export const SmallTitle = styled.div`
margin: 0;
font-weight: 500;
color: #fff;
font-size: 13px;
`

export const BodyCopy = styled.div`
display: flex;
flex-direction: row;
margin: 10px 0 20px;
color: #fff;
gap: 0.5rem;
font-size: 15px;
line-height: 1.5;
/* justify-items: center; */
align-items: center;
/* justify-content: center;
align-content: center;
align-items: center;
justify-items: center; */
`

export const Avatar = styled.image`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const Row = styled.div`
display: flex;
flex-direction: row;
gap: 0.8rem;
align-items: center;
`

export const Badge = styled.div`
      display: inline-flex;
    align-items: center;
    flex-direction: row;
    border: 1px solid #fff;
    border-radius: 12px;
    min-width: fit-content;
    height: 1;
    font-family: var(--default-font-family);
    font-weight: var(--font-weight-medium);
    font-style: normal;
    flex-shrink: 0;
    padding: 0.25rem;
    gap: 0.25rem;
    align-items: center;
    text-align: center;
    background-color: #bdee63;
`

export const Card = styled.div`
    display: flex;
  flex-direction: column;
  gap: 1.5rem;
  opacity: 0.5;
	background-color: #fff;
	border-radius: 6px;
	box-shadow:
		hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
		hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 75vw;
	padding: 25px;
`;

export const Button = styled.button`
margin-top: 1rem;
	display: inline-flex;
 	align-items: center;
 	justify-content: center;
 	border-radius: 12px;
 	padding: 15px;
 	font-size: 15px;
 	line-height: 1;
 	font-weight: 500;
  color:  #1c2024;
  background-color: #15B097;
`

// .DialogDescription {
// 	margin: 10px 0 20px;
// 	color: var(--mauve-11);
// 	font-size: 15px;
// 	line-height: 1.5;
// }`

// @import "@radix-ui/colors/black-alpha.css";
// @import "@radix-ui/colors/green.css";
// @import "@radix-ui/colors/mauve.css";
// @import "@radix-ui/colors/violet.css";

// /* reset */
// button,
// fieldset,
// input {
// 	all: unset;
// }

// .DialogOverlay {
// 	background-color: var(--black-a9);
// 	position: fixed;
// 	inset: 0;
// 	animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
// }

// .DialogContent {
// 	background-color: white;
// 	border-radius: 6px;
// 	box-shadow:
// 		hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
// 		hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
// 	position: fixed;
// 	top: 50%;
// 	left: 50%;
// 	transform: translate(-50%, -50%);
// 	width: 90vw;
// 	max-width: 450px;
// 	max-height: 85vh;
// 	padding: 25px;
// 	animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
// }
// .DialogContent:focus {
// 	outline: none;
// }

// .DialogTitle {
// 	margin: 0;
// 	font-weight: 500;
// 	color: var(--mauve-12);
// 	font-size: 17px;
// }

// .DialogDescription {
// 	margin: 10px 0 20px;
// 	color: var(--mauve-11);
// 	font-size: 15px;
// 	line-height: 1.5;
// }

// .Button {
// 	display: inline-flex;
// 	align-items: center;
// 	justify-content: center;
// 	border-radius: 4px;
// 	padding: 0 15px;
// 	font-size: 15px;
// 	line-height: 1;
// 	font-weight: 500;
// 	height: 35px;
// }
// .Button.violet {
// 	background-color: white;
// 	color: var(--violet-11);
// 	box-shadow: 0 2px 10px var(--black-a7);
// }
// .Button.violet:hover {
// 	background-color: var(--mauve-3);
// }
// .Button.violet:focus {
// 	box-shadow: 0 0 0 2px black;
// }
// .Button.green {
// 	background-color: var(--green-4);
// 	color: var(--green-11);
// }
// .Button.green:hover {
// 	background-color: var(--green-5);
// }
// .Button.green:focus {
// 	box-shadow: 0 0 0 2px var(--green-7);
// }

// .IconButton {
// 	font-family: inherit;
// 	border-radius: 100%;
// 	height: 25px;
// 	width: 25px;
// 	display: inline-flex;
// 	align-items: center;
// 	justify-content: center;
// 	color: var(--violet-11);
// 	position: absolute;
// 	top: 10px;
// 	right: 10px;
// }
// .IconButton:hover {
// 	background-color: var(--violet-4);
// }
// .IconButton:focus {
// 	box-shadow: 0 0 0 2px var(--violet-7);
// }

// .Fieldset {
// 	display: flex;
// 	gap: 20px;
// 	align-items: center;
// 	margin-bottom: 15px;
// }

// .Label {
// 	font-size: 15px;
// 	color: var(--violet-11);
// 	width: 90px;
// 	text-align: right;
// }

// .Input {
// 	width: 100%;
// 	flex: 1;
// 	display: inline-flex;
// 	align-items: center;
// 	justify-content: center;
// 	border-radius: 4px;
// 	padding: 0 10px;
// 	font-size: 15px;
// 	line-height: 1;
// 	color: var(--violet-11);
// 	box-shadow: 0 0 0 1px var(--violet-7);
// 	height: 35px;
// }
// .Input:focus {
// 	box-shadow: 0 0 0 2px var(--violet-8);
// }

// @keyframes overlayShow {
// 	from {
// 		opacity: 0;
// 	}
// 	to {
// 		opacity: 1;
// 	}
// }

// @keyframes contentShow {
// 	from {
// 		opacity: 0;
// 		transform: translate(-50%, -48%) scale(0.96);
// 	}
// 	to {
// 		opacity: 1;
// 		transform: translate(-50%, -50%) scale(1);
// 	}
// }
