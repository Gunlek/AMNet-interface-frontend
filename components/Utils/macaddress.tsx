const replaceAll = (str: string, search: string, replace: string) => {
    return str.split(search).join(replace);
}

const isMacAddress = (MacAddress: string) => {
    const regex = /^([0-9A-F]{2}){5}([0-9A-F]{2})$/;

    return regex.test(MacAddress)
}

const MacAddressVerification = (MacAddress: string) => {
    const newMacAddress = replaceAll(replaceAll(replaceAll(replaceAll(MacAddress, '-', ''), ':', ''), ' ', ''), ';', '').toUpperCase()
    const Verification = isMacAddress(newMacAddress)

    if (Verification) return newMacAddress
    else return ""
};

export default MacAddressVerification 