export const config = {
    logoCount: 5,
    firebaseConfig: {
        apiKey: "AIzaSyDOYbI0DSO4nxJczkQIs3pG3bKnxPZ91QM",
        authDomain: "meetup-with-you.firebaseapp.com",
        projectId: "meetup-with-you",
        storageBucket: "meetup-with-you.appspot.com",
        messagingSenderId: "300959061590",
        appId: "1:300959061590:web:6b5cebffdf7db5e8ee0df7",
        measurementId: "G-QSG6XNPD22"
    },
    servers: {
        iceServers: [
            {
            urls: ['stun:stun1.l.google.com:19302',
                   'stun:stun2.l.google.com:19302'],
            },
        ],
        iceCandidatePoolSize: 10,
    },
    DEV: "development" === 'development',
}

