import React from "react";
import { FaPencilAlt } from "react-icons/fa";

function ProfileTab() {
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
                        placeholder="1292-23131-A23-D21"
                        className="bg-[#383B3F] w-full text-white rounded-sm pl-2 py-1"
                    />
                </div>
                <br />
                <span className="text-white">
                    <div className="relative">
                        <p className="absolute left-0">Username</p>
                        <p className="absolute right-0">
                            <FaPencilAlt />
                        </p>
                    </div>
                </span>
                <br />
                <div>
                    <input
                        type="text"
                        placeholder="Username"
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
                        placeholder="anyone@mail.com"
                        className="bg-[#383B3F] w-full text-white rounded-sm py-1 pl-2"
                    />
                </div>
                <br />
                <span className="text-white">
                    <div className="relative">
                        <p className="absolute left-0">Phone Number</p>
                        <p className="absolute right-0">
                            <FaPencilAlt />
                        </p>
                    </div>
                </span>
                <br />
                <div>
                    <input
                        type="tel"
                        placeholder="09058531700"
                        className="bg-[#383B3F] w-full text-white rounded-sm py-1 pl-2"
                        maxLength={11} 
                    />
                </div>
                <br />
                <span className="text-white">
                    <div className="relative">
                        <p className="absolute left-0">Address</p>
                        <p className="absolute right-0">
                            <FaPencilAlt />
                        </p>
                    </div>
                </span>
                <br />
                <div>
                    <textarea className="bg-[#383B3F] w-full text-white rounded-sm py-1 pl-2" placeholder="Enter your Address.." />
                </div>
            </div>
        </div>
    );
}

export default ProfileTab;
