import React from 'react';

export const plan = [
  {
    id: 1,
    planType: 'Basic',
    capacity: '100GB',
    price: '$1.99/month',
    storage: '100 GB storage',
    addMembers: 'Option to add members',
    memberBenefits: 'Extra member benefits',
  },
  {
    id: 2,
    planType: 'Standard',
    capacity: '200GB',
    price: '$3.99/month',
    storage: '200 GB storage',
    addMembers: 'Option to add members',
    memberBenefits: 'Extra member benefits',
  },
  {
    id: 3,
    planType: 'Premium',
    capacity: '2TB',
    price: '$8.99/month',
    storage: '2TB storage',
    addMembers: 'Option to add members',
    memberBenefits: 'Extra member benefits',
  },
];

export const Card = () => {
  return (
    <div className='py-64 text-white'>
      <div className='grid grid-cols-3 gap-4'>
        {plan.map(
          ({
            id,
            capacity,
            planType,
            price,
            storage,
            addMembers,
            memberBenefits,
          }: any) => (
            <div
              key={id}
              className='group py-6 border-8 border-slate-700 rounded-lg text-center text-xs hover:border-violet-600'
            >
              <span className='uppercase font-sans'>{planType}</span>
              <div className='py-8 space-y-3'>
                <span className='block font-serif text-4xl'>{capacity}</span>
                <span className='block'>{price}</span>
                <button className='py-2 px-8 border border-violet-700 rounded-md text-xxs font-light group-hover:bg-violet-600 group-hover:border-violet-700'>
                  Purchase
                </button>
              </div>
              <div className='py-4 space-y-2 border-t border-slate-700'>
                <span className='flex justify-center items-center'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    stroke='#FFFFFF'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='mx-2'
                  >
                    <polyline points='20 6 9 17 4 12'></polyline>
                  </svg>
                  {storage}
                </span>
                <span className='flex justify-center items-center'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    stroke='#FFFFFF'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='mx-2'
                  >
                    <polyline points='20 6 9 17 4 12'></polyline>
                  </svg>
                  {addMembers}
                </span>
                <span className='flex justify-center items-center'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    stroke='#FFFFFF'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='mx-2'
                  >
                    <polyline points='20 6 9 17 4 12'></polyline>
                  </svg>
                  {memberBenefits}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
