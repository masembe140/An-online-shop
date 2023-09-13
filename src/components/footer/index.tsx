import {component$} from '@builder.io/qwik';

export default component$(()=>{
  return(
    <footer class="footer p-10 bg-base-200 text-base-content sm:flex sm:justify-between">
      <div>
        <div class="font-bold text-red-500 text-2xl">ECOMMERCE</div>
        <p>In officia arcu lacus lorem velit etiam debitis molestie,<br/>
          urna voluptatem veritatis tellus praesent. Quisque earum<br/>
          perferendis ab? Nostra! Convallis? Sodales aliquip fermentum<br/>
          viverra modi aenean! Totam sint similique sapiente pharetra <br/>similique, occaecati</p>
      </div>
      <div>
        <span class="footer-title">Services</span>
        <a class="link link-hover">Branding</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Marketing</a>
        <a class="link link-hover">Advertisement</a>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </div>
      <div>
        <span class="footer-title">Legal</span>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </div>
    </footer>
  )
})