import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { StyledBackLogOut, StyledLogOut } from "./style";

export default function LogOut(props: { id: string }) {
    const router = useRouter()
    const logOut = async (e) => {
        e.preventDefault();
        await axios.post('/logout');
        router.push('/homepage/login', null, { scroll: false });
    }

    useEffect(() => {
        router.prefetch('/homepage/login');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <StyledBackLogOut href="/homepage/login" onClick={logOut}>
            <StyledLogOut width="40" height="40" fill={"url(#mygradient" + props.id + ")"} xmlns="http://www.w3.org/2000/svg">
                <path d="M25 21.667c-.922 0-1.667.746-1.667 1.666V30c0 .918-.746 1.667-1.666 1.667h-5v-25a3.36 3.36 0 0 0-2.27-3.169l-.494-.165h7.764c.92 0 1.666.749 1.666 1.667v5a1.666 1.666 0 1 0 3.334 0V5c0-2.757-2.244-5-5-5H3.75c-.063 0-.117.028-.178.037C3.492.03 3.415 0 3.333 0A3.337 3.337 0 0 0 0 3.333v30a3.36 3.36 0 0 0 2.27 3.169l10.03 3.343c.34.105.678.155 1.033.155a3.337 3.337 0 0 0 3.334-3.333V35h5c2.756 0 5-2.243 5-5v-6.667c0-.92-.745-1.666-1.667-1.666Z" />

                <path d="m39.512 15.488-6.667-6.666A1.667 1.667 0 0 0 30 10v5h-6.667a1.667 1.667 0 0 0 0 3.333H30v5a1.667 1.667 0 0 0 2.845 1.178l6.667-6.666a1.665 1.665 0 0 0 0-2.357Z" />

                <defs>
                    <linearGradient id={"mygradient" + props.id} x1="13.333" y1="0" x2="13.333" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#67BC45" /><stop offset="1" stopColor="#096A09" />
                    </linearGradient>
                </defs>
            </StyledLogOut>
            <svg style={{ position: "absolute", zIndex: "-1" }} width="40" height="40" fill="#096A09" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 21.667c-.922 0-1.667.746-1.667 1.666V30c0 .918-.746 1.667-1.666 1.667h-5v-25a3.36 3.36 0 0 0-2.27-3.169l-.494-.165h7.764c.92 0 1.666.749 1.666 1.667v5a1.666 1.666 0 1 0 3.334 0V5c0-2.757-2.244-5-5-5H3.75c-.063 0-.117.028-.178.037C3.492.03 3.415 0 3.333 0A3.337 3.337 0 0 0 0 3.333v30a3.36 3.36 0 0 0 2.27 3.169l10.03 3.343c.34.105.678.155 1.033.155a3.337 3.337 0 0 0 3.334-3.333V35h5c2.756 0 5-2.243 5-5v-6.667c0-.92-.745-1.666-1.667-1.666Z" />

                <path d="m39.512 15.488-6.667-6.666A1.667 1.667 0 0 0 30 10v5h-6.667a1.667 1.667 0 0 0 0 3.333H30v5a1.667 1.667 0 0 0 2.845 1.178l6.667-6.666a1.665 1.665 0 0 0 0-2.357Z" />
            </svg>
        </StyledBackLogOut>
    )
};