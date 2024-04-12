import { toUpperFirst } from "../helpers/toUpperFirst";

export const Pokemon = ({ myEstado }) => {
  return (
    <div className='flex justify-center flex-col text-center text-2xl gap-5'>
      <p className=' mt-32 font-black text-4xl'>
        {toUpperFirst(myEstado?.name)}
      </p>

      <img src={myEstado.sprites.front_default} alt={myEstado.name} />
      <div className='flex flex-col gap-3'>
        <p>Número Pokedex: {myEstado.id} </p>
        <div>
          {myEstado?.abilities?.map((abilityObj, index) => (
            <p key={index}>
              Habilidad {index + 1}: {abilityObj.ability.name}
            </p>
          ))}
        </div>
        <div className='text-center'>
          <h3 className=' font-black'>Stats: </h3>
          {myEstado.stats.map((myStat, id) => (
            <p key={id}>
              {" "}
              {myStat.stat.name}: {myStat.base_stat}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
