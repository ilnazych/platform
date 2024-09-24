import React from 'react';
import { setChildrenDrawer, setDrawer } from '../../features/chat/chat';
import { Drawer, Space } from 'antd';
import { Chat } from './chat/Chat';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import UserList from './userList/UserList';

const MessengerDrawer: React.FC = () => {
  const drawerState = useAppSelector((state) => state.chat.drawer);
  const childrenDrawerState = useAppSelector((state) => state.chat.childrenDrawer);

  const dispatch = useAppDispatch()

  const setCloseDrawer = () => {
    dispatch(setDrawer())
  }

  const onChildrenDrawerClose = () => {
    dispatch(setChildrenDrawer());
  };

  return (
    <>
      <Drawer title="Все сообщения" width={750} closable={false} onClose={setCloseDrawer} open={drawerState}>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <UserList/>
      </Space>
        <Drawer
          title="Иванов Иван"
          width={500}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawerState}
        >
          <Chat/>
        </Drawer>
      </Drawer>
    </>
  );
};

export default MessengerDrawer;