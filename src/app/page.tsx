import React, { useState } from 'react';
import Navbar from "@/components/homeComponents/Navbar";
import Header from '@/components/homeComponents/Header';
import Colors from '@/components/homeComponents/Colors';
import Typography from '@/components/homeComponents/Typography';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Colors />
      <Typography />
    </main>
  );
}
