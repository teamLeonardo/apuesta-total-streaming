import { getAllShow } from '@/modules/shows/application/get/getAllShow';
import { getByIdShow } from '@/modules/shows/application/get/getById';
import { TypeShow } from '@/modules/shows/domain/showType';

import { apiShows as createApiShows } from '@/modules/shows/infra/apiShow';

import { useState } from 'react';

const apiShow = createApiShows();


export function useShowsData() {
    const [data, setData] = useState<TypeShow | TypeShow[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    async function send(params: any) {
        setLoading(true)
        try {
            const fecths: any = params.id ? getByIdShow(apiShow) : getAllShow(apiShow);
            const dataGet: TypeShow = await fecths(params);
            if (Array.isArray(dataGet) && Array.isArray(data)) {
                setData([...data, ...dataGet]);
            } else {
                setData(dataGet)
            }
            setLoading(false);
            return dataGet

        } catch (error: any) {
            setError(error);
            setLoading(false);
        }
    }

    return { data, loading, error, send };
}

