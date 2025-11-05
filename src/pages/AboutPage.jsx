// mui components
import { Divider, Container, Typography, Box } from '@mui/material';

// local components
import DrawerAppBar from '../components/DrawerAppBar.jsx';

const AboutPage = () => {
    return (
        <Container>
            <DrawerAppBar />
            <Box>
                <Typography variant="h4" gutterBottom>
                    What Is the Define List Generator?
                </Typography>
                <Typography variant="body1" paragraph>
                    The Define List Generator is a web-based utility designed to assist Decipher survey programmers. It’s an easy-to-use tool for creating define lists efficiently and accurately.
                </Typography>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    What Are Define Lists in Decipher?
                </Typography>
                <Typography variant="body1" paragraph>
                    In Decipher survey programming, a define list is a structured list of items (like answer choices, labels, or variable names) that can be reused throughout the survey.
                </Typography>

                <Typography variant="body1" paragraph>
                    For example, a define list might look like:
                </Typography>
                <Box component="pre" sx={{ p: 2, borderRadius: 2, overflowX: 'auto', border: '1px solid #ccc' }}>
                    {`<stylevar name="cs:category"/>
<stylevar name="cs:country"/>
<stylevar name="cs:timezone"/>

<define label="SampleBrandList">
  <group label="g1">Group A</group>
  <group label="g2">Group B</group>
  <row label="Br1" value="1" cs:category="type1" cs:country="US" cs:timezone="EST" groups="g1">Brand 1</row>
  <row label="Br2" value="2" cs:category="type1" cs:country="US" cs:timezone="EST" groups="g1">Brand 2</row>
  <row label="Br3" value="3" cs:category="type1" cs:country="US" cs:timezone="EST" groups="g1">Brand 3</row>
  <row label="Br4" value="4" cs:category="type1" cs:country="US" cs:timezone="EST" groups="g1">Brand 4</row>
  <row label="Br5" value="5" cs:category="type2" cs:country="UK" cs:timezone="GMT" groups="g2">Brand 5</row>
  <row label="Br6" value="6" cs:category="type2" cs:country="UK" cs:timezone="GMT" groups="g2">Brand 6</row>
  <row label="Br7" value="7" cs:category="type2" cs:country="UK" cs:timezone="GMT" groups="g2">Brand 7</row>
  <row label="Br8" value="8" cs:category="type2" cs:country="UK" cs:timezone="GMT" groups="g2">Brand 8</row>
</define>`}
                </Box>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    How the Define List Generator Helps
                </Typography>
                <Box component="ul" sx={{ pl: 3 }}>
                    <li>
                        <Typography variant="body1">
                            User-friendly interface: No need to manually write code—just input your items and let the tool format them.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1">
                            Custom formatting options: Choose how you want your list to be structured, including grouping and styling.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1">
                            Error reduction: Automatically handles syntax and formatting, minimizing mistakes.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1">
                            Code Consistency: Maintain consistency and standardizing list formats across questions through out the survey programming.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1">
                            Export-ready output: Copy and paste the generated list directly into your Decipher survey script.
                        </Typography>
                    </li>

                </Box>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Export Options in the Define List Generator
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    1. Copy to Clipboard
                </Typography>
                <Box component="ul" sx={{ pl: 3 }}>

                    <li>
                        <Typography variant="body1">
                            Function: Instantly copies the generated define list to your system clipboard.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1">
                            Use Case: Ideal for quickly pasting into Decipher or a text editor.
                        </Typography>
                    </li>

                    <li>
                        <Typography variant="body1">
                            How It Works: Click 'Copy to Clipboard' and paste anywhere.
                        </Typography>
                    </li>

                </Box>

                <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                    2. Download as Plain Text (.txt)
                </Typography>


                <Box component="ul" sx={{ pl: 3 }}>

                    <li>
                        <Typography variant="body1">
                            Function: Saves the generated list as a .txt file.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1">
                            Use Case: Great for archiving, sharing, or backups.
                        </Typography>
                    </li>

                    <li>
                        <Typography variant="body1">
                            How It Works: Click 'Download as File' and the list is saved with the list name as the filename.
                        </Typography>
                    </li>

                </Box>


                <Box sx={{ mt: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        Inpirations and Acknowledgements
                    </Typography>
                    <Typography variant="body1" paragraph>
                        The Define List Generator is a inspiration taken from <strong>Kevin Johnson's</strong> Define List Generator which is based on Python programming language.
                        Initially, creator tried to create a replica of something like that in Javascript, but found it more efficient to create a web-based tool.
                        This tool is designed to be user-friendly and accessible for Decipher survey programmers, allowing them to create define lists without needing to write code manually.
                    </Typography>
                </Box>

                <Box sx={{ mt: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        Creator
                    </Typography>
                    <Typography variant="body1" paragraph>
                        This tool was solely created by <strong>Navdeep Singh</strong>, a frontend developer with fullstack capabilities. Known for building robust utilities and streamlining workflows, Navdeep brings precision, speed, and care to every project. This generator reflects his commitment to empowering teams with tools that just work.
                    </Typography>
                </Box>

            </Box>

        </Container>
    );
};

export default AboutPage;