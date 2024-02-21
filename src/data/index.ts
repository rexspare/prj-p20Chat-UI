import { FRIENDS_AVATARS } from "../assets/images"
import { FEED_AVATARS, NEWS_IMAGES } from "../assets/images/dummy"

const CHATS_LIST: any[] = [
    {
        id: 1,
        name: "Pranav Ray",
        time: "12:25 PM",
        unReadMessages: 1,
        lastMessage: "Okay sure!!",
        avatar: FRIENDS_AVATARS.P1,
        incommingCall: false,
        number: "0900-786-01"
    },
    {
        id: 2,
        name: "Ayesha Tanwar",
        time: "12:25 PM",
        unReadMessages: 0,
        lastMessage: "Okay sure!!",
        avatar: FRIENDS_AVATARS.P2,
        incommingCall: false,
        number: "0900-786-01"
    },
    {
        id: 3,
        name: "Roshni",
        time: "12:25 PM",
        unReadMessages: 0,
        lastMessage: "Okay sure!!",
        avatar: FRIENDS_AVATARS.P3,
        incommingCall: false,
        number: "0900-786-01"
    },
    {
        id: 4,
        name: "Kaushik",
        time: "12:25 PM",
        unReadMessages: 0,
        lastMessage: "Okay sure!!",
        avatar: FRIENDS_AVATARS.P4,
        incommingCall: false,
        number: "0900-786-01"
    },
    {
        id: 5,
        name: "Dad",
        time: "12:25 PM",
        unReadMessages: 0,
        lastMessage: "Okay sure!!",
        avatar: FRIENDS_AVATARS.P5,
        incommingCall: true,
        number: "0900-786-01"
    },
    {
        id: 6,
        name: "Pranav Ray",
        time: "12:25 PM",
        unReadMessages: 0,
        lastMessage: "Okay sure!!",
        avatar: FRIENDS_AVATARS.P1,
        incommingCall: false,
        number: "0900-786-01"
    },
    {
        id: 7,
        name: "Ayesha Tanwar",
        time: "12:25 PM",
        unReadMessages: 0,
        lastMessage: "Okay sure!!",
        avatar: FRIENDS_AVATARS.P2,
        incommingCall: false,
        number: "0900-786-01"
    },
    {
        id: 8,
        name: "Roshni",
        time: "12:25 PM",
        unReadMessages: 0,
        lastMessage: "Okay sure!!",
        avatar: FRIENDS_AVATARS.P3,
        incommingCall: false,
        number: "0900-786-01"
    },
    {
        id: 9,
        name: "Kaushik",
        time: "12:25 PM",
        unReadMessages: 0,
        lastMessage: "Okay sure!!",
        avatar: FRIENDS_AVATARS.P4,
        incommingCall: false,
        number: "0900-786-01"
    },
    {
        id: 10,
        name: "Dad",
        time: "12:25 PM",
        unReadMessages: 0,
        lastMessage: "Okay sure!!",
        avatar: FRIENDS_AVATARS.P5,
        incommingCall: false,
        number: "0900-786-01"
    },
]

const CONVERSATION: any[] = [
    {
        id: 1,
        message: "Hey! How have you been?",
        sendByMe: false,
        time: "12:15 PM"
    },
    {
        id: 2,
        message: "Wanna catch up for a beer?",
        sendByMe: false,
        time: "12:15 PM"
    },
    {
        id: 3,
        message: "Awesome! Let’s meet up",
        sendByMe: true,
        time: "12:20 PM"
    },
    {
        id: 4,
        message: "Can I also get my cousin along? Will that be okay?",
        sendByMe: true,
        time: "12:20 PM"
    },
    {
        id: 5,
        message: "Yeah sure! get him too.",
        sendByMe: false,
        time: "12:22 PM"
    },
    {
        id: 6,
        message: "Alright! See you soon!",
        sendByMe: true,
        time: "12:25 PM"
    },
    {
        id: 6,
        message: "",
        media: "",
        sendByMe: false,
        time: "12:25 PM"
    },
    {
        id: 7,
        message: "okay sure!",
        sendByMe: true,
        time: "12:25 PM"
    },
]

const NEWS: any[] = [
    {
        id: 1,
        title: "Top Cryptocurrency Prices Today: Bitcoin, Binance Coin up;",
        cover: NEWS_IMAGES.NEWS1,
        readTime: 10,
        time: "Today",
        desc: `Stay on top of the blockchain and cryptocurrency world with an app from Cointelegraph — a top Web3 media outlet. Download the app,
        called Cointelegraph:
        Crypto News, to keep up to speed with the latest trends and breaking news in the crypto world.
        Stay on top of the blockchain and cryptocurrency
        world with an app from Cointelegraph — a
         top Web3 media outlet. Download the app,
        called Cointelegraph:
        
        Crypto News, to keep up to speed with the latest
        trends and breaking news in the crypto world.`
    },
    {
        id: 2,
        title: "Top Cryptocurrency Prices Today: Bitcoin, Binance Coin up;",
        cover: NEWS_IMAGES.NEWS2,
        readTime: 10,
        time: "Today",
        desc: `Stay on top of the blockchain and cryptocurrency world with an app from Cointelegraph — a top Web3 media outlet. Download the app,
        called Cointelegraph:
        Crypto News, to keep up to speed with the latest trends and breaking news in the crypto world.
        Stay on top of the blockchain and cryptocurrency
        world with an app from Cointelegraph — a
         top Web3 media outlet. Download the app,
        called Cointelegraph:
        
        Crypto News, to keep up to speed with the latest
        trends and breaking news in the crypto world.`
    },
    {
        id: 3,
        title: "Top Cryptocurrency Prices Today: Bitcoin, Binance Coin up;",
        cover: NEWS_IMAGES.NEWS3,
        readTime: 10,
        time: "Today",
        desc: `Stay on top of the blockchain and cryptocurrency world with an app from Cointelegraph — a top Web3 media outlet. Download the app,
        called Cointelegraph:
        Crypto News, to keep up to speed with the latest trends and breaking news in the crypto world.
        Stay on top of the blockchain and cryptocurrency
        world with an app from Cointelegraph — a
         top Web3 media outlet. Download the app,
        called Cointelegraph:
        
        Crypto News, to keep up to speed with the latest
        trends and breaking news in the crypto world.`
    },
]

const FEEDS: any[] = [
    {
        id: 1,
        avatar: FEED_AVATARS.AVATAR1,
        isVerified: true,
        user: "Cryptocurrency",
        username: "@cryptocurrency21",
        time: '3h',
        desc: `$CRE @cre_update is NOW LIVE and available on #GroveX and can be purchased right away. \n\nThe first company in the world truly connecting the real estate and cryptocurrency industries. \n\nTheir website: cryptosurrency.com`,
        image: NEWS_IMAGES.NEWS1,
    },
    {
        id: 2,
        avatar: FEED_AVATARS.AVATAR2,
        isVerified: false,
        user: "Maria",
        username: "@cryptocurrency21",
        time: '3h',
        desc: `$CRE @cre_update is NOW LIVE and available on #GroveX and can be purchased right away. \n\nThe first company in the world truly connecting the real estate and cryptocurrency industries. \n\nTheir website: cryptosurrency.com`,
        image: NEWS_IMAGES.NEWS1,
    },
]

export {
    CHATS_LIST,
    CONVERSATION,
    NEWS,
    FEEDS
}