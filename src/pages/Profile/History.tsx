import moment from "moment";
import React from "react";

type TokenList = {
    websites: any[];
};

const History: React.FC<TokenList> = ({ websites }) => {
    // const dataObj = [
    //     {
    //         website: "Google",
    //         token: "A123B-C456D-7ASCSV",
    //         access: "1/3/2022 3:06 PM GMT+1",
    //         expires: "3/3/2022 3:20 PM GMT+1",
    //     },
    //     {
    //         website: "Google",
    //         token: "A123B-C456D-7ASCSV",
    //         access: "1/3/2022 3:06 PM GMT+1",
    //         expires: "3/3/2022 3:20 PM GMT+1",
    //     },
    //     {
    //         website: "Google",
    //         token: "A123B-C456D-7ASCSV",
    //         access: "1/3/2022 3:06 PM GMT+1",
    //         expires: "3/3/2022 3:20 PM GMT+1",
    //     },
    //     {
    //         website: "Google",
    //         token: "A123B-C456D-7ASCSV",
    //         access: "1/3/2022 3:06 PM GMT+1",
    //         expires: "3/3/2022 3:20 PM GMT+1",
    //     },
    //     {
    //         website: "Google",
    //         token: "A123B-C456D-7ASCSV",
    //         access: "1/3/2022 3:06 PM GMT+1",
    //         expires: "3/3/2022 3:20 PM GMT+1",
    //     },
    //     {
    //         website: "Google",
    //         token: "A123B-C456D-7ASCSV",
    //         access: "1/3/2022 3:06 PM GMT+1",
    //         expires: "3/3/2022 3:20 PM GMT+1",
    //     },
    //     {
    //         website: "Google",
    //         token: "A123B-C456D-7ASCSV",
    //         access: "1/3/2022 3:06 PM GMT+1",
    //         expires: "3/3/2022 3:20 PM GMT+1",
    //     },
    // ];

    return (
        <div className="pr-12">
            <h3 className="text-white py-4 rounded-md small-caps text-2xl">
                History
            </h3>
            <div className="bg-black">
                <div className="p-4">
                    <div className="flex flex-col space-y-4 p-4">
                        {websites.map((data, index) => (
                            <DataComponent {...data} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

type dataProp = {
    referer: string;
    token: string;
    created: string;
    expires: string;
};

const DataComponent: React.FC<dataProp> = ({
    created,
    expires,
    token,
    referer,
}: dataProp) => (
    <div className="flex flex-col text-white bg-[#383B3F] rounded-sm pl-4 py-2 small-caps">
        <div className="pb-1 font-bold">{referer}</div>
        <div className="grid grid-cols-2 auto-cols-min auto-rows-min">
            {/* <div className="flex flex-col space-y-1 flex-wrap"> */}
            <div>Token:</div>
            <div className="whitespace-nowrap overflow-clip text-ellipsis">
                {token}
            </div>

            <div>Created:</div>
            <div>{moment(created).format("DD MMMM YYYY")}</div>

            <div>Expires:</div>
            <div>{moment(expires).format("DD MMMM YYYY")}</div>

            {/* </div> */}

            {/* <div className="flex flex-col flex-wrap space-y-1"> */}
            {/* <div className="flex flex-row flex-wrap items-center space-x-3"> */}
            {/* <div>
                        <FaSyncAlt size={12} className="hover:cursor-pointer" />
                    </div> */}
            {/* </div> */}
            {/* <div className="flex flex-row items-center min-w-[20rem] justify-between"> */}
            {/* <div>
                        <FaTrash size={18} className="hover:cursor-pointer" />
                    </div> */}
            {/* </div> */}
            {/* </div> */}
        </div>
    </div>
);

export default History;
