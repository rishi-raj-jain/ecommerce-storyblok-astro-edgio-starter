import slugger from 'slugger'
import classNames from 'classnames'
import { useEffect, useState } from 'react'

const relevanceItems = [
  {
    name: 'Trending',
    filter: 'trending',
  },
  {
    name: 'Price: Low to High',
    filter: 'price-low-to-high',
  },
  {
    name: 'Price: High to Low',
    filter: 'price-high-to-low',
  },
]

const Sidebar = ({ categories }) => {
  const [filter, setFilter] = useState(undefined)
  const [listingItems, setListingItems] = useState(categories)
  const [pathWithoutQuery, setPathWithoutQuery] = useState(undefined)
  useEffect(() => {
    setPathWithoutQuery(window.location.pathname)
    setFilter(new URLSearchParams(window.location.search).get('filter'))
  }, [])
  return (
    <div className="flex w-full flex-col">
      <h2 className="text-md font-medium text-[#FFFFFF]">Relevance</h2>
      {relevanceItems.map((item) => (
        <a
          key={item.name}
          className={classNames(
            'text-md mt-2 cursor-pointer',
            { 'font-light text-[#FFFFFF75]': filter !== item.filter },
            { 'font-medium text-[#FFFFFF]': filter === item.filter }
          )}
          onClick={(e) => {
            e.preventDefault()
            if (typeof window !== undefined) {
              const url = new URL(window.location)
              url.searchParams.set('filter', item.filter)
              window.location.href = url
            }
          }}
        >
          {item.name}
        </a>
      ))}
      <a
        href={`/`}
        className={classNames(
          'text-md mt-7',
          { 'font-light text-[#FFFFFF75]': pathWithoutQuery !== `/` },
          { 'font-medium text-[#FFFFFF]': pathWithoutQuery === `/` }
        )}
      >
        Shop All
      </a>
      {listingItems.map((item) => {
        const productSlug = slugger(item.name)
        return (
          <a
            key={`/commerce/${productSlug}`}
            href={`/commerce/${productSlug}`}
            className={classNames(
              'text-md mt-2',
              { 'font-light text-[#FFFFFF75]': pathWithoutQuery !== `/commerce/${productSlug}` },
              { 'font-medium text-[#FFFFFF]': pathWithoutQuery === `/commerce/${productSlug}` }
            )}
          >
            {item.name}
          </a>
        )
      })}
    </div>
  )
}

export default Sidebar
