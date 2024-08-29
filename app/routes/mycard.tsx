import { useParams } from "@remix-run/react";
import { cards } from "./data";
import { useState } from "react";

function Profile({
    id,
    author,
    country,
    imag,
    language,
    title,
    price,
    active,
}: {
    id: number;
    author: string;
    country: string;
    imag: string;
    language: string;
    title: string;
    price: BigInteger;
    active: boolean;
}) {
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex" key={id}>
            <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                    backgroundImage: `url(${imag})`,
                    color: "green",
                }}
                title="Profile image"
            />
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">{author}</div>
                    <p className="text-gray-700 text-base">{country}</p>
                </div>
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src={imag} alt={`${author}'s profile`} />
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">{title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Mycards() {
    const [active, setActive] = useState(true);

    const items = cards.filter(cardItem => cardItem.active === active);

    function handleClickActive() {
        setActive(true);
    }

    function handleClickNonActive() {
        setActive(false);
    }

    return (
        <>
            {items.map(cardItem => (
                <Profile
                    id={cardItem.id}
                    author={cardItem.author}
                    country={cardItem.country}
                    imag={cardItem.imag}
                    language={cardItem.language}
                    title={cardItem.title}
                    price={cardItem.price}
                    active={cardItem.active}
                />
            ))}
            <button
                className="m-3 bg-green-700 text-green-100 rounded-3xl"
                onClick={handleClickActive}
            >
                Show Active
            </button>
            <button
                className="bg-red-700 text-red-100 rounded-3xl"
                onClick={handleClickNonActive}
            >
                Show Inactive
            </button>
        </>
    );
}
