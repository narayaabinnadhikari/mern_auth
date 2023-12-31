import {Link} from 'react-router-dom';


function Signup() {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibol m-7"> Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Username" id="username" className="bg-slate-100 p-3 rounded-lg" />
        <input type="email" placeholder="Email" id="email" className="bg-slate-100 p-3 rounded-lg" />
        <input type="password" placeholder="Password" id="password" className="bg-slate-100 p-3 rounded-lg" />
        <button className="bg-blue-500 text-white p-3 rounded-lg uppercase hover:opacity-80">Sign Up</button>
      </form>
      <div className='flex gap-2 mt-4'> 
          <p>Have an Account Already?</p>
          <Link to='/signin'>
          <span className="text-blue-600"> Sign In</span>
          </Link>
      
      </div>
    </div>
  )
}

export default Signup