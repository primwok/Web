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

const images = [
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://media.istockphoto.com/id/1464547973/photo/man-earphones-or-laptop-typing-in-cafe-or-restaurant-for-university-college-or-school.jpg?s=1024x1024&w=is&k=20&c=GMp4GcAkqNGq-5OatB0gHeODucf7WTeE2rexdSeVND4=",
  "https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1620862657788-a403bdf6dd63?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

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
                  backgroundImage: `url(${images[index]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <CardContent
                  className="flex items-center justify-center  p-6 h-[75vh] sm:h-[70vw] md:h-[60vw] lg:h-[34vw] text-white
                  bg-gradient-to-t from-transparent to-black"
                >
                  <div
                    className="h-full w-full flex flex-col gap-4 items-center md:items-start py-6  md:pl-[5rem] text-center md:text-justify md:justify-center 
                    
                  "
                  >
                    <h3 className="text-base font-semibold">
                      Product Title {index + 1}
                    </h3>
                    <h2 className="text-4xl font-bold md:max-w-lg	p-0">
                      Designed for your
                      <br /> everyday life
                    </h2>
                    <p className="text-sm md:text-base font-normal md:max-w-lg	">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Button
                      className="rounded-lg uppercase mt-5 px-8 py-6 font-bold bg-white text-black"
                      size={"sm"}
                    >
                      Shop Now
                    </Button>
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
