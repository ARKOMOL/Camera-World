import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
 const data =[
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    },
];
  export default function AreaCharts() {
   
    return (
        <ResponsiveContainer className="bg-gray-300" width="100%" aspect={3}>
          <AreaChart
            width={200}
            height={60}
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
                 <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="month" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      );
};

// export default DashBoard;
