import { Button } from "./Button";
import { Pokemon } from "./Pokemon";
import { SerachPokemon } from "./SerachPokemon";

export const Body = ({
  myEstado,
  inputValue,
  searchByNumber,
  modifyInputNumber,
  aumentar,
  restar,
}) => {
  return (
    <section className='flex justify-center flex-col items-center'>
      <SerachPokemon
        searchByNumber={searchByNumber}
        modifyInputNumber={modifyInputNumber}
        inputValue={inputValue}
      />

      <Pokemon myEstado={myEstado} />

      <div className='text-2xl text-center flex gap-3 mt-20'>
        <Button color='red' onClick={restar}>
          Anterior
        </Button>

        <Button color='green' onClick={aumentar}>
          Siguente
        </Button>
      </div>
    </section>
  );
};
