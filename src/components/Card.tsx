export default function Card() {
  return (
    <div className='w-[50vw] h-[8em] border-white border-[1px] rounded-md flex items-center'>
      <div className='w-full flex items-center grow'>
        <div className='h-full flex justify-center items-center m-8'>
          <img src='https://avatars.githubusercontent.com/u/30192333?v=4' alt='user' className='h-[6em] rounded-md' />
        </div>
        <div className='h-full flex flex-col gap-3 p-4 grow'>
          <p>rondDev</p>
          <div className='flex gap-2'>
            <p className='bg-slate-800 pr-2 pl-2 rounded-full'>11 followers</p>
            <p className='bg-slate-800 pr-2 pl-2 rounded-full'>11 following</p>
            <p className='bg-slate-800 pr-2 pl-2 rounded-full'>8 repos</p>
          </div>
        </div>
        <div className='w-12'>
          <button>share</button>
        </div>
      </div>
    </div>
  );
}
