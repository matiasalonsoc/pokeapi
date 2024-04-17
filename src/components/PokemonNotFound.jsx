import { Button } from "./Button";

export const PokemonNotFound = () => {
  return (
    <div className='flex justify-center items-center h-screen flex-col gap-10'>
      <p className=' text-red-500 font-black text-2xl bg-'>
        El Pokemon no existe, intenta con uno nuevo.
      </p>

      <Button color='yellow' onClick={() => window.location.reload()}>
        Volver
      </Button>
    </div>
  );
};
