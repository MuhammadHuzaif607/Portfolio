import Portfolio from '@/components/Portfolio';

export default function Home() {
  return (
    <>
      <section id="about" className="section-spacing pb-0">
        <div className="container">
          <div className="row g-4 g-xxl-5">
            <div className="col-12">
              <h1 className="display-3 fw-medium">
                Hi, I&apos;m Huzaif, a passionate Frontend Developer. I craft
                responsive, user-friendly websites that bring designs to life.
              </h1>
              <div className="hire-status mt-3">
                <span className="dot-available"></span>
                Available For Hire
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-spacing pb-0" id="services">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-6 col-xl-4">
              <div className="bg-lighter border-radius p-4 p-md-5 box-shadow position-relative">
                <div className="icon-4xl mb-3 mb-lg-4 mb-xl-5">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <h5 className="fw-medium line-height-140">
                  Crafting seamless and responsive user experiences.
                </h5>
                {/* <a
                  className="button-circle button-corner position-absolute end-0 bottom-0"
                  href="/contact.html"
                >
                  <i className="bi bi-send"></i>
                </a> */}
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-4">
              <div className="bg-lighter border-radius p-4 p-md-5 box-shadow position-relative">
                <div className="icon-4xl mb-3 mb-lg-4 mb-xl-5">
                  <i className="fa-solid fa-chart-simple"></i>
                </div>
                <h5 className="fw-medium line-height-140">
                  Enhancing brand awareness, and generating leads
                </h5>
                {/* <a
                  className="button-circle button-corner position-absolute end-0 bottom-0"
                  href="/contact.html"
                >
                  <i className="bi bi-send"></i>
                </a> */}
              </div>
            </div>
            <div className="col-12 col-xl-4 align-self-stretch">
              <div className="bg-theme border-radius p-4 p-md-5 box-shadow h-100 d-flex align-items-center">
                <div>
                  <div className="h1 display-2 font-family-tertiary fw-semi-bold stroke-text text-fade">
                    2 Years
                  </div>
                  <span className="text-white">
                    enhancing user satisfaction through innovative frontend
                    solutions.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-spacing pb-0">
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-12 col-xl-2  text-xl-start">
              <div className="h1 display-1 fw-medium text-charcoal">1.5</div>
              <p>Years of Experience</p>
            </div>
            <div className="col-12 col-xl-9 col-xxl-10">
              <h2 className="display-6 fw-medium mb-0">
                I specialize in building user-friendly, responsive websites. I
                work with HTML, CSS, JavaScript, and modern frontend frameworks
                to create seamless web experiences.
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="section-spacing">
        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center">
            <div className="col-12 col-xl-7">
              <div className="row g-3">
                <div className="col-6 col-md-4">
                  <div className="client-box bg-lighter-30 border-dashed border-radius p-4 px-lg-5">
                    <a href="#"></a>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="client-box bg-lighter-30 border-dashed border-radius p-4 px-lg-5">
                    <a href="#"></a>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="client-box bg-lighter-30 border-dashed border-radius p-4 px-lg-5">
                    <a href="#"></a>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="client-box bg-lighter-30 border-dashed border-radius p-4 px-lg-5">
                    <a href="#"></a>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="client-box bg-lighter-30 border-dashed border-radius p-4 px-lg-5">
                    <a href="#"></a>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="client-box bg-lighter-30 border-dashed border-radius p-4 px-lg-5">
                    <a href="#"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-5">
              <div className="bg-lighter border-radius box-shadow p-4 p-md-5 position-relative">
                <div className="embla" ref={emblaRef}>
                  <div className="embla__container">
                    <div
                      className="embla__slide"
                      style={{ width: '320px', marginRight: '30px' }}
                      role="group"
                    >
                      <div>
                        <div className="mb-2 icon-sm">
                          <i className="bi bi-star-fill text-golden-yellow"></i>
                          <i className="bi bi-star-fill text-golden-yellow"></i>
                          <i className="bi bi-star-fill text-golden-yellow"></i>
                          <i className="bi bi-star-fill text-golden-yellow"></i>
                          <i className="bi bi-star-fill text-golden-yellow"></i>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt
                        </p>
                        <h5 className="fw-medium mb-0 mt-2">
                          Timothy Patterson
                        </h5>
                      </div>
                    </div>
                    <div
                      className="embla__slide"
                      style={{ width: '320px', marginRight: '30px' }}
                      role="group"
                    >
                      <div>
                        <div className="mb-2 icon-sm">
                          <i className="bi bi-star-fill text-golden-yellow"></i>
                          <i className="bi bi-star-fill text-golden-yellow"></i>
                          <i className="bi bi-star-fill text-golden-yellow"></i>
                          <i className="bi bi-star-fill text-golden-yellow"></i>
                          <i className="bi bi-star-fill text-golden-yellow"></i>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt
                        </p>
                        <h5 className="fw-medium mb-0 mt-2">
                          Timothy Patterson
                        </h5>
                      </div>
                    </div>
                    <div
                      className="embla__slide"
                      style={{ width: '320px' }}
                      role="group"
                    >
                      <div>
                        <div className="mb-2 icon-sm">
                          <i className="bi bi-star-fill text-golden-yellow"></i>
                          <i className="bi bi-star-fill text-golden-yellow"></i>
                          <i className="bi bi-star-fill text-golden-yellow"></i>
                          <i className="bi bi-star-fill text-golden-yellow"></i>
                          <i className="bi bi-star-fill text-golden-yellow"></i>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt
                        </p>
                        <h5 className="fw-medium mb-0 mt-2">
                          Timothy Patterson
                        </h5>
                      </div>
                    </div>
                  </div>
                  ``
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Portfolio />
      <section className="section-spacing pb-0">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-4">
              <div className="progress-box">
                <div className="h6 font-small uppercase fw-medium">HTML</div>
                <div className="animated-progress">
                  <div
                    data-progress="90"
                    style={{ width: ' 90%' }}
                    className="progress-show"
                  ></div>
                </div>
              </div>
              <div className="progress-box mt-4">
                <div className="h6 font-small uppercase fw-medium">CSS</div>
                <div className="animated-progress">
                  <div
                    data-progress="85"
                    style={{ width: ' 85%' }}
                    className="progress-show"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="progress-box">
                <div className="h6 font-small uppercase fw-medium">
                  Javascript
                </div>
                <div className="animated-progress">
                  <div
                    data-progress="80"
                    style={{ width: ' 80%' }}
                    className="progress-show"
                  ></div>
                </div>
              </div>
              <div className="progress-box mt-4">
                <div className="h6 font-small uppercase fw-medium">Next Js</div>
                <div className="animated-progress">
                  <div
                    data-progress="70"
                    style={{ width: ' 70%' }}
                    className="progress-show"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="progress-box">
                <div className="h6 font-small uppercase fw-medium">Python</div>
                <div className="animated-progress">
                  <div
                    data-progress="70"
                    style={{ width: ' 70%' }}
                    className="progress-show"
                  ></div>
                </div>
              </div>
              <div className="progress-box mt-4">
                <div className="h6 font-small uppercase fw-medium">
                  Wordpress
                </div>
                <div className="animated-progress">
                  <div
                    data-progress="70"
                    style={{ width: ' 70%' }}
                    className="progress-show"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="resume" className="section-spacing pb-0">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-xxl-8">
              {/* <div className="row g-2 g-lg-4 mt-3 mt-lg-1">
                <div className="col-12 col-lg-3 text-lg-end">
                  <div className="dashed-box font-small font-family-secondary fw-medium uppercase">
                    2022 (Jan) - 2022(Dec)
                  </div>
                </div>
                <div className="col-12 col-lg-9">
                  <h4>
                    Front End Developer
                    <span className="fst-italic fw-medium text-lighter-30 ps-2">
                      @TechnoTies
                    </span>
                  </h4>
                  <p>
                    Learned many things like HTML,CSS ,Javascript, Jquery and
                    Bootstrap and utilize in projects task
                  </p>
                </div>
              </div> */}
              <div className="row g-2 g-lg-4 mt-3 mt-lg-1">
                <div className="col-12 col-lg-3 text-lg-end">
                  <div className="dashed-box font-small font-family-secondary fw-medium uppercase">
                    2023 (JULY) - 2023(DECEMBER)
                  </div>
                </div>
                <div className="col-12 col-lg-9">
                  <h4>
                    Front End Developer
                    <span className="fst-italic fw-medium text-lighter-30 ps-2">
                      @Aykays
                    </span>
                  </h4>
                  <p>
                    Proficient in building responsive and user-friendly web
                    interfaces using HTML, CSS, and JavaScript frameworks like
                    React..
                  </p>
                </div>
              </div>
              <div className="row g-2 g-lg-4 mt-3 mt-lg-1">
                <div className="col-12 col-lg-3 text-lg-end">
                  <div className="dashed-box font-small font-family-secondary fw-medium uppercase ">
                    2024 (January ) - 2024(June)
                  </div>
                </div>
                <div className="col-12 col-lg-9">
                  <h4>
                    Front-End Developer{' '}
                    <span className="fst-italic fw-medium text-lighter-30 ps-2">
                      @Insitech Digital
                    </span>
                  </h4>
                  <p>
                    Gained expertise in CSS preprocessors (Sass)
                    <br />
                    Adept at using front-end libraries and frameworks
                    (Bootstrap, Tailwind) to create scalable and maintainable
                    designs
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-xxl-4">
              <div className="row g-4">
                <div className="col-12 col-lg-12 ">
                  <div className="bg-theme-secondary border-radius box-shadow p-4 p-md-4 icon-3xl">
                    <i className=" bi bi-mortarboard text-white-50"></i>
                    <div className="mt-3 mt-lg-4">
                      <p className="pb-1 mb-0">2021 - 2025</p>
                      <h5 className="fw-medium mb-1">Software Engineering</h5>
                      <p>University of Karachi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
