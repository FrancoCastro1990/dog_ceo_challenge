import { useCallback } from "react";

export const useClient = () => {

    const callClient = useCallback(async (url, method, body) => {
        try {
            const response = await fetch(url, {
                method,
                body: body ? JSON.stringify(body) : null,
            });
            return response.json();
        } catch (error) {
            return null
        }
    }, [])

    return { callClient }
}
