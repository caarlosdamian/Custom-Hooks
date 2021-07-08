import { useState, useEffect } from 'react';
import { getData } from '../Helpers/GetData';

export const useFetch = ({name}) => {

    const [state, setState] = useState({
        data: []
    });

    useEffect(() => {
        getData(name)
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