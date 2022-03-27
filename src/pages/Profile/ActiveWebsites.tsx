import React from "react";
import { FaSyncAlt, FaTrash } from "react-icons/fa";

function ActiveWebsites() {
    const mockData = [
        {
            website: "Google",
            token: "A123B-C456D-7ASCSV",
            accessed: "1/3/2022 3:06 PM GMT+1",
            expires: "3/3/2022 3:20 PM GMT+1",
        },
        {
            website: "Reddit",
            token: "A123B-C456D-7ASCSV",
            accessed: "1/3/2022 3:06 PM GMT+1",
            expires: "3/3/2022 3:20 PM GMT+1",
        },
        {
            website: "Uni",
            token: "A123B-C456D-7ASCSV",
            accessed: "1/3/2022 3:06 PM GMT+1",
            expires: "3/3/2022 3:20 PM GMT+1",
        },
    ];

    return (
        <div className="pl-12 mt-12">
            <h3 className="text-white py-4 rounded-md small-caps text-2xl">
                Active Websites
            </h3>
            <div className="bg-black">
                <div className="flex flex-col space-y-5 p-4">
                    {mockData.map((data, index) => (
                        <TokenComponent {...data} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

type TokenProp = {
    website: string;
    token: string;
    accessed: string;
    expires: string;
};

const TokenComponent: React.FC<TokenProp> = ({
    accessed,
    expires,
    token,
    website,
}: TokenProp) => (
    <div className="flex flex-col text-white bg-[#383B3F] rounded-sm pl-4 py-2 small-caps">
        <div className="pb-1 font-bold">{website}</div>
        <div className="flex flex-row space-x-16">
            <div className="flex flex-col space-y-1">
                <div>Token:</div>
                <div>Access Date:</div>
                <div>Expires:</div>
            </div>

            <div className="flex flex-col space-y-1">
                <div className="flex flex-row items-center space-x-3">
                    <div>{token}</div>
                    <div>
                        <FaSyncAlt size={12} className="hover:cursor-pointer" />
                    </div>
                </div>
                <div>{accessed}</div>
                <div className="flex flex-row items-center min-w-[22rem] justify-between">
                    <div>{expires}</div>
                    <div>
                        <FaTrash size={18} className="hover:cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ActiveWebsites;
