import { MESSAGE_TYPES } from "../assets/constants"
import { COINS, FRIENDS_AVATARS, WALLPAPER_TYPE } from "../assets/images"
import { FEED_AVATARS, NEWS_IMAGES } from "../assets/images/dummy"

const LANGUAGES_LIST = [
    {
        id: 1,
        title: "English",
        subtle: "English"
    },
    // {
    //     id: 2,
    //     title: "Arabic",
    //     subtle: "العربية"
    // },
    {
        id: 3,
        title: "Belarusian",
        subtle: "Беларуская"
    },
    {
        id: 4,
        title: "Catalan",
        subtle: "Català"
    },
    {
        id: 5,
        title: "Croatian",
        subtle: "Hrvatski"
    },
    {
        id: 6,
        title: "Czech",
        subtle: "Cestina"
    },
    {
        id: 7,
        title: "Dutch",
        subtle: "Dutch"
    },
    {
        id: 8,
        title: "Finnish",
        subtle: "Suomalainen"
    },
    {
        id: 9,
        title: "Spanish",
        subtle: "Español"
    },
    {
        id: 10,
        title: "Italian",
        subtle: "Italiana"
    },
]

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

const WALLET_LIST: any[] = [
    {
        id: 1,
        label: "Wallet 1",
        value: "Wallet 1",
    },
    {
        id: 2,
        label: "Wallet 2",
        value: "Wallet 2",
    },
]

const COINSLIST: any[] = [
    {
        id: 1,
        name: 'Bitcoin',
        shortName: "BTC",
        icon: COINS.BITCOIN,
        price: "43,963.8",
        gain: "+1.02%",
        isPositive: true,
        vol: "35,497,897.88"
    },
    {
        id: 2,
        name: 'Ethereum',
        shortName: "Eth",
        icon: COINS.ETHEREUM,
        price: "2,248.19",
        gain: "+0.91%",
        isPositive: true,
        vol: "17,197,713.98"
    },
    {
        id: 3,
        name: 'yearn.finance',
        shortName: "YFI",
        icon: COINS.YEARN,
        price: "7,100",
        gain: "-9.07%",
        isPositive: false,
        vol: "52.44"
    },
    {
        id: 4,
        name: 'Solana',
        shortName: "SOL",
        icon: COINS.SOLANA,
        price: "97.994",
        gain: "+2.08",
        isPositive: true,
        vol: "5,867.68"
    },
    {
        id: 5,
        name: 'Wrapped Bitcoin',
        shortName: "WBTC",
        icon: COINS.WRAPPERBTC,
        price: "44,010",
        gain: "+1.35%",
        isPositive: true,
        vol: "42,300.82"
    },
    {
        id: 6,
        name: 'Dogecoin',
        shortName: "DOGE",
        icon: COINS.DOGECOIN,
        price: "0.081472",
        gain: "-0.09%",
        isPositive: false,
        vol: "3,339,275.89"
    },
    {
        id: 7,
        name: 'Tether Gold',
        shortName: "XAUT",
        icon: COINS.TETHER,
        price: "2,044",
        gain: "+0.10%",
        isPositive: true,
        vol: "2,400.15"
    },
    {
        id: 8,
        name: 'Binance Coin',
        shortName: "BNB",
        icon: COINS.BINANCE,
        price: "309.72",
        gain: "-3.70%",
        isPositive: false,
        vol: "2,260.30"
    },
    {
        id: 9,
        name: 'XRP',
        shortName: "XRP",
        icon: COINS.XRP,
        price: "0.57100",
        gain: "+1.20%",
        isPositive: true,
        vol: "1,759,364.81"
    },
    {
        id: 10,
        name: 'Chainlink',
        shortName: "LINK",
        icon: COINS.CHAINLINK,
        price: "13.6113",
        gain: "-2.35%",
        isPositive: false,
        vol: "854,959.37"
    },
    {
        id: 11,
        name: 'Litecoin',
        shortName: "LTC",
        icon: COINS.LITECOIN,
        price: "65.69",
        gain: "+1.01%",
        isPositive: true,
        vol: "62,450.58"
    },
    {
        id: 12,
        name: 'Hive',
        shortName: "HIV",
        icon: COINS.HIVE,
        price: "0.3458",
        gain: "-2.40%",
        isPositive: false,
        vol: "133,504.71"
    },
]

const HISTORY_LIST: any[] = [
    {
        id: 1,
        address: "845tu8.......4ut95v5j8",
        name: 'Bitcoin',
        shortName: "BTC",
        amount: "0.897",
        price: "298.32",
        isSent: true,
        time: "15 Sep 2023",
        wallet: 1
    },
    {
        id: 2,
        address: "845tu8.......4ut95v5j8",
        name: 'Bitcoin',
        shortName: "ETH",
        amount: "0.897",
        price: "298.32",
        isSent: true,
        time: "15 Sep 2023",
        wallet: 1
    },
    {
        id: 3,
        address: "845tu8.......4ut95v5j8",
        name: 'Bitcoin',
        shortName: "ETH",
        amount: "0.897",
        price: "298.32",
        isSent: false,
        time: "15 Sep 2023",
        wallet: 2
    },
    {
        id: 4,
        address: "845tu8.......4ut95v5j8",
        name: 'Bitcoin',
        shortName: "BTC",
        amount: "0.897",
        price: "298.32",
        isSent: true,
        time: "15 Sep 2023",
        wallet: 2
    },
    {
        id: 5,
        address: "845tu8.......4ut95v5j8",
        name: 'Bitcoin',
        shortName: "BTC",
        amount: "0.897",
        price: "298.32",
        isSent: false,
        time: "15 Sep 2023",
        wallet: 1
    },
    {
        id: 6,
        address: "845tu8.......4ut95v5j8",
        name: 'Bitcoin',
        shortName: "BTC",
        amount: "0.897",
        price: "298.32",
        isSent: false,
        time: "15 Sep 2023",
        wallet: 2
    },
    {
        id: 7,
        address: "845tu8.......4ut95v5j8",
        name: 'Bitcoin',
        shortName: "BTC",
        amount: "0.897",
        price: "298.32",
        isSent: false,
        time: "15 Sep 2023",
        wallet: 1
    },
]

const inbox = [
    {
        id: 1,
        meUser: false,
        time: '12:15 PM',
        type: MESSAGE_TYPES.TEXT,
        message: "Hey! How have you been?",
        seen: true
    },
    {
        id: 2,
        meUser: false,
        time: '12:15 PM',
        type: MESSAGE_TYPES.TEXT,
        message: "Wanna catch up for a beer?",
        seen: true
    },
    {
        id: 3,
        meUser: true,
        time: '12:20 PM',
        type: MESSAGE_TYPES.TEXT,
        message: "Awesome! Let’s meet up",
        seen: true
    },
    {
        id: 4,
        meUser: true,
        time: '12:20 PM',
        type: MESSAGE_TYPES.TEXT,
        message: `Can I also get my cousin along? Will that be okay?`,
        seen: true
    },
    {
        id: 5,
        meUser: false,
        time: '12:22 PM',
        type: MESSAGE_TYPES.TEXT,
        message: `Yeah sure! get him too.`,
        seen: true
    },
    {
        id: 55,
        meUser: false,
        time: '12:22 PM',
        type: MESSAGE_TYPES.CRYPTO,
        message: `Yeah sure! get him too.`,
        seen: true,
        amount: 1000,
        crypto: 'PVTUSD'
    },
    {
        id: 54,
        meUser: true,
        time: '12:22 PM',
        type: MESSAGE_TYPES.CRYPTO,
        message: `Yeah sure! get him too.`,
        seen: true,
        amount: 1000,
        crypto: 'PVTUSD'
    },
    {
        id: 6,
        meUser: true,
        time: '12:25 PM',
        type: MESSAGE_TYPES.TEXT,
        message: `Alright! See you soon!`,
        seen: true,
        stared: true
    },
    {
        id: 10,
        meUser: false,
        time: '12:27 PM',
        type: MESSAGE_TYPES.VIDEO,
        message: `okay sure!`,
        seen: true,
        media: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
    },
    {
        id: 7,
        meUser: false,
        time: '12:25 PM',
        type: MESSAGE_TYPES.AUDIO,
        message: ``,
        seen: true,
        media: "https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg",
    },
    {
        id: 99,
        meUser: true,
        time: '12:27 PM',
        type: MESSAGE_TYPES.IMAGE,
        seen: true,
        media: [
            require('../assets/images/dummy/msgImage.png'),
            require('../assets/images/dummy/msg1.png'),
            require('../assets/images/dummy/msg2.png'),
            require('../assets/images/dummy/msg3.png')
        ]
    },
    {
        id: 81,
        meUser: false,
        time: '12:27 PM',
        type: MESSAGE_TYPES.TEXT,
        message: `These pics look so so good! Thanks`,
        seen: true,
        media: "",
    },
    {
        id: 8,
        meUser: true,
        time: '12:27 PM',
        type: MESSAGE_TYPES.TEXT,
        message: `okay sure!`,
        seen: true,
        media: "",
        replyingTo: 81
    },
    {
        id: 98,
        meUser: true,
        time: '12:27 PM',
        type: MESSAGE_TYPES.IMAGE,
        seen: true,
        media: [  require('../assets/images/dummy/msgImage.png'), ]
    },
    {
        id: 9,
        meUser: false,
        time: '12:27 PM',
        type: MESSAGE_TYPES.IMAGE,
        message: "This is caption",
        seen: true,
        media: [require('../assets/images/dummy/msgImage.png'), ]
    },

]

const STARED_MESSAGES: any[] = [
    {
        id: 1,
        sender: 'me',
        reciever: {
            id: 1,
            name: "Pranav Ray",
            avatar: FRIENDS_AVATARS.P1,
            number: "0900-786-01"
        },
        time: '12:15 PM',
        type: MESSAGE_TYPES.TEXT,
        message: "Can I also get my cousin along? Will that be okay?",
        staredTime: '12:12 PM'
    },
    {
        id: 2,
        sender: {
            id: 1,
            name: "Pranav Ray",
            avatar: FRIENDS_AVATARS.P1,
            number: "0900-786-01"
        },
        reciever: 'me',
        time: 'Yesterday',
        type: MESSAGE_TYPES.TEXT,
        message: "Yes sure you can. Bring him along",
        staredTime: '12:12 PM'
    },
]


export {
    LANGUAGES_LIST,
    CHATS_LIST,
    CONVERSATION,
    NEWS,
    FEEDS,
    WALLET_LIST,
    COINSLIST,
    HISTORY_LIST,
    inbox,
    STARED_MESSAGES
}