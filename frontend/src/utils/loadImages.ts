const backendPort = process.env.BACKEND_PORT || 8000;
const backendHost = process.env.BACKEND_HOST || 'localhost';

export default async function loadImages() {
    const response = await fetch(`http://${backendHost}:${backendPort}/images`);
    return response.json();
}
