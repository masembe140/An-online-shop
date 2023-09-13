import {component$, useContext} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import NaBar from "~/components/naBar";
import Carousel from "~/components/carousel";
import Footer from "~/components/footer";
import {InputContext} from "~/routes/layout";
import ItemsCard from "~/components/itemsCard";


export default component$(() => {

  const inputHidden = useContext(InputContext)

  return (
      <>
        <NaBar/>
        {inputHidden.value ? <Carousel/> : null}
        <ItemsCard/>
        <div class="mb-4 p-4 text-gray-700">
          <div class="flex uppercase justify-center mt-4">
            <i class="fa-solid fa-envelope-circle-check"></i>
          </div>
          <div class="flex uppercase justify-center mt-4 ">
            <div class="pr-2 hover-shadow">
              <p>Subscribe to our newsletter </p>
            </div>
          </div>
          <div class="flex justify-center text-sm ">
            <div class="pr-2 hover:shadow">
              <p>and receive $20 coupon for order when you checkout </p>
            </div>
          </div>
          <div class="flex uppercase justify-center mt-4 ">
            <div class="pr-2 hover:shadow">
              <div class="join">
                <input class="input input-bordered w-[150px] join-item sm:w-[400px]" placeholder="Email"/>
                <button
                    class="btn join-item text-white bg-slate-900 hover:text-white rounded-tl-lg rounded-br-lg">
                  subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </>
  );
});

export const head: DocumentHead = {
  title: "ecommerce",
  meta: [
    {
      name: "description",
      content: "An online shopping website",
    },
  ],
};
