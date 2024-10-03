import React, { useState } from 'react';
import Navbar from "@/components/homeComponents/Navbar";
import Header from '@/components/homeComponents/Header';
import Colors from '@/components/homeComponents/Colors';
import Typography from '@/components/homeComponents/Typography';
import Buttons from '@/components/homeComponents/Buttons';
import Forms from '@/components/homeComponents/Forms';

export default function Home() {
  return (
    <main className=''>
      <Navbar />
      <Header />
      <Colors />
      <Typography />
      <Buttons />
      <Forms />
    </main>
  );
}
