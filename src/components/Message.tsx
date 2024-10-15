type MessageProps = {
    message: string,
  };

function Message({message}:  MessageProps) {
    return <div>{message}</div>
 }

 export default Message