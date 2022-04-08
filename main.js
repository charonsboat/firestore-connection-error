import { connectAuthEmulator, getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import * as db from 'firebase/firestore'

const { connectFirestoreEmulator, getFirestore, initializeFirestore, setLogLevel } = db

const config = {
  apiKey: 'fake',
  appId: 'fake',
  authDomain: 'fake',
  projectId: 'fake',
}

const app = initializeApp(config)

initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true
})

setLogLevel('error')


connectAuthEmulator(
  getAuth(),
  'http://localhost:32775',
  {
    disableWarnings: true,
  }
)

connectFirestoreEmulator(
  getFirestore(),
  'http://localhost',
  32776,
)

getAuth().onAuthStateChanged(async (user) => {
  console.log({ user })

  if (user) {
    const querySnapshot = await db.getDocs(
      db.query(
        db.collection(db.getFirestore(), 'documents')
      )
    )

    return querySnapshot.docs
  }
})

document.getElementById('sign-in').addEventListener('click', () => {
  signInWithRedirect(getAuth(), new GoogleAuthProvider())
})
