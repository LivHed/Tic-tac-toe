type MessageProps = {
    message: string,
  };

function Message({message}:  MessageProps) {
    return <div aria-label="message-box" data-testid="message">{message}</div>
 }

 export default Message