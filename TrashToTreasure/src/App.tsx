import NavBar from "./components/NavBar"

const App = () => {
  const navItems = [
    { title: 'Home', link: '/' },
    { title: 'Products', link: '/products' },
    { title: 'Categories', link: '/categories', 
      dropdownItems: [
        { title: 'Furniture', link: '/categories/furniture' },
        { title: 'Electronics', link: '/categories/electronics' },
        { title: 'Art', link: '/categories/art' }
      ]
    },
    { title: 'About', link: '/about' },
    { title: 'Contact', link: '/contact' }
  ];

  return (
    <>
      <NavBar 
        brandName="Trash To Treasure" 
        items={navItems}
      />
    </>
  )
}

export default App