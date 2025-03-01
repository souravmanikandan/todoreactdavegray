const Footer = ({ length }) => {
  return (
    <footer className='bg-slate-500 text-center'>
      {length} List {length === 1 ? "item" : "items"}
    </footer>
  )
}

export default Footer