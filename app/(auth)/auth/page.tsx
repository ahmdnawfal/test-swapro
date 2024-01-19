import TabsAuth from '@/components/auth/tabs-auth';

export default function Auth() {
  return (
    <div className='flex justify-center items-center p-5'>
      <div className='flex w-full sm:w-auto flex-col gap-6 justify-start'>
        <TabsAuth />
      </div>
    </div>
  );
}
