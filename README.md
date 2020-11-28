# README.md

Create `/Library/Google/Chrome/NativeMessagingHosts/com.iamskok.hello_world.json` with:

```json
{
  "name": "com.iamskok.hello_world",
  "description": "Example host for native messaging",
  "path": "/Users/skok/dev/native-messaging/app.js",
  "type": "stdio",
  "allowed_origins": [
    "chrome-extension://mahichkkiignngikemejdkpnmoiicgfm/"
  ]
}
```