import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/product/action";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
export default function ListItems() {
  const { products } = useSelector((state) => state.productReducer);
  const { user } = useSelector((state) => state.authReducer);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Access history for navigation

  const handleRowClick = (record) => {
    sessionStorage.setItem("item_id", record._id); // Store item _id in session storage
    navigate("/list-item-details"); // Navigate to details page
  };
  // use effect hook to fetch products
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // Columns for the Ant Design Table
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `₹${price}`,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
    },
  ];

  return (
    <div>
      <Navbar />
      <Table
        dataSource={products}
        columns={columns}
        rowKey="_id"
        pagination={false} // Disable pagination if not needed
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
          style: { cursor: "pointer" },
        })}
      />
    </div>
  );
}
