import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import "../assets/styles/pages/dashboard.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";
import { API_URL } from "../config";
import { Spinner } from "react-bootstrap";

// Registering Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/user/enquiries-by-source`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const responseData = res.data.data;

        if (responseData && typeof responseData === "object") {
          // Transform object data to arrays for labels and values
          const labels = Object.keys(responseData); // Keys become labels
          const values = Object.values(responseData); // Values become data points

          setChartData({
            labels: labels,
            datasets: [
              {
                label: "Enquiries by Source",
                data: values,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(25, 162, 380, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(153, 152, 205, 0.6)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(143, 152, 25, 0.7)",
                ],
                borderWidth: 1,
              },
            ],
          });
        } else {
          console.error("Response data is not valid or empty.");
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (!chartData) {
    return <p>No data available.</p>;
  }

  return (
    <div>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
