import React, { useState } from 'react';
import Navbar from "@/components/homeComponents/Navbar";
import Header from '@/components/homeComponents/Header';
import Colors from '@/components/homeComponents/Colors';
import Typography from '@/components/homeComponents/Typography';
import Buttons from '@/components/homeComponents/Buttons';
import Forms from '@/components/homeComponents/Forms';
import Alert from '@/components/homeComponents/Alerts';
import Navigation from '@/components/homeComponents/Navigation';
import List from '@/components/homeComponents/List';
import Footer from '@/components/homeComponents/Footer';

export default function Home() {
  return (
    <main className=''>
      <Navbar />
      <Header />
      <Colors />
      <Typography />
      <Buttons />
      <Forms />
      <Alert />
      <Navigation />
      <List />
      <Footer />
    </main>
  );
}
