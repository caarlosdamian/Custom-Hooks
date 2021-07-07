import { useState, useEffect } from 'react';
import { getData } from '../Helpers/GetData';

export const useFetch = () => {

    const [state, setState] = useState({
        data: []
    });

    useEffect(() => {
        getData()
            .then(response => {
                setState({
                    data: response.data
                })
            })
            .catch((e) => {
                console.log('Ups! You have an error:' + e)
            })
    },[]);

    return state;
};