"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  console.log("current page => ", page);

  const router = useRouter();

  useEffect(() => {
    fetchOrders(page);
  }, [page]);

  const fetchOrders = async (page) => {
    try {
      const response = await fetch(
        `${process.env.API}/admin/orders?page=${page}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      // console.log("DATA in admin orders with pagination => ", data);
      setOrders(data.orders);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error);
      setLoading(false);
    }
  };

  const handleStatusChange = async (newStatus, orderId) => {
    try {
      const response = await fetch(
        `${process.env.API}/admin/orders/${orderId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ delivery_status: newStatus }),
        }
      );

      if (response.ok) {
        // Update the order's status locally if the request was successful
        setOrders((prevOrders) =>
          prevOrders.map((o) =>
            o._id === orderId ? { ...o, delivery_status: newStatus } : o
          )
        );
        toast.success("Order status updated successfully");
      } else {
        toast.error("Failed to update order status");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
      toast.error("An error occurred while updating order status");
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center text-danger vh-100 h1">
        LOADING...
      </div>
    );
  }

  if (!orders?.length) {
    return (
      <div className="d-flex justify-content-center align-items-center text-danger vh-100 h1">
        No Orders
      </div>
    );
  }

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h4 className="text-center">Recent Orders</h4>

          {orders?.map((order) => (
            <div key={order?._id} className="mb-4 p-4 alert alert-secondary">
              <table className="table table-striped">
                <tbody>
                  {/* order info */}
                  <tr>
                    <th scope="row">Customer Name:</th>
                    <td>{order?.userId?.name}</td>
                  </tr>
                  <tr>
                    <th scope="row">Charge ID:</th>
                    <td>{order?.chargeId}</td>
                  </tr>
                  <tr>
                    <th scope="row">Created:</th>
                    <td>{new Date(order?.createdAt).toLocaleDateString()}</td>
                  </tr>
                  <tr>
                    <th scope="row">Payment Intent:</th>
                    <td>{order?.payment_intent}</td>
                  </tr>
                  <tr>
                    <th scope="row">Receipt:</th>
                    <td>
                      <a href={order?.receipt_url} target="_blank">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Refunded:</th>
                    <td>{order?.refunded ? "Yes" : "No"}</td>
                  </tr>
                  <tr>
                    <th scope="row">Status:</th>
                    <td>{order?.status}</td>
                  </tr>
                  <tr>
                    <th scope="row">Total Charged:</th>
                    <td>
                      ${(order?.amount_captured / 100)?.toFixed(2)}{" "}
                      {order?.currency}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Shipping Address:</th>
                    <td>
                      {order?.shipping?.address?.line1}
                      <br />
                      {order?.shipping?.address?.line2 &&
                        `${order?.shipping?.address?.line2}, `}
                      {order?.shipping?.address?.city},{" "}
                      {order?.shipping?.address?.state},{" "}
                      {order?.shipping?.address?.postal_code}
                      <br />
                      {order?.shipping?.address?.country}
                    </td>
                  </tr>
                  {/* products info */}
                  <tr>
                    <th scope="row" className="w-25">
                      Ordered Products:
                    </th>
                    <td className="w-75">
                      {order?.cartItems?.map((product) => (
                        <div
                          className="pointer text-primary"
                          key={product._id}
                          onClick={() =>
                            router.push(`/product/${product?.slug}`)
                          }
                        >
                          {product?.quantity} x {product?.title} $
                          {product?.price?.toFixed(2)} {order?.currency}
                        </div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Delivery Status:</th>
                    <td>
                      <select
                        className="form-control"
                        onChange={(e) =>
                          handleStatusChange(e.target.value, order._id)
                        }
                        value={order?.delivery_status}
                        disabled={order?.refunded}
                      >
                        <option value="Not Processed">Not Processed</option>
                        <option value="processing">Processing</option>
                        <option value="Dispatched">Dispatched</option>
                        {order?.refunded && (
                          <option value="Cancelled">Cancelled</option>
                        )}
                        <option value="Delivered">Delivered</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pathname={pathname}
      />
    </div>
  );
}
