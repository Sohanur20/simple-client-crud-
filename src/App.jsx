import { data } from "autoprefixer";



function App() {


  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.target;
    const name = form.name ;
    const email = form.email.value;
  



    const user = { name,email};
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })



    .then(res => res.json())
    .then(data => {
      console.log(data);
    })






  }

  return (
    <>

      <h1>simple crud client</h1>



      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">



            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
             


              <div className="form-control mt-6">
              <input className="btn btn-success" type="submit" value="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
