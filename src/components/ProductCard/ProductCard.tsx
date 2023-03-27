type ProductCardProps = {
  name: string
  imageUrl: string
  price?: number
}

const ProductCard = ({ name, imageUrl, price }: ProductCardProps) => {
  return (
    <div className="h-auto w-full bg-gray-200 p-5">
      <div className="h-1 w-8 bg-black"></div>
      <span className="pt-1 uppercase">{name}</span>{' '}
      <img
        className="aspect-square w-full"
        src={imageUrl}
        alt={`imagem do produto ${name}`}
      />
    </div>
  )
}

export default ProductCard
