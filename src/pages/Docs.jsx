import DrawerAppBar from '../components/DrawerAppBar.jsx';

import { Container, Typography, Box } from '@mui/material';

// Assets
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"
import pic4 from "../assets/pic4.png"
import pic5 from "../assets/pic5.png"
import pic6 from "../assets/pic6.png"

const sectionStyle = {
    marginBottom: '40px',
};

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
};

const thStyle = {
    padding: '12px',
    border: '1px solid #ccc',
    textAlign: 'left',
};

const tdStyle = {
    padding: '12px',
    border: '1px solid #ccc',
    textAlign: 'left',
};

const imageStyle = {
    width: '100%',
    maxWidth: '600px',
    marginBottom: '20px',
    border: '1px solid #aaa',
};

const Docs = () => {
    return (
        <Container>
            <DrawerAppBar />

            <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
                <Box>
                    <Typography variant="h4" gutterBottom>
                        🧾 Define List Generator Tool – Documentation
                    </Typography>
                    <Typography variant="body1" paragraph>
                        This tool helps you create define lists for Decipher surveys with support for grouping, styling, and exporting.
                    </Typography>
                </Box>



                <div style={sectionStyle}>
                    <h2>🧩 Tool Components</h2>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Field / Button</th>
                                <th style={thStyle}>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td style={tdStyle}>List Name</td><td style={tdStyle}>Enter the name or label for your define list.</td></tr>
                            <tr><td style={tdStyle}>List Rows</td><td style={tdStyle}>Input the text for each row in the list.</td></tr>
                            <tr><td style={tdStyle}>Row Label Prefix</td><td style={tdStyle}>Prefix for row labels (e.g., Br, Mr etc).</td></tr>
                            <tr><td style={tdStyle}>Add Row Values (Checkbox)</td><td style={tdStyle}>Enable to include values in each row.</td></tr>
                            <tr><td style={tdStyle}>Collapse Duplicates (Checkbox)</td><td style={tdStyle}>Enable to merge duplicate rows and stylevars.</td></tr>
                        </tbody>
                    </table>
                </div>

                <div style={sectionStyle}>
                    <h2>🧮 Grouping Features</h2>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Field / Button</th>
                                <th style={thStyle}>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td style={tdStyle}>Add Group Button</td><td style={tdStyle}>Adds fields to assign groups to rows.</td></tr>
                            <tr><td style={tdStyle}>Group Values</td><td style={tdStyle}>Assign group names to each row.</td></tr>
                            <tr><td style={tdStyle}>Group Label</td><td style={tdStyle}>Label for each group. (e.g., g1, g2 etc</td></tr>
                            <tr><td style={tdStyle}>Group Name</td><td style={tdStyle}>Name for each group. (e.g., Premium Brands, Local Brands.</td></tr>
                            <tr><td style={tdStyle}>Remove Group Button</td><td style={tdStyle}>Deletes a specific group.</td></tr>
                        </tbody>
                    </table>
                </div>

                <div style={sectionStyle}>
                    <h2>🎨 Stylevar Features</h2>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Field / Button</th>
                                <th style={thStyle}>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td style={tdStyle}>Add Stylevar Button</td><td style={tdStyle}>Adds fields to assign stylevars to rows.</td></tr>
                            <tr><td style={tdStyle}>Stylevar Values</td><td style={tdStyle}>Assign stylevar values to each row.</td></tr>
                            <tr><td style={tdStyle}>Stylevar Name</td><td style={tdStyle}>Name of the stylevar (e.g., category, country etc).</td></tr>
                            <tr><td style={tdStyle}>Remove Stylevar Button</td><td style={tdStyle}>Deletes a specific stylevar.</td></tr>
                        </tbody>
                    </table>
                </div>

                <div style={sectionStyle}>
                    <h2>🧼 Utility Buttons</h2>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Button</th>
                                <th style={thStyle}>Function</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td style={tdStyle}>Reset All Button</td><td style={tdStyle}>Clears all fields and resets the tool for fresh start.</td></tr>
                            <tr><td style={tdStyle}>Generate List Button</td><td style={tdStyle}>Compiles inputs into a formatted define list.</td></tr>
                            <tr><td style={tdStyle}>Output Field Box</td><td style={tdStyle}>Displays the generated define list.</td></tr>
                            <tr><td style={tdStyle}>Download as File Button</td><td style={tdStyle}>Saves the output as a text file.</td></tr>
                            <tr><td style={tdStyle}>Copy to Clipboard Button</td><td style={tdStyle}>Copies the output to your system clipboard.</td></tr>
                            <tr><td style={tdStyle}>Clear Output Button</td><td style={tdStyle}>Clears the output field.</td></tr>
                        </tbody>
                    </table>
                </div>

                <div style={sectionStyle}>
                    <h2>✅ Example Workflow</h2>
                    <ol>
                        <li>Enter a <strong>List Name</strong> e.g. brandsList, modelsList etc</li>
                        <li>Add items in <strong>List Rows</strong> e.g. Apple, Samsung, Apple, Xiaomi.</li>
                        <li>Set <strong>Row Label Prefix</strong> e.g. Br, Mr etc.</li>
                        <li>Enable <strong>Add Row Values</strong> and <strong>Collapse Duplicates</strong> if needed.</li>
                        <li>Use <strong>Add Group</strong> and <strong>Add Stylevar</strong> as needed.</li>
                        <li>Click <strong>Generate List</strong> to generate the output.</li>
                        <li>Use <strong>Download as File</strong>, <strong>Copy to Clipboard</strong>, or <strong>Clear Output</strong> as needed.</li>
                    </ol>
                </div>

            <div style={sectionStyle}>
    <h2>✅ Example</h2>
    <p>Let’s say we need to create a reusable define list for our Decipher project. Below is an example list of games.</p>

    <table style={tableStyle}>
        <thead>
            <tr>
                <th style={thStyle}>Game Title</th>
                <th style={thStyle}>Platform</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style={tdStyle}>Borderlands 3</td><td style={tdStyle}>PC, Console</td></tr>
            <tr><td style={tdStyle}>Call of Duty</td><td style={tdStyle}>PC, Console, Mobile</td></tr>
            <tr><td style={tdStyle}>Fortnite</td><td style={tdStyle}>PC, Console, Mobile</td></tr>
            <tr><td style={tdStyle}>Grand Theft Auto: San Andreas</td><td style={tdStyle}>PC, Console, Mobile</td></tr>
            <tr><td style={tdStyle}>Back 4 Blood</td><td style={tdStyle}>PC, Console</td></tr>
            <tr><td style={tdStyle}>Grand Theft Auto 5</td><td style={tdStyle}>PC, Console</td></tr>
            <tr><td style={tdStyle}>Genshin Impact</td><td style={tdStyle}>PC, Mobile, Console</td></tr>
            <tr><td style={tdStyle}>Minecraft</td><td style={tdStyle}>PC, Console, Mobile</td></tr>
            <tr><td style={tdStyle}>Among Us</td><td style={tdStyle}>PC, Console, Mobile</td></tr>
            <tr><td style={tdStyle}>Apex Legends</td><td style={tdStyle}>PC, Console</td></tr>
            <tr><td style={tdStyle}>Diablo IV</td><td style={tdStyle}>PC, Console</td></tr>
            <tr><td style={tdStyle}>Dead by Daylight</td><td style={tdStyle}>PC, Console</td></tr>
            <tr><td style={tdStyle}>Brawlhalla</td><td style={tdStyle}>PC, Console</td></tr>
            <tr><td style={tdStyle}>Destiny 2</td><td style={tdStyle}>PC, Console</td></tr>
            <tr><td style={tdStyle}>Dauntless</td><td style={tdStyle}>PC, Console</td></tr>
            <tr><td style={tdStyle}>Deathloop</td><td style={tdStyle}>PC, Console</td></tr>
            <tr><td style={tdStyle}>Deep Rock Galactic</td><td style={tdStyle}>PC, Console</td></tr>
        </tbody>
    </table>

    <p>Each game has one or more platforms listed. To prepare this data for the tool, we’ll break it down in Excel like this:</p>

    <table style={tableStyle}>
        <thead>
            <tr>
                <th style={thStyle}>Game Title</th>
                <th style={thStyle}>Platform</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style={tdStyle}>Borderlands 3</td><td style={tdStyle}>PC</td></tr>
            <tr><td style={tdStyle}>Borderlands 3</td><td style={tdStyle}>Console</td></tr>
            <tr><td style={tdStyle}>Call of Duty</td><td style={tdStyle}>PC</td></tr>
            <tr><td style={tdStyle}>Call of Duty</td><td style={tdStyle}>Console</td></tr>
            <tr><td style={tdStyle}>Call of Duty</td><td style={tdStyle}>Mobile</td></tr>
            <tr><td style={tdStyle}>...</td><td style={tdStyle}>...</td></tr>
        </tbody>
    </table>

    <p>Now we’re ready to enter the data into the tool. Start by filling in the <strong>List Name</strong>. Since this is a game list, we’ll name it <strong>Games_List</strong>.</p>

    <p>Next, enter a <strong>Row Label Prefix</strong>. For example, use <strong>Gr</strong> so each row will be labeled Gr1, Gr2, Gr3, and so on.</p>

    <p>Make sure to check the <strong>Add Row Values</strong> box so each row gets a value attribute.</p>

    <p>Also check <strong>Collapse Duplicates</strong> to remove repeated rows—this is important since some games appear multiple times with different platforms.</p>

    <img src={pic1} alt="List name, prefix, value and collapse duplicate picture" style={imageStyle} />

    <p>Next, enter the cleaned-up data into the <strong>List Rows</strong> section.</p>

    <img src={pic2} alt="List rows picture" style={imageStyle} />

    <p>To map platforms to each game, click the <strong>Add StyleVar</strong> button.</p>

    <img src={pic3} alt="picture 3" style={imageStyle} />

    <p>After clicking, you’ll see new fields next to the List Rows input. It will look like this:</p>

    <img src={pic4} alt="picture 4" style={imageStyle} />

    <p>Now copy the platform column from your Excel sheet into the <strong>Stylevar Values</strong> field. Then enter <strong>Platform</strong> as the <strong>Stylevar Name</strong>.</p>

    <img src={pic5} alt="picture 5" style={imageStyle} />

    <p>Once everything is filled in, click the <strong>Generate List</strong> button. The tool will create the define list in just a few seconds.</p>

    <img src={pic6} alt="picture 6" style={imageStyle} />

    <p>Great job! You’ve successfully created your define list. You can now export it using either <strong>Download as File</strong> or <strong>Copy to Clipboard</strong>.</p>
</div>
            </div>
        </Container>
    );
};

export default Docs;