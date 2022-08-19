export default function getConfig(token: string){
    const config = {
        headers: { Authorization: `Bearer ${token}`}
      };

    return config;
}