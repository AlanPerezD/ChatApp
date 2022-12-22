import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

const MessageForm = (props) => {
  const [ value, setValue ] = useState('');
  const { chatId, creds } = props;

  const handleChange = ( event ) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleSubmit = ( event ) => {
    event.preventDefault();

    const text = value.trim();

    if(text.length > 0 ) {
      sendMessage(creds, chatId, { text })
    }

    setValue('');
  };


  return (
    <form className="message-form" onSubmionSubmitonSubmitt={handleSubmit}>
      <input 
        className="message-input"
        placeholder="Send a message ..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFOr="upload button">
        <span className='image-button'>
          <PictureOutlined />
        </span>
      </label>

    </form>
  )
}

export default MessageForm;