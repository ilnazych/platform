import { SendOutlined } from '@ant-design/icons';
import { Button, Input, Card, Space, List, message, Avatar  } from 'antd';
import React, { useEffect, useState } from 'react';
import VirtualList from 'rc-virtual-list';

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

export function Chat () {

    const [data, setData] = useState<UserItem[]>([]);

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
        <Card style={{height: "100%"}}>
            <div style={{display: "flex", flexDirection: "column", gap: "10px", marginBottom: "15px"}}>
                 <List>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="email"
        onScroll={onScroll}
      >
        {(item: UserItem) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name.last}</a>}
              description={item.email}
            />
            <div>Content</div>
          </List.Item>
        )}
      </VirtualList>
    </List>
                
            </div>
                <Space.Compact style={{ width: '100%'}}>
                    <Input placeholder="Введите ваше сообщение" />
                    <Button  type="primary" icon={<SendOutlined />}/>
                </Space.Compact>
        </Card>
    )
}