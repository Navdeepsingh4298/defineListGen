import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
} from '@mui/material';
import DrawerAppBar from '../components/DrawerAppBar';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <DrawerAppBar />
      <Container sx={{textAlign: 'center', minHeight: '100vh' }}>
        <Typography variant="h3" color="error" gutterBottom>
          🚫 404 - Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 20, color: '#555', mb: 5 }}>
          Oops! The page you're looking for doesn't exist or has been moved.
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={goHome}
            sx={{ borderRadius: 2 }}
          >
            ⬅️ Go Back Home
          </Button>
        </Box>
      </Container>
    </Container>
  );
};

export default NotFoundPage;