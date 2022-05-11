import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Logo from "../../assets/images/Icon_Logo.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { setCookie } from "react-use-cookie";
import AuthContext from "../../contexts/AuthContext";

const QRPage = () => {
    const { id } = useParams();
    const [loaded, setLoaded] = useState(false);
    const navigation = useNavigate();

    const imgEl = useRef<HTMLImageElement>(null);
    const auth = useContext(AuthContext);

    // const onImageLoaded = () => setLoaded(true);

    const verify = () => {
        // const cookie = getCookie("user");
        // const cookieJson = cookie ? JSON.parse(cookie) : undefined;
        // console.log(cookieExists);
        // if (!cookie)
        axios
            // .get(`http://127.0.0.1:8080/api/verify/${id}`)
            .get(`https://directsecure.herokuapp.com/api/verify/${id}`)
            .then((res) => {
                console.log(res.data);
                setCookie("user", JSON.stringify(res.data));
                auth.updateUserData(res.data);
                navigation(`/profile/${res.data.id}`, {
                    replace: true,
                });
            })
            .catch((err) => {
                console.log(err);
            });

        // navigation(`/profile/${cookieJson.user_id}`, { replace: true });
    };

    useEffect(() => {
        // const img = imgEl.current;
        // console.log(img);

        // if (img) {
        //     img.addEventListener("load", onImageLoaded);
        // verify();
        // console.log(loaded);
        if (loaded) verify();
        //     return () => img.removeEventListener("load", onImageLoaded);
        // }
    }, [loaded]);

    return (
        <div className="bg-[#383B3F] min-h-screen">
            <Header />

            <div className="flex flex-row justify-center mt-12">
                <div className="flex flex-col items-center bg-white w-1/3 min-h-[30.5rem] py-10 rounded-md">
                    <img src={Logo} className="h-20" />
                    <div className="small-caps text-2xl">Login</div>

                    <div className="mt-6">
                        <img
                            ref={imgEl}
                            src={`https://directsecure.herokuapp.com/api/generate/${id}`}
                            onLoad={() => setLoaded(true)}
                        />
                    </div>
                </div>
            </div>

            {/* <div className="mt-16">
                <Footer />
            </div> */}
        </div>
    );
};

export default QRPage;
