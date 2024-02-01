"use client"
import React from 'react';
import TicTacTao from '@/components/TicTacTao';
const Home = () => {
  return (
    <div>
      <h1 className='bg-black text-white text-center font-size-lg'>Tic Tac Tao</h1>
      <TicTacTao />
    </div>
  );
};

export default Home;