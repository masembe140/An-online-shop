import {component$, useComputed$, useContext, useSignal, useStore} from "@builder.io/qwik";
import {CartContext, InputContext, QueryContext} from "~/routes/layout";


export default component$(()=>{

    const cartStore = useStore({
        scrolled: false,
        numItems: 0,
        cart: [],
        model: false,
    });

    const inputHidden = useContext(InputContext)
    const iconHidden = useSignal(false);
    const query = useContext(QueryContext);
    const cart = useContext(CartContext);

    const numberofItems = useComputed$(()=>{
        const itemsCount = cart.value.reduce((sum, item)=>{
            sum += item.qty;
            return sum;
        }, 0)
        return itemsCount;
    })

    return(
        <header class={'p-2 sm:pr-20 sm:pl-20 top-0 fixed left-0 w-screen pr-2 flex justify-between text-gray-700 items-center z-20 pt-2 pb-2' + (cartStore.scrolled ? ' bg-slate-900 shadow text-white' : ' bg-transparent')}
                document:onScroll$={() => {
            if (window.scrollY > 0) {
                cartStore.scrolled = true;
            } else {
                cartStore.scrolled = false;
            }
        }}>
            <div class="font-bold uppercase">
                <a href="">
                    ecommerce
                </a>
            </div>
            <div>
                {inputHidden.value ? null : <label>
                    <input type="text" bind:value={query} placeholder="Type here"
                           class="input input-bordered input-info w-[150px] h-[30px] sm:w-full sm:max-w-xs text-gray-700"
                           onMouseLeave$={() =>{
                               inputHidden.value = true;
                               iconHidden.value = false;
                           }}/>
                </label>}
            </div>
            <div class="flex relative ">
                {iconHidden.value ? null: <p class="cursor-pointer" onClick$={()=>{
                    inputHidden.value = false;
                    iconHidden.value = true
                }}>
                    <i class="fa-solid fa-magnifying-glass pr-4"></i>
                </p>}
                <i class="fa-solid fa-user pr-4"></i>
                <i class="fa-solid fa-cart-shopping"></i>
                <p
                    class="bg-red-300 rounded-full h-5 w-5 text-xs grid place-items-center -top-3 absolute right-4 cursor-pointer"
                    onClick$={() => {
                        cartStore.model = true;
                    }}>{numberofItems.value}</p>
                <i class="fa-solid fa-bars pl-4"></i>

            </div>
        </header>
    )
})