
function Home() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">Welcome to My FUllStack App</h1>
        <p className="mb-4 text-slate-600"> This is a fullstack web app built from following tutorial using MERN (MongoDB, Express, React, NodeJS) stack. It includes authentication features that allow user to sign up, login, logout , update user details like profile image , name etc . Mongoose was used for interaction with the database. APIs were created for different POST, GET request.  </p>
        <p className="mb-4 text-slate-600"> The front end of the application was built with React, using React-router for client side routing. The backend is built with Nodejs and express, using MongoDB as dataase. Authentication is implemented using JSON Web Tokens(JWT). Sensitive details like password were hashed too.  </p>
        <p className="mb-4 text-slate-600"> This app is going to help me in building front end projects in the future. Here I learn many things about API handling too. This app is an starting point for building full stack web apps. I learned how things are done behind the scene.( Before this process I used to think backend is very different than frontend, still I fell the same). This app turns out to be an excelled templete for full stack web apps. </p>
    </div>
  )
}

export default Home