"use client";

import Card from '@/components/home/card';
import WebVitals from '@/components/home/web-vitals';
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams()
  const carbonFootprint = Number(searchParams.get("carbonFootprint"));
  const carbonFootprintLevel = searchParams.get("carbonFootprintLevel");

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <div className="my-0 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-0 md:grid-cols-1 xl:px-0">
          <Card
            key={1}
            title="Kg de CO2 generas cada día"
            description={`Tu huella de carbono es ${carbonFootprintLevel}, pero aún puedes hacer más para reducirla, descubre como.`}
            large={true}
            demo={<WebVitals value={carbonFootprint} />}
          />
        </div>
      </div>
    </>
  )
}
