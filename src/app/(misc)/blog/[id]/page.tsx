
export default function BlogPageByID({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      <div>My Post: {params.id}</div>
    </div>
  )
}

