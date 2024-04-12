import { Body } from "./components/Body";
import { PokemonNotFound } from "./components/PokemonNotFound";
import { Spinner } from "./components/Spinner";
import { useFetch } from "./hooks/useFetch";
import { useSearch } from "./hooks/useSearch";

function App() {
  const {
    contador,
    inputValue,
    searchByNumber,
    modifyInputNumber,
    aumentar,
    restar,
  } = useSearch();

  const { myEstado, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${contador} `
  );

  return (
    <div className='p-5'>
      <h1 className='pt-5 text-4xl font-bold'>PokeWiki</h1>
      <hr className='pb-5' />

      {isLoading && <Spinner />}

      {!isLoading &&
        (myEstado && myEstado.data !== null ? (
          <Body
            myEstado={myEstado}
            inputValue={inputValue}
            searchByNumber={searchByNumber}
            modifyInputNumber={modifyInputNumber}
            aumentar={aumentar}
            restar={restar}
          />
        ) : (
          <PokemonNotFound />
        ))}
    </div>
  );
}

export default App;
