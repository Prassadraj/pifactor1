'use client'
import Section from '@/Homepage/Section1/Section';
import Footer from '@/Homepage/Works/Footer/Footer';
import Lenis from '@studio-freight/lenis';
import { Suspense, lazy, useEffect, useState } from 'react';

const Work1 = lazy(() => import('@/Homepage/Works/Work1'));
const PlayReel = lazy(() => import('@/Homepage/Works/PlayReel'));
const Work2 = lazy(() => import('@/Homepage/Works/Work2'));
const Work = lazy(() => import('@/Homepage/Works/3dWorks/Work'));
const Work4 = lazy(() => import('@/Homepage/Works/Work4'));
const Spread = lazy(() => import('@/Homepage/Works/Spread/Spread'));

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Section />
      {show && (
        <Suspense fallback={<div>Loading...</div>}>
          <Work1 />
          <PlayReel />
          <Work2 />
          <Work />
          <Work4 />
          <Spread />
          <Footer/>
        </Suspense>
      )}
    </>
  );
}
