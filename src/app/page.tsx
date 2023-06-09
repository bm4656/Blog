import Carousel from 'react-multi-carousel';
import Profile from '../components/Profile';
import FeaturedPosts from '@/components/FeaturedPosts';
import CarouselPosts from '@/components/CarouselPosts';

export default function HomePage() {
  return (
    <section>
      <Profile />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
      {/* @ts-expect-error Async Server Component */}
      <CarouselPosts />
    </section>
  );
}
