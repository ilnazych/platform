import { Card, Space } from 'antd';

export function UsersCard () {
    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Card title="Card" size="small">
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Card" size="small">
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Card" size="small">
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
    )
}