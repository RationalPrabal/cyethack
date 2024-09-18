import { useNavigate } from "react-router-dom";
import { Card, Descriptions, Button, Row, Col, Spin } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSingleProduct } from "../redux/product/action";
import Navbar from "../component/Navbar";

export default function SingleItem() {
  const { product, loading } = useSelector((state) => state.productReducer);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const itemId = sessionStorage.getItem("item_id");
    const prevItemId = sessionStorage.getItem("prevItemId");
    // Case 2: If it's the same item, no need to re-fetch
    if (itemId === prevItemId) {
      return;
    }

    // Case 1: New item selected, dispatch action to fetch details

    dispatch(getSingleProduct(itemId)); // Dispatch the action
    sessionStorage.setItem("prevItemId", itemId);
  }, []); // Add dispatch and prevItemId as dependencies

  // Loading effect
  if (loading) {
    return <Spin size="large" />;
  }
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px", margin: "0 auto" }}>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
          style={{ marginBottom: "20px" }}
        >
          Back
        </Button>

        <Card>
          <Row gutter={16}>
            {/* Image Section */}
            <Col xs={24} sm={12} lg={8}>
              <img
                src={product?.image}
                alt={product?.title}
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Col>

            {/* Details Section */}
            <Col xs={24} sm={12} lg={16}>
              <Descriptions
                title={product?.title}
                bordered
                column={{ xs: 1, sm: 1, md: 2 }}
              >
                <Descriptions.Item label="Price">
                  {product?.price}
                </Descriptions.Item>
                <Descriptions.Item label="Brand">
                  {product?.brand}
                </Descriptions.Item>
                <Descriptions.Item label="Description" span={2}>
                  {product?.desc}
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
}
