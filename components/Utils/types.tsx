export type user = {
    "user_id": number,
    "user_name": string,
    "user_firstname": string,
    "user_lastname": string,
    "user_email": string,
    "user_phone": string,
    "user_bucque": string,
    "user_fams": string,
    "user_campus": string,
    "user_proms": string,
    "user_rank": string,
    "user_is_gadz": boolean,
    "user_pay_status": boolean
}

export type access = {
    access_id: number;
    access_description: string;
    access_mac: string;
    access_proof: string | File;
    access_state: string;
}

export type adminAccess = {
    access_id: number;
    access_description: string;
    access_mac: string;
    access_proof: string;
    access_state: string;
    access_user: number,
    user_name: number, 
    user_pay_status: boolean
}