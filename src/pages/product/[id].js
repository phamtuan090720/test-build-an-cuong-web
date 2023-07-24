import React from 'react'
import { useRouter } from 'next/router'

const ProductDetailPage = () => {
  const { query } = useRouter()
  console.log(query)
  return <div>ProductDetail</div>
}

export default ProductDetailPage
