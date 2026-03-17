import React from "react";
import "./dashboard.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const stats = [
  { title: "Total Participants", value: 120, change: "+12%" },
  { title: "Active Teams", value: 30, change: "+5%" },
  { title: "Projects Submitted", value: 25, change: "+8%" },
  { title: "Registrations", value: 150, change: "+15%" },
];

const barData = [
  { name: "Day 1", participants: 20 },
  { name: "Day 2", participants: 40 },
  { name: "Day 3", participants: 60 },
  { name: "Day 4", participants: 90 },
  { name: "Day 5", participants: 120 },
];

const pieData = [
  { name: "Web Dev", value: 40 },
  { name: "AI/ML", value: 30 },
  { name: "App Dev", value: 20 },
  { name: "Others", value: 10 },
];

export default function Dashboard() {
  return (
    <div className="container">
      <h1 className="title">Tech Club Hackathon Dashboard</h1>

      <div className="stats">
        {stats.map((item, index) => (
          <div key={index} className="card">
            <h2>{item.title}</h2>
            <p className="value">{item.value}</p>
            <p className="change">{item.change}</p>
          </div>
        ))}
      </div>

      <div className="charts">
        <div className="chart-box">
          <h2>Participation Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="participants" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h2>Project Categories</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100}>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="table-box">
        <h2>Recent Submissions</h2>
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Project</th>
              <th>Status</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alpha</td>
              <td>AI Chatbot</td>
              <td>Submitted</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Beta</td>
              <td>Food App</td>
              <td>Pending</td>
              <td>--</td>
            </tr>
            <tr>
              <td>Gamma</td>
              <td>Portfolio Site</td>
              <td>Reviewed</td>
              <td>90</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
