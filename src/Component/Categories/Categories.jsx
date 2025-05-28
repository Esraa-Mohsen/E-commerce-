import React from 'react'
import useCategory from '../../Hooks/useCategory'
import { Link } from 'react-router-dom'


export default function Product() {

let {data} =useCategory()




  return (
<>




 <div className=" py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12  bg-clip-text bg-gradient-to-r text-[#009979]">
          Browse Categories
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {data?.data?.data?.length > 0 ? (
            data.data.data.map((category) => (
              <div
                key={category._id}
                className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-4 p-3 rounded-full bg-emerald-50 group-hover:bg-white transition-colors">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {category.name}
                  </h3>
                  <span className="mt-2 text-sm text-emerald-600 font-medium">
                    Shop Now →
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex justify-center py-20">
              <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </div>














</>
  )
}
