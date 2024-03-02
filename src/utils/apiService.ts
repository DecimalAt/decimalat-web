const BASE_URL = 'https://app.decimal.at';

export const fetchData = async <T>(url: string): Promise<T> => {
    const response = await fetch(BASE_URL + url);

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const data: T = await response.json();
    return data;
}

