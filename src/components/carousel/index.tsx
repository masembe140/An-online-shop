import {component$} from '@builder.io/qwik';

export default component$(()=>{
  return(
    <div class="carousel w-full">
      <div id="slide1" class="carousel-item relative w-full h-[500px]">
        <img src="../../../public/assets/brooke-cagle-aVT8VkmzML4-unsplash.jpeg " class="w-full object-cover" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide5" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full h-[500px]">
        <img src="../../../public/assets/toa-heftiba-dti56waifB4-unsplash.jpeg" class="w-full object-cover" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">❮</a>
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full h-[500px]">
        <img src="../../../public/assets/jc-gellidon-JM8TkWJ9UIY-unsplash.jpeg" class="w-full object-cover" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">❮</a>
          <a href="#slide4" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full h-[500px]">
        <img src="../../../public/assets/larm-rmah-R1Ku62Z7zqE-unsplash.jpeg" class="w-full object-cover" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-circle">❮</a>
          <a href="#slide5" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide5" class="carousel-item relative w-full h-[500px]">
        <img src="../../../public/assets/toa-heftiba-dti56waifB4-unsplash.jpeg" class="w-full object-cover" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">❮</a>
          <a href="#slide1" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>

  )
})