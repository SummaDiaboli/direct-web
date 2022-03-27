import React from "react";

function History() {
    const dataObj = [
        {
            website: "Google",
            token: "A123B-C456D-7ASCSV",
            access: "1/3/2022 3:06 PM GMT+1",
            expires: "3/3/2022 3:20 PM GMT+1",
        },
        {
            website: "Google",
            token: "A123B-C456D-7ASCSV",
            access: "1/3/2022 3:06 PM GMT+1",
            expires: "3/3/2022 3:20 PM GMT+1",
        },
        {
            website: "Google",
            token: "A123B-C456D-7ASCSV",
            access: "1/3/2022 3:06 PM GMT+1",
            expires: "3/3/2022 3:20 PM GMT+1",
        },
        {
            website: "Google",
            token: "A123B-C456D-7ASCSV",
            access: "1/3/2022 3:06 PM GMT+1",
            expires: "3/3/2022 3:20 PM GMT+1",
        },
        {
            website: "Google",
            token: "A123B-C456D-7ASCSV",
            access: "1/3/2022 3:06 PM GMT+1",
            expires: "3/3/2022 3:20 PM GMT+1",
        },
        {
            website: "Google",
            token: "A123B-C456D-7ASCSV",
            access: "1/3/2022 3:06 PM GMT+1",
            expires: "3/3/2022 3:20 PM GMT+1",
        },
        {
            website: "Google",
            token: "A123B-C456D-7ASCSV",
            access: "1/3/2022 3:06 PM GMT+1",
            expires: "3/3/2022 3:20 PM GMT+1",
        },
    ];

    return (
        <div className="pr-12">
            <h3 className="text-white py-4 rounded-md small-caps text-2xl">
                History
            </h3>
            <div className="bg-black">
                <div className="p-4">
                    <div className="flex flex-col space-y-4 p-4">
                        {dataObj.map((data, index) => (
                            <DataComponent {...data} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

type dataProp = {
    website: string;
    token: string;
    access: string;
    expires: string;
};

const DataComponent: React.FC<dataProp> = ({
    website,
    access,
    token,
    expires,
}: dataProp) => (
    <div className="flex flex-col text-white bg-[#383B3F] rounded-sm pl-4 py-2 small-caps ">
        <div className="pb-1 font-bold">{website}</div>
        <div className="flex flex-row space-x-16">
            <div className="flex flex-col space-y-1">
                <div>Token:</div>
                <div>Access Date:</div>
                <div>Expires:</div>
            </div>

            <div className="flex flex-col space-y-1">
                <div>{token}</div>
                <div>{access}</div>
                <div>{expires}</div>
            </div>
        </div>
    </div>
);

export default History;
