type MessageProps = {
    message: string,
  };

function Message({message}:  MessageProps) {
    return <div data-testid="message">{message}</div>
 }

 export default Message