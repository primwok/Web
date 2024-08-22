"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PageWidth } from "./page-width";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

export function SimpleCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true })
  );

  return (
    <PageWidth>
      <Carousel
        className="w-full"
        plugins={[plugin.current as any]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card
                className="rounded-none"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1723642019190-b44549d0ed21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyMzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjQzNTYzNjl8&ixlib=rb-4.0.3&q=80&w=1080)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <CardContent
                  className="flex items-center justify-center  p-6 h-[83vh] md:h-[30vw] text-white
                  bg-gradient-to-t from-transparent to-black"
                >
                  <div
                    className="h-full w-full flex flex-col gap-4 items-center md:items-start py-6  md:pl-[5rem] text-center md:text-justify md:justify-center 
                    
                  "
                  >
                    <h3 className="text-lg font-semibold">Product Title</h3>
                    <h2 className="text-2xl font-bold md:max-w-lg	break-normal">
                      Designed for your everyday life
                    </h2>
                    <p className="text-sm md:text-base font-normal md:max-w-lg	break-normal	">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Button className="rounded-xl mt-5 p-5">Shop Now</Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:inline-flex left-4" />
        <CarouselNext className="hidden md:inline-flex right-4" />
      </Carousel>
    </PageWidth>
  );
}
