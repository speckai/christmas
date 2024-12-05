"use client";

import { Box, Grid, Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveCalendar } from "@nivo/calendar";

const monthlyInstallationsData = [
  {
    id: "installations",
    data: [
      { x: "Jan", y: 5 },
      { x: "Feb", y: 3 },
      { x: "Mar", y: 2 },
      { x: "Apr", y: 1 },
      { x: "May", y: 0 },
      { x: "Jun", y: 0 },
      { x: "Jul", y: 0 },
      { x: "Aug", y: 2 },
      { x: "Sep", y: 8 },
      { x: "Oct", y: 15 },
      { x: "Nov", y: 25 },
      { x: "Dec", y: 30 },
    ],
  },
];

const revenueData = [
  {
    month: "Jan",
    revenue: 5000,
  },
  {
    month: "Feb",
    revenue: 3000,
  },
  {
    month: "Mar",
    revenue: 2000,
  },
  {
    month: "Apr",
    revenue: 1000,
  },
  {
    month: "May",
    revenue: 0,
  },
  {
    month: "Jun",
    revenue: 0,
  },
  {
    month: "Jul",
    revenue: 0,
  },
  {
    month: "Aug",
    revenue: 2000,
  },
  {
    month: "Sep",
    revenue: 8000,
  },
  {
    month: "Oct",
    revenue: 15000,
  },
  {
    month: "Nov",
    revenue: 25000,
  },
  {
    month: "Dec",
    revenue: 30000,
  },
];

const satisfactionData = [
  {
    id: "Very Satisfied",
    label: "Very Satisfied",
    value: 65,
    color: "hsl(141, 70%, 50%)",
  },
  {
    id: "Satisfied",
    label: "Satisfied",
    value: 25,
    color: "hsl(95, 70%, 50%)",
  },
  {
    id: "Neutral",
    label: "Neutral",
    value: 8,
    color: "hsl(58, 70%, 50%)",
  },
  {
    id: "Unsatisfied",
    label: "Unsatisfied",
    value: 2,
    color: "hsl(0, 70%, 50%)",
  },
];

// Generate installation calendar data
const generateCalendarData = () => {
  const data = [];
  const currentYear = new Date().getFullYear();
  const startDate = new Date(currentYear, 0, 1);
  const endDate = new Date(currentYear, 11, 31);

  for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    // More installations during holiday season (Oct-Dec)
    let value = 0;
    const month = d.getMonth();
    if (month >= 9 && month <= 11) {
      value = Math.floor(Math.random() * 5) + 1;
    } else if (month === 0 || month === 8) {
      value = Math.floor(Math.random() * 3);
    }
    
    if (value > 0) {
      data.push({
        day: d.toISOString().split('T')[0],
        value: value,
      });
    }
  }
  return data;
};

export default function DashboardPage() {
  return (
    <Box p={8}>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={6}
        mb={8}
      >
        <Card>
          <CardHeader>
            <Heading size="md">Monthly Installations</Heading>
          </CardHeader>
          <CardBody>
            <Box h="300px">
              <ResponsiveLine
                data={monthlyInstallationsData}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: "point" }}
                yScale={{ type: "linear", min: 0, max: "auto" }}
                curve="cardinal"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                }}
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabelYOffset={-12}
                useMesh={true}
                colors={["#E53E3E"]}
                theme={{
                  axis: {
                    ticks: {
                      text: {
                        fill: "#2D3748",
                      },
                    },
                  },
                  grid: {
                    line: {
                      stroke: "#E2E8F0",
                    },
                  },
                }}
              />
            </Box>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="md">Monthly Revenue</Heading>
          </CardHeader>
          <CardBody>
            <Box h="300px">
              <ResponsiveBar
                data={revenueData}
                keys={["revenue"]}
                indexBy="month"
                margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: "linear" }}
                colors={["#38A169"]}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  format: value => `$${value / 1000}k`,
                }}
                theme={{
                  axis: {
                    ticks: {
                      text: {
                        fill: "#2D3748",
                      },
                    },
                  },
                  grid: {
                    line: {
                      stroke: "#E2E8F0",
                    },
                  },
                }}
              />
            </Box>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="md">Customer Satisfaction</Heading>
          </CardHeader>
          <CardBody>
            <Box h="300px">
              <ResponsivePie
                data={satisfactionData}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
                theme={{
                  labels: {
                    text: {
                      fill: "#2D3748",
                    },
                  },
                }}
              />
            </Box>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="md">Installation Calendar</Heading>
          </CardHeader>
          <CardBody>
            <Box h="300px">
              <ResponsiveCalendar
                data={generateCalendarData()}
                from={`${new Date().getFullYear()}-01-01`}
                to={`${new Date().getFullYear()}-12-31`}
                emptyColor="#eeeeee"
                colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
                margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                yearSpacing={40}
                monthBorderColor="#ffffff"
                dayBorderWidth={2}
                dayBorderColor="#ffffff"
                theme={{
                  labels: {
                    text: {
                      fill: "#2D3748",
                    },
                  },
                }}
              />
            </Box>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
}