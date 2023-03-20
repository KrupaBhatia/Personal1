import { Space, Table, Typography, Form, Button } from "antd";
import { useEffect, useState } from "react";
import {  getOrders } from "../../API";
import { Link, useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

function Orders() {
  const { _id } = useParams()
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);



  const [form] = Form.useForm();

  const getById = async () => {
    let res = await axios.get(`http://localhost:4000/getById/${_id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
  };




  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.data);
      setLoading(false);
    });
  }, []);


  const handleSelectStatus = async (e , record ) => {
    const selectedValue = e.target.value
    console.log(selectedValue);
    const res = await axios.put(`http://localhost:4000/update/${record._id}`, {status : selectedValue})
      .then((response) => {
        const corSelectTag = document.getElementById(`${record.unique_id}`)
        console.log("corSelectTag" , corSelectTag);
        if(corSelectTag){
          corSelectTag.value = selectedValue
          console.log("toast in success");
          toast.success("updated successfully")
        }

        console.log(response.data)
      })
      .catch((err) => {
        toast.error(err.message)
        console.error(err);
      })
  }


  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Form form={form} ></Form>
      <Table
        loading={loading}
        columns={[
          {
            title: "uniqueId",
            dataIndex: "unique_id"
          },
          {
            title: "status",
            dataIndex: "status",
            render: (text ,  record) => {
              console.log("text" , text , "record" , record)
              return (
                <>
                <select  
                value= {record.status}
                 onChange={(e) => handleSelectStatus(e , record)}
                 id = {record.unique_id}
                 >
                  <option value="pending"> Pending </option>
                  <option value = "completed">  Completed </option>
                </select>
                </>
              );
            },
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
            title: "verify",
            dataIndex: "verify",
          },

          {
            title: "payment",
            dataIndex: "payment",
          },

          {
            title: "Actions",
            render: (_, record) => {
              return (
                <>
                  <Link to='/update/${_id}'>

                    <Button onClick={getById()} >
                      Editssssss
                    </Button>
                  </Link>
                  <Button type="link" htmlType="submit"  >
                    Save
                  </Button>
                </>
              );
            },
          },
        ]
        }
      dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}

      ></Table>
      <Toaster />

    </Space>
  );
}
export default Orders;