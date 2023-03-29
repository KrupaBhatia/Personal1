import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../API";
import AppHeader from "../../Components/AppHeader"
import SideMenu from "../../Components/SideMenu";
import AppFooter from "../../Components/AppFooter";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
    <AppHeader />
    <div className="SideMenuAndPageContent">
          <SideMenu></SideMenu>
         
        </div> 
    <div className="content">
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        loading={loading}
        columns={[
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
          }
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
    </div>
    <AppFooter /> 
    </>
  );
}
export default Inventory;