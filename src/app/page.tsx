import React, { useState } from 'react';
import Navbar from "@/components/homeComponents/Navbar";
import Header from '@/components/homeComponents/Header';
import Colors from '@/components/homeComponents/Colors';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Colors />
    </main>
  );
}
