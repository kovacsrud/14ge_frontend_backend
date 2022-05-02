
function Vizallas({elem}) {
  return (
    <div className="justify-self-center">

    <div className="card w-96 bg-sky-200 text-sky-800 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{elem.vizAllas}</h2>
        <p>Dátum:{elem.nap}</p>
        <p>Idő:{elem.ido}</p>
                
      </div>
    </div>

  </div>
  )
}

export default Vizallas;