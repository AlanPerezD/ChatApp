import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';


const App = () => {
  return (
    <ChatEngine 
      height="100vh"
      projectID="8c130753-bd9b-4556-9a06-08172efe3dff"
      userName="user"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  )
}

export default App;