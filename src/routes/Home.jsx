import Footer from '@/components/footer/Footer';
import { BentoGridThirdDemo } from '@/components/grid-section/Bento';
import { InfiniteMovingCardsDemo } from '@/components/testimonial/InfiniteMovingCardsDemo';
import { Hero } from '@/components/hero/Hero';

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <BentoGridThirdDemo />
      <InfiniteMovingCardsDemo />
      <Footer />
    </div>
  );
};
export default Home;
