export const useClient = () => {

    const callClient = async (url, method, body) => {
        try {
            const response = await fetch(url, {
                method,
                body: body ? JSON.stringify(body) : null,
            });
            return response.json();
        } catch (error) {
            return null
        }
    }

    return { callClient }
}
