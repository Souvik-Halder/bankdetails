import React from 'react'

function Card() {
    const handler = (id) => {
        window.open(`/card/${id}`)
    }
    const options = [
        {
            id: 1,
            name: "Mountain",
            content: "This is the mountain Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."
        },
        {
            id: 2,
            name: "River",
            content: "This is the river Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."
        },
        {
            id: 3,
            name: "Forest",
            content: "This is the forest Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil."
        }
    ]
    return (
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

            {
                options.map((option) => {
                    return (
                        <div key={option.id} class="rounded overflow-hidden shadow-lg">
                            <img class="w-full" src="/mountain.jpg" alt="Mountain" />
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">{option.name}</div>
                                <p class="text-gray-700 text-base">
                                    {option.content}
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span onClick={() => { handler(option.id) }} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div>
                        </div>
                    )
                })
            }

        </div>

    )
}

export default Card
