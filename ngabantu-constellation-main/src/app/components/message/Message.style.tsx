import styled from "styled-components";

export const StyledContainer = styled.div<{$isOutgoing: boolean}>`
    max-width: 60%;
  /* padding: 10px 15px; */
  margin: 8px 0;
  min-width: 30%;
  border-radius: 18px;
  font-size: 16px;
  line-height: 1.4;
  word-wrap: break-word;
  align-self: ${({$isOutgoing}) => $isOutgoing ? 'flex-end' : 'flex-start'};
`

export const Incoming = styled.div`
  background-color: #f1f0f0;
  color: #333;
  align-self: flex-start; /* Aligns message to the left */
  text-align: start;
  padding: 2px 12px;
  font-size: 16px;
  border-radius: 6px;
  border-top-left-radius: 0;
`

export const Outgoing = styled.div`
  background-color: #bdee63;
  color: #000;
  align-self: flex-end;
  text-align: start;
  padding: 2px 12px;
  font-size: 16px;
  border-radius: 6px;
  border-top-right-radius: 0;
`
