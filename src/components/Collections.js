import React from 'react'
import Image from 'next/image'
import Button from './Button'
import { collections } from '../data'
function Collections() {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <h2 className="text-3xl font-bold mb-4">Our Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Collection items go here */}
        {/* Example categories: x, y, z */}
        {collections.map((cat) => (
            <div
                key={cat.name}
                className="bg-white rounded-lg shadow-lg m-2 overflow-hidden flex flex-col items-center transition-transform hover:scale-105">
                <Image
                    src={cat.image}
                    alt={cat.name}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover"
                    style={{ objectFit: 'cover', width: '100%', height: '12rem' }}
                />
                <div className="p-4 flex flex-col items-center">
                    <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
                    <p className="text-gray-600 mb-4 text-center">{cat.description}</p>
                    <Button className="bg-blue-600 text-white text-xs md:text-sm lg:text-lg px-4 py-2 rounded hover:bg-blue-700 transition">
                        Shop Now
                    </Button>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Collections
