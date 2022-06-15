function Card(obj) {
  return (
    <div className='card-wrapper'>
      <div className='card-title'>
        <h1>Name : </h1>
        <h1>{obj.name}</h1>
      </div>
      <div className='card-details'>
        <div className='details'>
          <h3>Age : </h3>
          <h3>{obj.age}</h3>
        </div>
        <div className='details'>
          <h3>Job : </h3>
          <h3>{obj.job}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
