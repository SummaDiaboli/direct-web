import React from "react";
import { FaPencilAlt } from "react-icons/fa";

type Profile = {
    id: string;
    username: string;
    email: string;
    created: string;
    tokenDuration: string;
};

const ProfileTab: React.FC<Profile> = ({
    id,
    username,
    email,
    created,
    tokenDuration,
}) => {
    return (
        <div className="pl-12">
            <h3 className="text-white py-4 rounded-md small-caps text-2xl">
                Profile
            </h3>
            <div className="bg-black p-7 space-y-1">
                <span className="text-white">
                    <div className="relative">
                        <p className="absolute left-0">ID</p>
                    </div>
                </span>
                <br />
                <div>
                    <input
                        type="text"
                        disabled
                        value={id}
                        // placeholder="1292-23131-A23-D21"
                        className="bg-[#383B3F] w-full text-white rounded-sm pl-2 py-1"
                    />
                </div>
                <br />
                <span className="text-white">
                    <div className="relative">
                        <p className="absolute left-0">Username</p>
                        <p className="absolute right-0">
                            {/* <FaPencilAlt /> */}
                        </p>
                    </div>
                </span>
                <br />
                <div>
                    <input
                        type="text"
                        // placeholder="Username"
                        disabled
                        value={username}
                        className="bg-[#383B3F] w-full text-white rounded-sm pl-2 py-1"
                    />
                </div>
                <br />
                <span className="text-white">
                    <div className="relative">
                        <p className="absolute left-0">Email</p>
                        <p className="absolute right-0">
                            <FaPencilAlt />
                        </p>
                    </div>
                </span>
                <br />
                <div>
                    <input
                        type="email"
                        value={email}
                        // placeholder="anyone@mail.com"
                        className="bg-[#383B3F] w-full text-white rounded-sm py-1 pl-2"
                    />
                </div>
                <br />
                <span className="text-white">
                    <div className="relative">
                        <p className="absolute left-0">
                            Default Token Duration (In Days)
                        </p>
                        <p className="absolute right-0">
                            <FaPencilAlt />
                        </p>
                    </div>
                </span>
                <br />
                <div>
                    <input
                        // type="tel"
                        // placeholder="09058531700"
                        value={tokenDuration}
                        className="bg-[#383B3F] w-full text-white rounded-sm py-1 pl-2"
                        // maxLength={11}
                    />
                </div>
                <br />
                <span className="text-white">
                    <div className="relative">
                        <p className="absolute left-0">Account Created</p>
                        <p className="absolute right-0">
                            {/* <FaPencilAlt /> */}
                        </p>
                    </div>
                </span>
                <br />
                <div>
                    <input
                        // type="tel"
                        // placeholder="09058531700"
                        value={created}
                        className="bg-[#383B3F] w-full text-white rounded-sm py-1 pl-2"
                        // maxLength={11}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileTab;
