import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDjZcfb2fiBxIy4jJjk4sFk9P1qUCaJAfQ',
  authDomain: 'twitter-app-9df5c.firebaseapp.com',
  projectId: 'twitter-app-9df5c',
  storageBucket: 'twitter-app-9df5c.appspot.com',
  messagingSenderId: '517438695184',
  appId: '1:517438695184:web:ac522eeacd7483a4dc2795',
  measurementId: 'G-F240YMR6MY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
// 引数に渡すことで、初期化したappのデータベース取得が可能
const db = getFirestore(app);

export default db

// 手順
// 1. FireBaseでプロジェクト作成
// 2. ドキュメントに則りfirebase.tsで初期化
// 3. FireStore上でデータ入力 → データベース生成
// 4. データベース連携
// ・FireStoreの初期化し、appを引数として渡す
// 5. 外部にexportする