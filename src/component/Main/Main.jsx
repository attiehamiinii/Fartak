import { Container, Button, Box, Link, Card, CardContent, Typography, Stack } from '@mui/material';
import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CategoryIcon from '@mui/icons-material/Category';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../Header/style.css'
const Main = () => {
  const [checked, setChecked] = React.useState(true);
  const theme = createTheme({
    palette: {
      primary: {
        main: '#00c5c5',
        txt: '#fafafa',
      },
      secondary: {
        main: '#01a3a0',
      },
      third :{
        main:'#206161'
      }
    },
  });
  const handleChange = () => {
    setChecked(prev => !prev);
    
  };
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Stack
         className='icon'
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
          sx={{ maxWidth: 250 }}
          
        >
          <IconButton color='third' aria-label="instagram" size="large">
            <InstagramIcon sx={{fontSize:45}} />
          </IconButton>
          <IconButton color='third' aria-label="delete" size="large">
            <LinkedInIcon sx={{fontSize:45}} />
          </IconButton>
          <IconButton color='third' aria-label="delete" size="large">
            <FacebookIcon sx={{fontSize:45}} />
          </IconButton>
        </Stack>
        <Box sx={{ mt: 1.5 }}>
          <Link href="https://www.fartakmedical.com/" underline="none" target="_blank">
            <Button
            className='btn'
              size="lg"
              color="secondary"
              sx={{
                boxShadow: 8,
                border: 1,
                fontFamily: 'MyWebFont-secondery',
                width: 200,
                height: 55,
                fontSize: 25,
                color: '#e0f2f1',
                '&:hover': {
                  border: 'none',
                },
                borderRadius: 35,
              }}
              variant="contained"
              endIcon={<LanguageIcon loadingPosition="end" />}
            >
              وب سایت
            </Button>
          </Link>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Link href="https://www.fartakmedical.com/catalogue/" underline="none" target="_blank">
            <Button
             className='btn_1'
              size="lg"
              color="secondary"
              sx={{
                boxShadow: 8,
                border: 1,
                fontFamily: 'MyWebFont-secondery',
                width: 200,
                height: 55,
                fontSize: 25,
                color: '#eceff1',
                '&:hover': {
                  border: 'none',
                },
                borderRadius: 35,
              }}
              variant="contained"
              endIcon={<FileDownloadIcon />}
            >
              کاتالوگ
            </Button>
          </Link>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Link href="https://www.fartakmedical.com/product/" underline="none" target="_blank">
            <Button
             className='btn'
              size="lg"
              color="secondary"
              sx={{
                boxShadow: 8,
                border: 1,
                fontFamily: 'MyWebFont-secondery',
                width: 200,
                height: 55,
                fontSize: 25,
                color: '#eceff1',
                '&:hover': {
                  border: 'none',
                },
                borderRadius: 35,
              }}
              variant="contained"
              endIcon={<CategoryIcon />}
            >
              محصولات
            </Button>
          </Link>
        </Box>
       
        <Box sx={{ mt: 3, mb: 10 }}>
          <Link  href="tel:02166126021" underline="none">
          <Button
            className='btn_1'
            checked={checked}
            onClick={handleChange}
            size="lg"
            color="secondary"
            sx={{
              boxShadow: 8,
              border: 1,
              fontFamily: 'MyWebFont-secondery',
              width: 200,
              height: 55,
              fontSize: 25,
              color: '#eceff1',
              '&:hover': {
                border: 'none',
              },
              borderRadius: 35,
            }}
            variant="contained"
            endIcon={<CallIcon />}
          >
            تماس با ما
          </Button>
          </Link>
          <Fade in={checked}>
            {
              <Card
              className='box'
                sx={{
                  border: 2,
                  borderColor: 'white',
                  borderBottom: '0',
                  borderLeft: 0,
                  maxWidth: 300,
                  mt: 2,
                  borderRadius: 5,
                  bgcolor: '#01a3a0',
                }}
              >
                <CardContent sx={{ position: 'relative' }}>
                  <Typography
                    fontFamily="MyWebFont-primary"
                    sx={{ fontSize: 21, float: 'right' }}
                    color="primary.txt"
                    gutterBottom
                  >
                    آدرس : ستارخان،باقرخان غربی، پلاک 97
                    <LocationOnIcon sx={{ ml: 1 }} />
                  </Typography>

                  <Typography
                    fontFamily="MyWebFont-primary"
                    sx={{ fontSize: 25, float: 'right' }}
                    color="primary.txt"
                    gutterBottom
                  >
                    تلفن : 66126021 -21
                    <CallIcon sx={{ ml: 1 }} />
                  </Typography>
                </CardContent>
              </Card>
            }
          </Fade>
          
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Main;
