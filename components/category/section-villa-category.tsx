import React from 'react';
import CardVillaStudio from '../home/card-villa-studio';
import { Villa } from '@prisma/client';
import FilterSelect from '../filter-select';

type propsSectionVillaCategory = {
  data: Villa[];
  searchParams: {
    sort: string;
  };
};

const SectionVillaCategory = ({
  data,
  searchParams,
}: propsSectionVillaCategory) => {
  return (
    <div className='mb-[100px] flex min-h-screen items-center'>
      <div className='container space-y-6 md:space-y-[48px]'>
        <div className='flex justify-between'>
          <h1 className='text-neutral-90 text-xl leading-5 tracking-[-0.24px] md:text-start md:text-h1 md:leading-[44px] md:tracking-[-0.92px] font-bold'>
            Our choise of <span className='text-green'> Villa Studios</span>
          </h1>
          <FilterSelect
            options={[
              {
                value: 'asc',
                label: 'Lowest',
              },
              {
                value: 'desc',
                label: 'Highest',
              },
            ]}
            name='sort'
            placeholder='Sort by'
            defaultValue={searchParams.sort}
          />
        </div>
        <div className='grid relative grid-cols-2 md:grid-cols-3 gap-[21px] md:gap-[26px] mb-2'>
          {data.map((value) => (
            <CardVillaStudio
              key={value.id}
              title={value.name}
              image={value.image}
              bed={value.bed}
              mainFacilities={
                'Wifi provide, TV & Karaoke, Kitchen, Swimming pool'
              }
              person={value.person}
              price={value.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionVillaCategory;
