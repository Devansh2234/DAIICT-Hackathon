import React from 'react';
import { StreamChat } from 'stream-chat';
import { ChannelList, Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer } from './components';

import './App.css';

const apiKey = 'qgtk9ttyha7j';

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className='app__wrapper'>
        <Chat client={client} theme='team light'>
            <ChannelListContainer />
            <ChannelContainer />
            <ChannelList
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listProps) => (
                    <TeamChannelList
                        {...listProps}
                        type='team'
                    />
                )}
                Preview={(previewProps) => (
                    <TeamChannelPreview
                        {...previewProps}
                        type='team'
                    />
                )}
            />
        </Chat>
    </div>
  )
}

export default App