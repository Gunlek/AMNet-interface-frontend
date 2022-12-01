import React, { useEffect, useState } from "react";
import { user } from "../../components/Utils/types";
import dynamic from "next/dynamic";
const ErrorP = dynamic(() => import("../Text/style").then((mod) => mod.ErrorP));
const AnimatePresence = dynamic(() => import("framer-motion").then((mod) => mod.AnimatePresence));
const MotionDiv = dynamic<any>(() => import("framer-motion").then((mod) => mod.motion.div));

export default function useForm(
    active_proms: number,
    usins_state: boolean,
    user?: user
) {
    const promotion = {
        new: (usins_state ? active_proms + 1801 : active_proms + 1).toString(),
        active: active_proms.toString(),
        old: (active_proms - 1).toString()
    };
    const [isOther, setOther] = useState(false);
    const [onBlurPassword, setOnBlurPassword] = useState(false);
    const [onBlurPhone, setOnBlurPhone] = useState(false);

    const [form, setForm] = useState(user ?
        {
            user_name: user.user_name || "",
            user_firstname: user.user_firstname || "",
            user_lastname: user.user_lastname || "",
            user_email: user.user_email || "",
            user_phone: user.user_phone || "",
            user_proms: user.user_proms || promotion.new,
            user_bucque: user.user_bucque || "",
            user_fams: user.user_fams || "",
            user_campus: user.user_campus || "Li",
            user_password: "",
            user_password2: "",
            user_is_gadz: user.user_is_gadz || false,
            user_pay_status: user.user_pay_status || false,
            user_rank: user.user_rank || "user"
        }
        :
        {
            user_name: "",
            user_firstname: "",
            user_lastname: "",
            user_email: "",
            user_phone: "",
            user_proms: promotion.new,
            user_bucque: "",
            user_fams: "",
            user_campus: "Li",
            user_password: "",
            user_password2: "",
            user_is_gadz: !usins_state,
            user_pay_status: false,
            user_rank: "user"
        }
    );

    const [error, setError] = useState({
        user_name: false,
        user_name_format: false,
        user_email: false,
        user_password: false,
        phone: false,
    });

    const cancelOther = () => {
        setOther(!isOther);
        const newForm = { ...form };
        newForm.user_proms = promotion.new;
        newForm.user_campus = "Li";
        newForm.user_is_gadz =  !usins_state;
        setForm(newForm);
    };

    const handleFormChange = (elmt) => {
        const newForm = { ...form };

        if (elmt.currentTarget.id == "user_proms2") {
            newForm.user_proms = elmt.target.value;
            if (isOther) newForm.user_campus = "";
        }
        else if (elmt.currentTarget.id == "user_proms") {
            newForm.user_is_gadz = (elmt.target.value == promotion.old || elmt.target.value == promotion.active || (elmt.target.value == promotion.new && usins_state));
            setOther(elmt.target.value == "Other");
            if (elmt.target.value == "Other") elmt.target.value = promotion.new;
            newForm[elmt.currentTarget.id] = elmt.target.value;
        }
        else newForm[elmt.currentTarget.id] = elmt.target.value;

        setForm(newForm);
    };

    const handlePasswordChange = (elmt) => {
        const newError = { ...error };
        if (elmt.currentTarget.id === "user_password") newError.user_password = (elmt.target.value !== form.user_password2);
        else newError.user_password = (elmt.target.value !== form.user_password);
        setError(newError);
        handleFormChange(elmt);
    };

    const handleNameChange = (elmt) => {
        const regex = /^[\d\w\ ]*$/;
        const newError = { ...error };
        newError.user_name_format = !regex.test(elmt.target.value);
        setError(newError);
        handleFormChange(elmt);
    };

    const handlePhoneChange = (value: string, isValid: boolean) => {
        const newError = { ...error };
        newError.phone = !isValid;
        setError(newError);
        const newForm = { ...form };
        newForm.user_phone = "+" + value;
        setForm(newForm);
    };

    const blurPassword2 = () => {
        setOnBlurPassword(true);
    };

    const blurPhone = () => {
        setOnBlurPhone(true);
    };

    const errorMessage = {
        name:
            <AnimatePresence>
                {error.user_name &&
                    <ErrorP>
                        Ce nom d&apos;utilisateur est déjà utilisé
                    </ErrorP>
                }
            </AnimatePresence>,
        format_name:
            <AnimatePresence>
                {error.user_name_format &&
                    <ErrorP>
                        Ce nom d&apos;utilisateur n&apos;a pas le bon format
                    </ErrorP>
                }
            </AnimatePresence>,
        email:
            <AnimatePresence>
                {error.user_email &&
                    <ErrorP>
                        Cette adresse mail est déjà utilisée
                    </ErrorP>
                }
            </AnimatePresence>,
        password:
            <AnimatePresence>
                {error.user_password && onBlurPassword &&
                    <MotionDiv
                        style={{ position: "relative" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: 'linear' }}
                    >
                        <ErrorP>
                            Les mots de passe saisis ne sont pas identiques !
                        </ErrorP>
                    </MotionDiv>
                }
            </AnimatePresence>,
        phone:
            <AnimatePresence>
                {error.phone && onBlurPhone &&
                    <ErrorP>
                        Ce numéro de téléphone n&apos;a pas le bon format
                    </ErrorP>
                }
            </AnimatePresence>
    };

    const handleFormErrors = (user_name: boolean, user_email: boolean) => {
        const newError = { ...error };
        newError.user_name = user_name;
        newError.user_email = user_email;
        setError(newError);
    };

    useEffect(() => {
        const input = document.getElementById("user_proms2");
        if (isOther && input) input.focus();
    }, [isOther]);

    useEffect(() => {
        if (error.user_name) document.getElementById("user_name").focus();
        else if (error.user_email) document.getElementById("user_email").focus();
    }, [error.user_name, error.user_email]);

    return {
        form,
        isOther,
        promotion,
        error,
        errorMessage,
        handleFormChange,
        handleFormErrors,
        handlePasswordChange,
        handleNameChange,
        handlePhoneChange,
        cancelOther,
        blurPassword2,
        blurPhone
    }
}