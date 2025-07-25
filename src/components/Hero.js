import React from 'react'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'
function Hero() {
return (
    <div className="flex flex-col-reverse md:flex-row overflow-hidden items-center justify-between bg-gray-100 md:m-6 m-2 rounded-2xl">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center mt-8 ml-12 md:mt-0">
            <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
                Discover our curated collection
            </h1>
            <p className="md:text-lg text-xs text-gray-600">
                Explore handpicked selections tailored just for you
            </p>
            <div className="py-4 px-2 flex justify-between items-center w-auto">
                    <Button className="w-full text-xs px-4 md:px-6 py-2 md:text-xs lg:text-lg">
                        <Link href="/products" className="text-white">Explore Products</Link>
                    </Button>
            </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
                src="/assets/hero.webp"
                alt="Hero"
                width={500}
                height={400}
                className="md:rounded-br-2xl rounded-tr-2xl rounded-tl-2xl md:rounded-tl-none object-cover w-full h-64 md:h-96"
                priority
            />
        </div>
    </div>
)
}
export default Hero
