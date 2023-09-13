import {component$, useSignal, useStore} from "@builder.io/qwik";

export  default component$(()=>{

    const activeTab = useSignal('');

    const tabs = useStore([
        {
            label: 'ALL',
            category: '',
        },{
            label: 'TOP RATED',
            category: 'topRated',
        },{
            label: 'BEST SELLER',
            category: 'bestSellers',
        },{
            label: 'NEW ARRIVALS',
            category: 'newArrivals',
        },
    ])

    return(
        <div>
            <div>
                <div class="flex uppercase justify-center mt-2 p-2 text-gray-700 font-bold text-xl">
                    <p>our featured products</p>
                </div>
                <div class="flex uppercase justify-center mt-4 gap-2">
                    {tabs.map((tab)=>{
                        return(
                            <div class={`cursor-pointer justify-between p-2 text-gray-700 ${activeTab.value==tab.category ? "p-2 bg-slate-900 text-white btn":''}`} onClick$={()=>{
                                activeTab.value=tab.category
                            }}>{tab.label}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
})