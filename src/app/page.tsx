"use client";

import Card from '@/components/home/card';
import WebVitals from '@/components/home/web-vitals';
import { Twitter } from '@/components/shared/icons';
import { useSearchParams } from 'next/navigation'
import Balancer from 'react-wrap-balancer';

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
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full bg-custom-blue px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href="https://qf.ethereumargentina.org/#/projects/0x64536b9df071c4bfc768808e98dd4b5084b346c190f14ed0433dc96df9d42f5b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-4 w-4 group-hover:text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 2L10 10L6 18L2 10Z"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Vota por nosotros en Eth Argentina</p>
          </a>
        </div>
        <p
          className="mt-6 animate-fade-up text-center text-black opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            ¿Sabías que un vuelo desde Buenos Aires hasta Mendoza, con una distancia aproximada de 1,000 km, genera alrededor de 120 kg de CO2?
          </Balancer>
        </p>
        <a
          href="https://twitter.com/intent/tweet?text=Acabo%20de%20calcular%20mi%20huella%20de%20carbono%20con%20%40tareagleok%20%C2%BFTe%20animas%20a%20descubrir%20la%20tuya?%20%F0%9F%8C%B1%0A%0ALet's%20make%20a%20difference!%20%F0%9F%8E%AF%0A%0A%23TarEagleArgentina%0A%23JuntosCuidemosElPlaneta"
          target="_blank"
          rel="noreferrer"
          className="my-5 mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-5 overflow-hidden rounded-full bg-blue-100 px-5 py-2 transition-colors hover:bg-blue-200"
        >
          <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Comparte tu resultado en Twitter
          </p>
        </a>
      </div>
    </>
  )
}
