"use client";
import { useEffect, useState } from "react";
import UserChart from "@/components/user/UserChart";

export default function UserDashboard() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChartData();
  }, []);

  const fetchChartData = async () => {
    try {
      const response = await fetch(`${process.env.API}/user/chart`);
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
          <p className="lead text-center">User Dashboard</p>

          <UserChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
}

// import { cookies } from "next/headers";
// import BlogList from "@/components/blog/BlogList";

// async function getLikedBlogs() {
//   const nextCookies = cookies();
//   const nextAuthSessionToken = nextCookies.get("next-auth.session-token");

//   // console.log("nextAuthSessionToken", nextAuthSessionToken);

//   const apiUrl = `${process.env.API}/user/blog/liked`;

//   const options = {
//     method: "GET",
//     cache: "no-store",
//     headers: {
//       Cookie: `next-auth.session-token=${nextAuthSessionToken?.value}`,
//     },
//   };

//   try {
//     const response = await fetch(apiUrl, options);

//     if (!response.ok) {
//       throw new Error(
//         `Failed to fetch: ${response.status} ${response.statusText}`
//       );
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }

// export default async function UserDashboard() {
//   const likedBlogs = await getLikedBlogs();

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col">
//           <p>Liked Blogs</p>
//           <br />
//           <BlogList blogs={likedBlogs} />
//         </div>
//       </div>
//     </div>
//   );
// }
