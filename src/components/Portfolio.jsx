'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback } from 'react';
import JS from '../../public/JXS.webp';
import pix from '../../public/pixperfekt.webp';
import myst from '../../public/mystry-msg.webp';

const Portfolio = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <section id="portfolio" className="section-spacing pb-0">
      <div className="container">
        <div className="embla bg-charcoal">
          <h2 className="display-2 font-family-tertiary fw-semi-bold stroke-text text-fade mb-0">
            My Recent Works
          </h2>
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {' '}
              <div className="embla__slide">
                <a href="https://justinxshaw.com/">
                  <Image
                    src={JS}
                    alt="Your image description"
                    layout="responsive"
                    width={16}
                    height={9} // Adjust this for different aspect ratios
                  />
                </a>
              </div>
              <div className="embla__slide">
                <a href="https://pixperfekt.com/">
                  <Image
                    src={pix}
                    alt="Your image description"
                    layout="responsive"
                    width={16}
                    height={9} // Adjust this for different aspect ratios
                  />
                </a>
              </div>
              <div className="embla__slide">
                <a href="https://mystery-msg-liart.vercel.app">
                  <Image
                    src={myst}
                    alt="Your image description"
                    layout="responsive"
                    width={16}
                    height={9} // Adjust this for different aspect ratios
                  />
                </a>
              </div>{' '}
            </div>
          </div>
          <button
            className="embla__prev nav-btn button-circle-gradient"
            onClick={scrollPrev}
          >
            <i className="fa fa-caret-left" aria-hidden="true"></i>
          </button>
          <button
            className="embla__next nav-btn button-circle-gradient"
            onClick={scrollNext}
          >
            <i className="fa fa-caret-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
