import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, message } from 'antd';
import VirtualList from 'rc-virtual-list';
import { useAppDispatch } from '../../../app/store/hooks';
import { setChildrenDrawer } from '../../../features/chat/chat';

interface UserItem {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 400;

const UserList: React.FC = () => {
  const [data, setData] = useState<UserItem[]>([]);
  const dispatch = useAppDispatch()

  const showChildrenDrawer = () => {
    dispatch(setChildrenDrawer());
  };

  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        message.success(`${body.results.length} more items loaded!`);
      });
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    // Refer to: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#problems_and_solutions
    if (Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - ContainerHeight) <= 1) {
      appendData();
    }
  };

  return (
    <List>
      <VirtualList
        data={data}
        itemHeight={47}
        itemKey="email"
        onScroll={onScroll}
      >
        {(item: UserItem) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name.last}</a>}
              description={"Последнее сообщение"}
            />
           <Button type="primary" onClick={showChildrenDrawer}>Ответить</Button>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};

export default UserList;