import {
    component$,
    createContextId,
    Signal,
    Slot,
    useContextProvider,
    useSignal,
    useStyles$,
    useVisibleTask$
} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import client from "~/api/feathersapi";



export type CartItem = {
    id: number;
    qty: number;
}

export type ItemsD = {
    id: number;
    price: number;
    category: string;
    name: string;
    image: string;
    shortDescription: string;
    longDescription: string

}

import styles from "./styles.css?inline";

export const InputContext = createContextId<Signal<boolean>>('inputHidden')
export const QueryContext =createContextId<Signal<string>>('query')
export const CartContext = createContextId<Signal<CartItem[]>>('cart');

export const useItemData = routeLoader$<ItemsD[]>( async()=>{
    try {
        const {data} = await client.service('products').find();
        return data;
    } catch (e){
        console.log(e)
    }
})



export const itemContextId = createContextId<Signal<ItemsD[]>>('items')
export const useServerTimeLoader = routeLoader$(() => {
    return {
        date: new Date().toISOString(),
    };
});

export default component$(() => {
    useStyles$(styles);

    const inputHidden = useSignal(true)
    useContextProvider(InputContext, inputHidden)

    const query = useSignal('')
    useContextProvider(QueryContext, query)

    const cart = useSignal<CartItem[]>([])
    useContextProvider(CartContext,cart)

    const items = useItemData()
    useContextProvider(itemContextId, items)

    useVisibleTask$(()=>{
        // when reload === initialize cart from localStorage
        const localStorageCart = localStorage.getItem('cart')
        if(localStorageCart) {
            cart.value = JSON.parse(localStorageCart)
        }
    })
    return (
        <>
            <main>
                <Slot />
            </main>
        </>
    );
});
