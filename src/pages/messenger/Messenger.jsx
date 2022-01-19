import './messenger.css'
import Topbar from "../../components/topbar/Topbar";
import Conversation from '../../components/conversation/Conversation';
import Message from '../../components/message/Message';


const Messenger = () => {
  return <>
  <Topbar/>
  <div className="messenger">
      <div className="chatmenu">
          <div className="chatmenu-wrapper">
              <input placeholder="Search for friends" className="chatmenu-input" />
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
          </div>
      </div>
      <div className="chatbox">
          <div className="chatbox-wrapper">
              <Message/>
              <Message/>
              <Message/>
              <Message/>
          </div>
      </div>
      <div className="chatonline">
          <div className="chatonline-wrapper">online</div>
      </div>
  </div>
  </>;
};

export default Messenger;
