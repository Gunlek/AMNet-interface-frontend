export default function getConfig(token: string, contentType?: string){
    const config = {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": contentType || "application/json" }
      };

    return config;
}