import React, { useState } from 'react'

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(1)

  const slides = [
    <img
      className='block'
      src='/static/sobre-o-programa-1.png'
      key='/static/sobre-o-programa-1.png'
      alt='Selecionados para a primera turma Ingrid e Maxuel exibem seus nootebooks que ganharam de presente'
    />,
    <img
      className='block'
      src='/static/sobre-o-programa-2.png'
      key='/static/sobre-o-programa-2.png'
      alt='Primeira aula de programação na escola Codebuddy'
    />,
    <img
      className='block'
      src='/static/sobre-o-programa-4.png'
      key='/static/sobre-o-programa-4.png'
      alt='Ingrid e Maxuel aprendendo as primeiras lições de programação'
    />
  ]

  const nextSlide = () => setActiveSlide((activeSlide + 1) % slides.length)
  const previousSlide = () => setActiveSlide(activeSlide ? activeSlide - 1 : activeSlide + slides.length - 1)

  return (
    <div className='px-6 pb-6'>
      <div className='flex flex-col justify-center items-center'>
        <div className='max-w-4xl mx-auto relative'>
          {
            slides.map((item, index) => (
              <div
                className={`flex items-center rounded-lg ${activeSlide !== index ? 'hidden' : ''}`}
                key={`img-${item.key}`}
              >
                {item}
              </div>
            ))
          }
          <div className='absolute top-1/2 transform -translate-y-1/2 flex w-full'>
            <div className='flex items-center justify-start w-1/2'>
              <button
                className='bg-gray-200 text-pa-pink hover:bg-pa-pink hover:text-white font-bold shadow-lg rounded-full w-12 h-12 -ml-6'
                onClick={previousSlide}
              >
                    &#8592;
              </button>
            </div>
            <div className='flex items-center justify-end w-1/2'>
              <button
                className='bg-gray-200 text-pa-pink hover:bg-pa-pink hover:text-white font-bold shadow-lg rounded-full w-12 h-12 -mr-6'
                onClick={nextSlide}
              >
                    &#8594;
              </button>
            </div>
          </div>

          <div className='absolute w-full flex items-center justify-center px-4'>
            {
              slides.map((item, index) => (
                <button
                  className={`flex-1 w-4 h-2 mt-4 mx-2 mb-0 rounded-full overflow-hidden transition-colors duration-200 ease-out hover:bg-pa-pink hover:shadow-lg ${activeSlide === index ? 'bg-gray-400' : 'bg-gray-200'}`}
                  onClick={() => setActiveSlide(index)}
                  key={`btn-${item.key}`}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
