import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import {
   API_KEY,
   MESSASING_SENDER_ID,
   APP_ID,
   DATABASE_URL,
} from '../../environments'

const firebaseConfig = {
   apiKey: API_KEY,
   authDomain: 'spiritst-araguari.firebaseapp.com',
   projectId: 'spiritst-araguari',
   storageBucket: 'spiritst-araguari.appspot.com',
   messagingSenderId: MESSASING_SENDER_ID,
   appId: APP_ID,
   databaseURL: DATABASE_URL,
}

const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)
