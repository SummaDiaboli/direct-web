import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Logo from "../../assets/images/Icon_Logo.svg";
import { useEffect } from "react";

const MagicPage = () => {
    const userCode: (string | number)[] = ["", "", "", "", "", ""];

    const generateInputFields = () => {
        const elements = [];
        for (let index = 0; index < 6; index++) {
            elements.push(
                <input
                    autoComplete="new-password"
                    key={`input${index}`}
                    className="border-black border w-10 h-12 rounded-lg px-3 flex flex-row justify-center"
                    maxLength={1}
                    onChange={(e) => {
                        handleInput(e, index);
                    }}
                    defaultValue={userCode[index]}
                />
            );
        }
        return elements;
    };

    const handleInput = (
        e: React.ChangeEvent<HTMLInputElement>,
        currentIndex: number
    ) => {
        /* Makes sure the key pressed is alphanumeric */
        const key = e.target.value.toLowerCase();
        if (key.length !== 1) {
            return;
        }
        const isLetter = key >= "a" && key <= "z";
        const isNumber = key >= "0" && key <= "9";
        if (isLetter || isNumber) {
            userCode[currentIndex] = key;
            const form = e.currentTarget.form!;
            const index = [...form].indexOf(e.currentTarget);
            // Focus on the next input field in the form
            if (index < 5) {
                (form.children[index + 1] as HTMLElement)?.focus();
            }

            validateCode();
        }
    };

    const validateCode = () => {
        /* Makes sure there is no empty string in the userCode */
        const validate: boolean[] = [false, false, false, false, false, false];
        userCode.map((value, index) => {
            if (value === "") {
                validate[index] = false;
            } else {
                validate[index] = true;
            }
        });
        if (!validate.includes(false)) {
            console.log("valid");
            console.log(userCode);
        } else {
            console.log("invalid");
        }
    };

    return (
        <div className="bg-[#383B3F] min-h-screen">
            <Header />

            <div className="flex flex-row justify-center mt-12 min-h-fit mb-14">
                <div className="flex flex-col items-center bg-white w-1/3 min-h-[30.5rem] py-10 px-7 rounded-md">
                    <img src={Logo} className="h-20" />
                    <div className="small-caps text-2xl">Sign Up</div>

                    <div className="flex flex-col space-y-6 mt-8">
                        <div className="small-caps">
                            A Magic Code has been sent to your email. Type out
                            the code below:
                        </div>

                        <div>
                            <form
                                autoComplete="off"
                                className="flex flex-row justify-center space-x-5"
                            >
                                {generateInputFields()}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default MagicPage;
