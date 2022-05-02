
function Main() {
  return (
    <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-stretch bg-sky-100 p-4">
            <div className="justify-self-center rounded-full p-2 bg-sky-500 text-sky-100 w-36 text-center">Szeged</div>
            <div className="justify-self-center rounded-full p-2 bg-sky-500 text-sky-100 w-36 text-center">Tiszabecs</div>
            <div className="justify-self-center rounded-full p-2 bg-sky-500 text-sky-100 w-36 text-center">Záhony</div>
            <div className="justify-self-center rounded-full p-2 bg-sky-500 text-sky-100 w-36 text-center">Szolnok</div>
            <div className="justify-self-center rounded-full p-2 bg-sky-500 text-sky-100 w-36 text-center">Tokaj</div>
        </div>

        <div className="hero min-h-screen bg-sky-100">
                <div className="hero-content text-center bg-sky-200 rounded-lg">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold">Vízállás portál</h1>
                <p className="py-6">Tisza-melletti városok vízállás adatainak lekérdezése.</p>
                <button className="btn btn-primary">Tovább</button>
        </div>
  </div>
</div>


    </div> 
  )
}

export default Main;