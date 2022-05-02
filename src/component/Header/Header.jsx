import { Container, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import React from 'react';
import Logo from '../../asset/home/logo.png';
import { CardActionArea } from '@mui/material';
import Main from '../Main/Main';
import backimg from '../../asset/home/back.png';
import './style.css';

const Header = () => {
  return (
    <Container maxWidth="lg">
      <Card
        sx={{ maxWidth: 'lg', bgcolor: '#a1d2d2' }}
        align="center"
        justifycontent="center"
        display="flex"
      >
        <CardActionArea>
          <CardMedia
            sx={{ position: 'absolute', opacity: 0.3 }}
            component="img"
            image={backimg}
            alt="background image fartak"
          ></CardMedia>
          <Box sx={{ position: 'relative', m: 2 }} maxWidth="sm">
            <CardMedia
              className="cart"
              sx={{ pt: 5 }}
              component="img"
              image={Logo}
              alt="Logo FononTeb Fartak"
            />
            <Typography
              className="title_logo"
              fontFamily="MyWebFont-four"
              sx={{
                fontSize: [20, 28, 30],
                fontWeight: 'bold',
                wordSpacing: 5,
                color: '#004d40',
              }}
              color="#37474f"
            >
              فــرتــاک پـیـونـد عـلـم و درمــان
            </Typography>
          </Box>
          <CardContent>
            <Box
              className="text"
              bgcolor="#e0f2f1"
              boxShadow="1"
              sx={{
                backgroundColor: '#e0f2f1',
                '&:hover': {
                  backgroundColor: '#e0f2f1',
                  opacity: [0.9, 0.8, 0.7],
                },
                position: 'relative',
                maxWidth: 'md',
                p: 2,
                borderRadius: 5,
                mt: 0,
              }}
            >
              <Typography
                fontFamily="MyWebFont-primary"
                sx={{ fontSize: [16, 20] }}
                variant="body2"
                color="#37474f"
              >
                شرکت فنون طب فرتاک از سال 1392 فعالیت خود را در زمینه تجهیزات پزشکی و با هدف ارتقاء
                سطح سلامت و کیفیت خدمات پزشکی در کشور آغاز نمود. ما در فنون طب فرتاک با استفاده از
                تخصص و تجربه خود و برقراری ارتباط بین دانش و تکنولوژی، با تولید محصولات پیشرفته در
                راه بهبود خدمات رسانی و کمک به افراد برای زندگی طولانی‌تر و سالم‌تر گام برمی‌داریم
              </Typography>
            </Box>
          </CardContent>
          <Main />
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default Header;
