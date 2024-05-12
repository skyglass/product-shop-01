"use client";
import { useEffect, useState } from "react";
import AdminChart from "@/components/admin/AdminChart";

export default function AdminDashboard() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChartData();
  }, []);

  const fetchChartData = async () => {
    try {
      const response = await fetch(`${process.env.API}/admin/chart`);
      const data = await response.json();

      setChartData(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching chart data:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center text-danger vh-100 h1">
        LOADING...
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="lead text-center">Admin Dashboard</p>

          <AdminChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
}
