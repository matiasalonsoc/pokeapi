import { CiSearch } from "react-icons/ci";

export const SerachPokemon = ({
  searchByNumber,
  modifyInputNumber,
  inputValue,
}) => {
  return (
    <form onSubmit={searchByNumber} className='flex flex-col gap-3'>
      <label className='font-black' htmlFor='buscador'>
        Ingresa el nombre o numero de la pokedex:
      </label>
      <div className='flex bg-slate-700 items-center justify-center p-3 rounded-xl'>
        <input
          autoComplete='off'
          id='buscador'
          type='text'
          name='buscador'
          className='ring-opacity-0 text-center rounded-xl w-full bg-slate-700 focus:outline-none'
          value={inputValue}
          onChange={modifyInputNumber}
        />
        <CiSearch className='bg-slate-700' />
      </div>
    </form>
  );
};
