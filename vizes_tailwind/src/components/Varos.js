function Varos({ elem }) {
  return (
    <div className="justify-self-center">

      <div className="card w-96 bg-sky-200 text-sky-800 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{elem.varos}</h2>
          <p>Elsőfokú készültség:{elem.ksz1} cm</p>
          <p>Másodfokú készültség:{elem.ksz2} cm</p>
          <p>Harmadfokú készültség:{elem.ksz3} cm</p>
          
        </div>
      </div>

    </div>
  );
}

export default Varos;
