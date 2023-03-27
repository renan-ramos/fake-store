import ProductCard from '../ProductCard/ProductCard'

const Trending = () => {
  const products = [
    {
      id: '123abc',
      name: 'shoes',
      image: 'https://images.placeholders.dev/?width=100&height=50&text=Product'
    },
    {
      id: '123def',
      name: 'bags',
      image: 'https://images.placeholders.dev/?width=100&height=50&text=Product'
    },
    {
      id: '123ghi',
      name: 'accessories',
      image: 'https://images.placeholders.dev/?width=100&height=50&text=Product'
    }
  ]

  return (
    <section className="grid auto-rows-fr gap-y-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-4">
      <div className="relative h-auto border-4 border-solid border-black p-2">
        <p className="text-right text-4xl font-bold">01</p>
        <div className="absolute bottom-2 left-2">
          <div className="h-1 w-8 bg-black"></div>
          <span className="uppercase">trending</span>
        </div>
      </div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          imageUrl={product.image}
        />
      ))}
    </section>
  )
}

export default Trending
