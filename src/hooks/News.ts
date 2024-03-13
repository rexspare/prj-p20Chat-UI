import useApi, { BASE_URL, } from './api';
import { Alert } from 'react-native';
import React, { useState } from 'react'
import { ROUTES } from '../assets/constants';
import { newsStateSelectors, useNews } from '../states/news';

const useNewsApi = () => {
    const setNews = useNews(newsStateSelectors.setNews)
    const [isLoading, setisLoading] = useState<boolean>(false)

    const { post, get } = useApi();



    const getNewsCategory = async () => {
        try {
            const response = await get(ROUTES.NEWS_CATEGORIES)
            if (response.status == 200) {
                return response.data
            }
            return []
        } catch (error) {
            return []
        }

    };

    const getNews = async () => {
        try {
            setisLoading(true)
            const response = await get(ROUTES.NEWS)
            setisLoading(false)
            if (response.status == 200) {
                setNews(response.data)
                return true
            }
            return false
        } catch (error) {
            setisLoading(false)
            return false
        }
    }


    return {
        getNewsCategory,
        getNews,
        isLoading
    };
};

export default useNewsApi;
