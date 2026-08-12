'use client'
import { useEffect, useState } from 'react';

interface walls {
  id: number;
  name: string;
  description: string;
  url: string;
  preview: string;
  authors: string;
  contest?: string;
}
interface wallsA {
  id: number;
  name: string;
  description: string;
  url: string;
  preview: string;
}
interface wallsB {
  id: number;
  name: string;
  description: string;
  url: string;
  preview: string;
  authors: string;
}

async function fetchWalls(): Promise<void> {
try {
  const response = await fetch('https://raw.githubusercontent.com/SerStars/Nugget-Wallpapers/refs/heads/main/wallpapers-custom.json');
  const wallpapers: walls[] = await response.json();
  const container = document.getElementById('wc');
  
  wallpapers.forEach(wallpaper => {
    const div = document.createElement('div');
    div.className = ` max-w-[90vw] flex flex-col items-center justify-center relative bg-black/25 px-2 py-4 flex flex-col gap-4 group-hover:bg-sky-500/25 transition-all hover:[&>p]:text-white duration-300 no-underline text-white text-center ${wallpaper.contest? 'max-h-200 border-2 border-amber-200/50' : 'max-h-175'}`;
    
    const conteststr = `<div class='bg-amber-200 p-2'><p class='text-black'>${wallpaper.contest?wallpaper.contest:''}</p></div>`

    div.innerHTML = `
      ${wallpaper.contest? conteststr : ''}
      <h3 class='font-bold text-2xl justify-self-start'>${wallpaper.name}</h3>
      <img class='my-auto max-h-110' src="https://raw.githubusercontent.com/SerStars/Nugget-Wallpapers/refs/heads/main/${wallpaper.preview}" alt="${wallpaper.name}"/>
      <p>${wallpaper.description}</p>
      <p>by ${wallpaper.authors}</p>
      <a aria-label='${wallpaper.name} Wallpaper by ${wallpaper.authors}' href="https://raw.githubusercontent.com/SerStars/Nugget-Wallpapers/refs/heads/main/${wallpaper.url}" class='hover:bg-black/40 transition-colors duration-300 bg-black/25 border-2 ${wallpaper.contest? 'border-amber-200/50' : 'border-[#3B82F6]'} p-3 text-xl' download>Download</a>
    `;
    
    container?.appendChild(div);
  });
    
  } catch (error) {
    console.error('Error fetching wallpapers:', error);
  }
}


async function fetchApple(): Promise<void> {
try {
  const response = await fetch('https://raw.githubusercontent.com/SerStars/Nugget-Wallpapers/refs/heads/main/wallpapers-apple.json');
  const wallpapers: wallsA[] = await response.json();
  const container = document.getElementById('wc');
  
  wallpapers.forEach(wallpaper => {
    const div = document.createElement('div');
    div.className = ` max-w-[90vw] flex flex-col items-center justify-center relative bg-black/25 px-2 py-4 flex flex-col gap-4 group-hover:bg-sky-500/25 transition-all hover:[&>p]:text-white duration-300 no-underline text-white text-center max-h-175`;
    div.innerHTML = `
      <h3 class='font-bold text-2xl justify-self-start'>${wallpaper.name}</h3>
      <img class='my-auto max-h-110' src="https://raw.githubusercontent.com/SerStars/Nugget-Wallpapers/refs/heads/main/${wallpaper.preview}" alt="${wallpaper.name}"/>
      <p>${wallpaper.description}</p>
      <a aria-label='${wallpaper.name} Wallpaper by Apple' href="https://raw.githubusercontent.com/SerStars/Nugget-Wallpapers/refs/heads/main/${wallpaper.url}" class='hover:bg-black/40 transition-colors duration-300 bg-black/25 border-2 border-[#3B82F6] p-3 text-xl' download>Download</a>
    `;
    
    container?.appendChild(div);
  });
    
  } catch (error) {
    console.error('Error fetching wallpapers:', error);
  }
}

async function fetchTempPass(e: string): Promise<void> {
try {
  const response = await fetch(e);
  const wallpapers: wallsB[] = await response.json();
  const container = document.getElementById('wc');
  
  wallpapers.forEach(wallpaper => {
    const div = document.createElement('div');
    div.className = ` max-w-[90vw] flex flex-col items-center justify-center relative bg-black/25 px-2 py-4 flex flex-col gap-4 group-hover:bg-sky-500/25 transition-all hover:[&>p]:text-white duration-300 no-underline text-white text-center max-h-175`;
    div.innerHTML = `
      <h3 class='font-bold text-2xl justify-self-start'>${wallpaper.name}</h3>
      <img class='my-auto max-h-110' src="https://raw.githubusercontent.com/SerStars/Nugget-Wallpapers/refs/heads/main/${wallpaper.preview}" alt="${wallpaper.name}"/>
      <p>${wallpaper.description}</p>
      <p>by ${wallpaper.authors}</p>
      <a aria-label='${wallpaper.name} Wallpaper by ${wallpaper.authors}' href="https://raw.githubusercontent.com/SerStars/Nugget-Wallpapers/refs/heads/main/${wallpaper.url}" class='hover:bg-black/40 transition-colors duration-300 bg-black/25 border-2 border-[#3B82F6] p-3 text-xl' download>Download</a>
    `;
    
    container?.appendChild(div);
  });
    
  } catch (error) {
    console.error('Error fetching wallpapers:', error);
  }
}

export default function Home() {
  useEffect(() => {
    fetchWalls();
  }, []);
  function apple(){
    const e = document.getElementById('wc');
    if(e)
    e.innerHTML = ``
    fetchApple()
  }
  function custom(){
    const e = document.getElementById('wc');
    if(e)
    e.innerHTML = ``
    fetchWalls()
  }
  function templ(){
    const e = document.getElementById('wc');
    if(e)
    e.innerHTML = ``
    fetchTempPass('https://raw.githubusercontent.com/SerStars/Nugget-Wallpapers/refs/heads/main/wallpapers-template.json')
  }
  function pass(){
    const e = document.getElementById('wc');
    if(e)
    e.innerHTML = ``
    fetchTempPass('https://raw.githubusercontent.com/SerStars/Nugget-Wallpapers/refs/heads/main/wallpapers-passthemes.json')
  }
  return(
    <section className='relative h-screen'>
      <section className='w-full min-h-screen flex flex-col items-center justify-center pt-10 *:z-10 text-center'>
        <h1 className='text-3xl font-bold'>An unofficial alternate to <a href='https://cowabun.ga' className='text-[#3B82F6]'>cowabun.ga/wallpapers</a></h1>
        <p className='text-xl '>Since cowabun.ga may be down, you can use this website to browse wallpapers.</p>
        <div className='w-max h-15 mb-30 sm:mb-5 grid sm:grid-cols-4 grid-cols-2 items-center text-lg [&>button]:p-2 [&>button]:m-3 [&>button]:bg-black/25 [&>button]:border-2 [&>button]:border-[#3B82F6] [&>button]:cursor-pointer [&>button]:hover:bg-black/50 [&>button]:transition-all [&>button]:duration-300'>
          <button onClick={()=>custom()}>Custom</button>
          <button onClick={()=>apple()}>Apple</button>
          <button onClick={()=>templ()}>Templates</button>
          <button onClick={()=>pass()}>Passthemes</button>
        </div>
        <div id='wc' className='pb-24 z-100 grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3 self-center sm:mx-5'></div>
        <p className='mb-10'>This website is not affiliated with Leminlimez, cowabun.ga, or any related subjects.<br></br>These wallpapers are all free!<br></br>View the source code for this website <a href='https://github.com/squairdev/nugget-wallpaper-list' className='text-[#3B82F6]'>here</a>, and the wallpaper repo <a href='https://github.com/SerStars/Nugget-Wallpapers' className='text-[#3B82F6]'>here</a>.</p>
      </section>
    </section>
  );
}