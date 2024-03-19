'use client';

import CardSection from '@/components/Home/CardSection';
import ClientsSection from '@/components/Home/ClientsSection';
import SwiperSection from '@/components/Home/SwiperSection';

export default function Home() {
  return (
    <main>
      <SwiperSection />
      <CardSection />
      <ClientsSection />
    </main>
  );
}
