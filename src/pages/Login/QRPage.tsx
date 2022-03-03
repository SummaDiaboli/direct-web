import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Logo from "../../assets/images/Icon_Logo.svg";
import QRCodeSample from "../../assets/images/sample-qr-code.svg";

const QRPage = () => {
    return (
        <div className="bg-[#383B3F] min-h-screen">
            <Header />

            <div className="flex flex-row justify-center mt-12">
                <div className="flex flex-col items-center bg-white w-1/4 min-h-[30.5rem] py-10 rounded-md">
                    <img src={Logo} className="h-20" />
                    <div className="small-caps text-2xl">Login</div>

                    <div className="mt-6">
                        <img src={QRCodeSample} />
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <Footer />
            </div>
        </div>
    );
};

export default QRPage;
