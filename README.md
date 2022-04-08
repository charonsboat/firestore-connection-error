# Firestore Connection Error Project

A reproducible example project for the following Firestore error.

> @firebase/firestore: Firestore (9.6.10): Could not reach Cloud Firestore backend. Backend didn't respond within 10 seconds.
> This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.

## Setup

System dependencies: `Docker`, `Yarn`

### Steps to reproduce the error

- Install and run the app (see "Install and run" below)
- Navigate to http://localhost:8888
- Open the web console
- Click the "Sign In with Google" button
- Auto-generate user login info
- Wait ~10 seconds for the error to appear

### Install and run

```bash
# launch emulators
docker-compose up -d

# install dependencies
yarn install

# launch app
yarn dev
```
