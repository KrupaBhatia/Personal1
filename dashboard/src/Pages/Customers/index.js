import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../API";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        loading={loading}
        columns={[
          // {
          //   title: "Photo",
          //   dataIndex: "image",
          //   render: (link) => {
          //     return <Avatar src={link} />;
          //   },
          // },

          {
            title: "uniqueId",
            dataIndex: "unique_id"
          },
          {
            title: "status",
            dataIndex: "status"
          },
          {
            title: "First Name",
            dataIndex: "first_name",
          },
          {
            title: "LastName",
            dataIndex: "first_name",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },

          {
            title: "gender",
            dataIndex: "gender",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}
export default Customers;