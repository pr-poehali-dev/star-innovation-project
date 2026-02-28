import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/67bcf35e-bf76-4f83-90d7-056676f33e64/files/b8e737ba-47b8-4d80-ab8f-a922cbdc4bb3.jpg',
  'https://cdn.poehali.dev/projects/67bcf35e-bf76-4f83-90d7-056676f33e64/files/8a31f00c-764d-4cd2-b8cc-8d4efe783fbb.jpg',
  'https://cdn.poehali.dev/projects/67bcf35e-bf76-4f83-90d7-056676f33e64/files/6561aa2e-0019-4d82-b3d0-7ea91f5601fd.jpg',
  'https://cdn.poehali.dev/projects/67bcf35e-bf76-4f83-90d7-056676f33e64/files/f46c9c03-43f1-4e42-92fc-32127155f2c8.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">

            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="inline-block rounded-full border-2 border-yellow-400/60 bg-yellow-400/10 px-4 py-1.5 text-sm font-medium text-yellow-300 backdrop-blur-sm">
                🎮 Инди-игра 2026
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-200 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                Гопник<br />
                <span className="text-yellow-400">на ковре</span>
              </h1>
              <p className="mt-4 text-xl font-light text-white/70 md:text-2xl">
                Летай. Уворачивайся. Выживай.
              </p>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-400 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <p className="max-w-md text-base text-white/60 leading-relaxed">
                Пацан оседлал волшебный ковёр и теперь рассекает над ночным городом. Уворачивайся от летающих мышей, собирай семки и докажи — настоящий гопник не падает никогда.
              </p>
            </div>

            <div
              className={cn(
                'flex flex-wrap gap-4 transform transition-all duration-1000 delay-500 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <button className="rounded-none bg-yellow-400 px-8 py-3 text-base font-bold text-black transition-all hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] active:scale-95">
                ИГРАТЬ БЕСПЛАТНО
              </button>
              <button className="border border-white/30 bg-white/10 px-8 py-3 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20">
                Смотреть трейлер
              </button>
            </div>

            <div
              className={cn(
                'flex gap-8 transform transition-all duration-1000 delay-600 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">∞</div>
                <div className="text-xs text-white/50 uppercase tracking-widest">Уровней</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">🖱️</div>
                <div className="text-xs text-white/50 uppercase tracking-widest">Мышей</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">1</div>
                <div className="text-xs text-white/50 uppercase tracking-widest">Пацан</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-yellow-400' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
