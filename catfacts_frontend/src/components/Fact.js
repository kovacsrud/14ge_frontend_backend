function Fact({ elem, index }) {
  return (
    <div className="card w-96 bg-amber-200 text-amber-800 shadow-xl my-3 justify-self-center">
      <div className="card-body">
        <h2 className="card-title">{index+1}. Fact</h2>
        <p>{elem.fact}</p>
        
      </div>
    </div>
  );
}

export default Fact;
