import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Logo from "../../assets/images/Icon_Logo.svg";
import { useParams } from "react-router-dom";

const QRPage = () => {
    const { id } = useParams();

    return (
        <div className="bg-[#383B3F] min-h-screen">
            <Header />

            <div className="flex flex-row justify-center mt-12">
                <div className="flex flex-col items-center bg-white w-1/3 min-h-[30.5rem] py-10 rounded-md">
                    <img src={Logo} className="h-20" />
                    <div className="small-caps text-2xl">Login</div>

                    <div className="mt-6">
                        <img src={`http://127.0.0.1:8080/api/generate/${id}`} />
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
