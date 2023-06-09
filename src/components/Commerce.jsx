import slugger from 'slugger'
import { filterProducts } from '@/helper'
import Sidebar from '@/components/Sidebar'
import { useEffect, useState } from 'react'
import ProductPreview from '@/components/ProductPreview'

const Commerce = ({ data }) => {
  const [filter, setFilter] = useState(undefined)
  useEffect(() => {
    setFilter(new URLSearchParams(window.location.search).get('filter'))
  }, [])
  return (
    <div className="flex-col items-center justify-start">
      <div className="flex w-full flex-row items-start px-5">
        <div className="flex min-w-[200px] flex-col pt-5">
          <Sidebar categories={data.categories.items} />
        </div>
        <div className="flex flex-col items-start pt-5">
          <h2 className="text-[#FFFFFF75]">Showing {data.products.items.length} Results</h2>
          <div className="sm:grid-cols-2 mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {filterProducts(data.products.items, filter).map((i) => <ProductPreview key={productDetail.slug} {...productDetail} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Commerce
