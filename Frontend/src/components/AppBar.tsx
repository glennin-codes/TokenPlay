import { Link } from "react-router-dom"

function AppBar() {
  return (
    <div>  
    <header className="bg-indigo-600 text-white p-4 ">
    <div className="container mx-auto flex justify-between items-center">
      <Link to={"/"}
      >
      <h1 className="text-2xl font-bold">TokenPlay</h1></Link>
      <nav>
        <Link

          to="/launchtoken"
          className="hover:text-indigo-200 transition-colors"
        >
          Launch Token
        </Link>
      </nav>
    </div>
  </header></div>
  )
}

export default AppBar