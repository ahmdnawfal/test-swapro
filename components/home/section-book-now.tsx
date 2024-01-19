import { Button } from '../ui/button';

const SectionBookNow = () => {
  return (
    <div className='bg-book-now min-h-[221px] md:min-h-[520px] flex items-center'>
      <div className='container flex flex-col gap-6 '>
        <div className='flex flex-col gap-2'>
          <h1 className='text-white text-center text-xl leading-5 tracking-[-0.24px] md:text-start md:text-h1 md:leading-[44px] md:tracking-[-0.92px] font-bold'>
            Make your comfort is
          </h1>
          <h1 className='text-white text-center text-xl leading-5 tracking-[-0.24px] md:text-start md:text-h1 md:leading-[44px] md:tracking-[-0.92px] font-bold'>
            our happiness
          </h1>
        </div>
        <div className='flex justify-center md:justify-start'>
          <Button className='bg-[#F1F6F6] hover:bg-[#F1F6F6]/90 hover:text-green/90 rounded-[5px] text-green text-xs h-[39px] w-[190px] md:w-max md:h-[54px] md:text-xl'>
            Book now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionBookNow;
