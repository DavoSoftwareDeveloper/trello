

function List({children, name, handleDrop, id}) {

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  return (
    <div data-list={id} onDragOver={handleDragOver} onDrop={handleDrop} className="p-4 bg-slate-400 rounded-md flex-1">
      <h2 className="mb-4 text-gray-900 font-bold">{name}</h2>
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </div>
  )
}

export default List
