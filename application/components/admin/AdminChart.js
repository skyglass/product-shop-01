import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Link from "next/link";

export default function AdminChart({ chartData }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ResponsiveContainer width="95%" height={400}>
            <BarChart width={1000} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="count"
                fill="rgba(75, 192, 192, 0.6)"
                shape={(props) => (
                  <Link href={props.url}>
                    <rect {...props} />
                  </Link>
                )}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
