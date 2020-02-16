## How to run the application

Download repository to desied folder.

```
cd /to download directory
```

Open a second node terminal. Then:

```
cd /to download directory/src/backend
```

Run ``` npm install ``` on both node terminals.

Once installed run ``` npm start ``` for the first terminal and ``` npm run watch ``` for the backend terminal.
This will run ``` localhost:3000/ ``` for the frontend and ``` localhost:9001/ ``` for the backend.

You can access the live application via [here](http://steam-emulator.herokuapp.com/). Make sure that the protocol is ``` http:// ``` and not ``` https:// ```.

#### Report footnotes:
- Game details can be accessed by clicking on the game name.
- The game details can only be viewed from the store page.
- Was not able to put an edit button in the user library, opted for the company name instead.
- If the game name text is too long it will overflow its space in the user library.
