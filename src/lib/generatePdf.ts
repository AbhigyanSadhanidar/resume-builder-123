export async function generateResumePDF(data: { name: string; skills: string[] }) {
    const response = await fetch("https://elwo14z2y9.execute-api.ap-south-1.amazonaws.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error("Failed to generate PDF");
    }
  
    const { url } = await response.json();
    return url;
  }
  