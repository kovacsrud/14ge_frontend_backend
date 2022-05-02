
function Breed({elem}) {
  return (
    <div className="card w-96 bg-amber-200 text-amber-800 shadow-xl my-3 justify-self-center">
      <div className="card-body">
        <h2 className="card-title">{elem.breed}</h2>
        <p><div class="badge badge-outline text-amber-800 mx-2">Ország</div>{elem.country}</p>
        <p><div class="badge badge-outline text-amber-800 mx-2">Eredet</div>{elem.origin}</p>
        <p><div class="badge badge-outline text-amber-800 mx-2">Szőr hosszúság</div>{elem.coat}</p>
        <p><div class="badge badge-outline text-amber-800 mx-2">Minta</div>{elem.pattern}</p>
        
      </div>
    </div>
  )
}

export default Breed;