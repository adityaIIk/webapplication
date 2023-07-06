"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-teal-500 to-blue-500 p-10 flex flex-col justify-center items-center"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <Card className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <Text className="text-6xl font-bold text-center mb-10 text-gray-800">
          WEATHER APP
        </Text>
        <Subtitle className="text-xl text-center text-gray-800">
          Powered By Next.js 13.3, Tailwind CSS, Tremor 2.0+, and More!
        </Subtitle>
        <Divider className="my-10" />
        <Card
          decoration="top"
          decorationColor="blue"
          className="bg-gradient-to-br from-teal-500 to-blue-500 p-6 rounded-lg"
        >
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
