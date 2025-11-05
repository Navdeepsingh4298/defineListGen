# Reusable Define List Generator
A tool which can create reusable complex define list.

## Functions
- Add values to rows
- Collapse duplicate rows and merge their stylevars
- Add/Remove Style Vars as per requirements
- Add/Remove groups for rows as per requirements
- Reset button to clear all fields
- Generate list in a second
- Display errors messages on screen if something went wrong
- Copy output to clipboard
- Download output list as text file

## TODOs [upcoming features]
- Load define list from .txt file or by pasting it in output box
- Make editable output box
- remove specific rows with row labels (adding where="report,notdp")
- add new rows in existing rows
- Create Docs about the tool.


### 1 => Removed rows from list:
---------------------------------
- load list from txt file or copy paste list in output section
- input labels which rows are removed
- click remove rows/ add where="report,notdp"

### 2 => Add new rows in list:
--------------------------------
- load list from txt file or copy paste list in output section
- add list rows and stylevars (if any)
- Generate list with new rows added

## How to install
### Method 1: Online Mode
- Go to the website [defineListGen](https://definelistgen.netlify.app/)
- Use directly in your browser.

### Method 2: Local Mode
- You need to install nodejs and terminal to run the program
- Download this repo from green Code button > Local > Download ZIP
- Extract the ZIP 
- right click > select "Open in Terminal"
- run `npm install` and wait until it finish installing all dependencies
- Add .env file with environment variables.
- Then run `npm run dev` and wait for few seconds.
- It will start up in browser directly or give you link in terminal to open it.
