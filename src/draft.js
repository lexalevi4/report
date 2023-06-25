import { Avatar, Button, Divider, Link, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableRow, TextField, TextareaAutosize, Typography } from '@mui/material';
import './dist/output.css'
import StatChart from './components/Stats';
import Header from './components/Header';
import { ReactComponent as LogoSvg } from './images/logo.svg';
import { useState } from 'react';

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import ReactAudioPlayer from 'react-audio-player';



const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root ': {
      color: theme.palette.action.disabled,
    },
  }));
  
  
  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon
        className='text-6xl'
        color="error" />,
      label: 'Very Dissatisfied',
    },
    // 2: {
    //   icon: <SentimentDissatisfiedIcon color="error"
    //     className='text-6xl'
    //   />,
    //   label: 'Dissatisfied',
    // },
    2: {
      icon: <SentimentNeutralIcon color="warning"
        className='text-6xl'
      />,
      label: 'Neutral',
    },
    // 4: {
    //   icon: <SentimentSatisfiedAltIcon color="success"
    //     className='text-6xl'
    //   />,
    //   label: 'Satisfied',
    // },
    3: {
      icon: <SentimentVerySatisfiedIcon color="success"
        className='text-6xl'
      />,
      label: 'Very Satisfied',
    },
  };
  
  function IconContainer(props) {
  
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };
  


//func
const [banner, setBanner] = useState(true)
const [ads, setAds] = useState(true)

const [bannerResult, setBannerResult] = useState('Баннер заказали, будет готов через неделю')
const [adsResult, setAdsResult] = useState('Обклеили все подъезды в городе, ждём звонков')
const [summary, setSummary] = useState('Всё будет хорошо')
const [plans, setPlans] = useState('Как баннер будет готов, будем вешать')
const [recomendations, setRecomendations] = useState('Смотрим 2 недели')

return (

  <>


    <LogoSvg />
    {/* <Header /> */}

    <div id='root'

      className='m-3 p-2 items-center flex'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}

    >
      <Avatar

        alt="Иван бездомный"
        src={require('./images/1.jpg')}
        sx={{ width: '50vw', height: '50vw' }}
      >
      </Avatar>



    </div>


    <Typography
      variant='body1'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}


    >
      Иван Бездомный<br />
    </Typography>
    <Typography
      variant='body1'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Link
        style={{
          textDecoration: 'none'
        }}
        href='tel:89991234567'
      >8(999)123-4567</Link>
    </Typography>



    {/* <Divider/> */}

    <Typography
      className='mt-5'

      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}

      variant='h5'
    >Отчёт по рекламе</Typography>




    <StatChart />
    <div id='root'

      className='m-3 p-2 items-center flex'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}

    >

      <Typography
        className='mt-5'

        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}

        variant='h6'
      >Графиков и таблиц может быть несколько и любых</Typography>
    </div>





    <Divider className='my-5' />
    <Typography
      className='mb-5 '
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      variant='h5'
    >
      Входящие звонки:
    </Typography>


    <Paper
      className=' p-2 m-2'
    >

      <Typography
        className=' p-2 m-2'
      >
        03.03.2023 15:38
      </Typography>

      <ReactAudioPlayer
        src='https://sipuni.com/api/crm/record?id=1677834284.857837&hash=d1ffc0ff7141babc7b9446adc6d8b7c1&user=041635'
        autoPlay={false}
        controls
      />
      <Typography variant='body1'
        className='my-2'
      >
        Звонили сказали вот это
      </Typography>

      <Button size="small"


        className='mr-1'
        color="success"
        variant={"contained"}
        style={{
          // minWidth:0,
          textTransform: 'none',
        }}
      >
        <ThumbUpAltIcon />
        {/* &nbsp; */}
        {/* Да */}
      </Button>

      <Button size="small"

        className='mr-1'
        color="error"
        variant={"outlined"}
        style={{
          textTransform: 'none',
        }}
      >
        <ThumbDownAltIcon />
      </Button>


    </Paper>


    <Paper
      className=' p-2 m-2'
    >
      <Typography
        className=' p-2 m-2'
      >
        04.03.2023 08:25
      </Typography>

      <ReactAudioPlayer
        src='https://sipuni.com/api/crm/record?id=1677834284.857837&hash=d1ffc0ff7141babc7b9446adc6d8b7c1&user=041635'
        autoPlay={false}
        controls
      />
      <Typography variant='body1'
        className='my-2'
      >
        Звонили сказали вот это
      </Typography>

      <Button size="small"


        className='mr-1'
        color="success"
        variant={"outlined"}
        style={{
          // minWidth:0,
          textTransform: 'none',
        }}
      >
        <ThumbUpAltIcon />
        {/* &nbsp; */}
        {/* Да */}
      </Button>

      <Button size="small"

        className='mr-1'
        color="error"
        variant={"outlined"}
        style={{
          textTransform: 'none',
        }}
      >
        <ThumbDownAltIcon />
      </Button>


    </Paper>


    <Divider className='my-5 mt-10'  />

    <Typography
className='mt-10' 
      variant='h6'
    >
      Форма
      <br />
      (Поля заполняются агентом, результат внизу)
    </Typography>

    <Divider className='my-5' />

    <Paper
      className='p-2'
    >
      <Typography

        variant='h6'
      >
        Активность
        <br />
        (Список может быть произвольный для каждого объекта)
      </Typography>


      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}

      >
        <ListItem>

          <ListItemText id="switch-list-label-wifi" primary="Расклейка" />
          <Switch
            edge="end"
            onChange={(e) => setAds(e.target.checked)}
            // checked={ads}
            checked={ads}
          // inputProps={{
          //   'aria-labelledby': 'switch-list-label-wifi',
          // }}
          />
        </ListItem>

      </List>


      <TextField
        id="outlined-multiline-flexible"
        label="Инфо по расклейке"
        placeholder='Инфо по расклейке'
        rows={4}
        value={adsResult}
        onChange={(e) => setAdsResult(e.target.value)}
        multiline
        // maxRows={8}
        fullWidth
      />

      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}

      >
        <ListItem>



          <ListItemText id="switch-list-label-bluetooth" primary="Баннер" />
          <Switch
            edge="end"
            onChange={(e) => setBanner(e.target.checked)}
            // checked={ads}
            // value={banner}
            checked={banner}
          // inputProps={{
          //   'aria-labelledby': 'switch-list-label-bluetooth',
          // }}
          />
        </ListItem>
      </List>

      <TextField
        id="outlined-multiline-flexible"
        label="Инфо по баннеру"
        placeholder='Инфо по баннеру'
        value={bannerResult}
        onChange={(e) => setBannerResult(e.target.value)}
        multiline
        rows={4}
        // maxRows={8}
        fullWidth
      />

      <Button
        className='m-3'
        variant='contained'


      >Добавить ещё активность</Button>

      <Typography

        variant='h6'
      >

      </Typography>


      <Divider className='my-5' />

      <Typography
        className='mt-5'

        // style={{
        //   display: 'flex',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        // }}

        variant='h6'
      >
        Фиксированные текстовые поля:
      </Typography>

      <Typography
        className='mt-5'

        variant='h6'
      >
        Итоги
      </Typography>
      <TextField
        id="outlined-multiline-flexible"
        label="Итоги"
        placeholder='Итоги'
        multiline
        rows={4}
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        // maxRows={8}
        fullWidth
      />


      <Typography
        className='mt-5'

        variant='h6'
      >
        Планы
      </Typography>
      <TextField
        id="outlined-multiline-flexible"
        label="Планы"
        placeholder='Планы'
        multiline
        rows={4}
        value={plans}
        onChange={(e) => setPlans(e.target.value)}
        // maxRows={8}
        fullWidth
      />

      <Typography
        className='mt-5'

        variant='h6'
      >
        Рекомендации
      </Typography>
      <TextField
        id="outlined-multiline-flexible"
        label="Рекомендации"
        placeholder='Рекомендации'
        multiline
        rows={4}
        value={recomendations}
        onChange={(e) => setRecomendations(e.target.value)}
        // maxRows={8}
        fullWidth
      />

    </Paper>

    <Paper
      className='p-2 mt-10'
    >

      <Typography
        className='mb-10 '

        variant='h6'
      >
        Результат формы, который увидит клиент<br /> (обновляется при изменении)
      </Typography>

      <Divider className='my-5' />
      <Typography
        className='mb-5 '
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        variant='h5'
      >
        По вашему объекту сделано:
      </Typography>




      {
        ads && (
          <>
            <div
              className='mb-3'
            >
              <TableContainer
                component={Paper}
              >
                <Table

                >
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography
                          className='font-bold text-xl'


                          variant='body1'
                        >
                          Расклейка
                        </Typography>

                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography


                          variant='body1'
                        >
                          {adsResult}
                        </Typography>

                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

            </div>
          </>
        )
      }
      {
        banner && (
          <>
            <div
              className='mb-3'
            >

              <TableContainer
                component={Paper}
              >
                <Table

                >
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography
                          className='font-bold text-xl'


                          variant='body1'
                        >
                          Баннер
                        </Typography>

                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography


                          variant='body1'
                        >
                          {bannerResult}
                        </Typography>

                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>


            </div>
          </>
        )
      }



      {
        summary !== '' && (
          <>
            <div
              className='mb-3'
            >
              <Typography


                variant='h6'
              >
                Итоги
              </Typography>
              <Typography
                style={{
                  whiteSpace: 'pre-line'
                }}
                variant='body1'
              >
                {summary}
              </Typography>
            </div>
          </>
        )
      }


      {
        plans !== '' && (
          <>
            <div
              className='mb-3'
            >
              <Typography


                variant='h6'
              >
                Планы
              </Typography>
              <Typography
                style={{
                  whiteSpace: 'pre-line'
                }}
                variant='body1'
              >
                {plans}
              </Typography>
            </div>
          </>
        )
      }


      {
        recomendations !== '' && (
          <>
            <div
              className='mb-3'
            >
              <Typography


                variant='h6'
              >
                Рекомендации
              </Typography>
              <Typography
                style={{
                  whiteSpace: 'pre-line'
                }}
                variant='body1'
              >
                {recomendations}
              </Typography>
            </div>
          </>
        )
      }



    </Paper>

    <Paper

      className='my-10 p-2 items-center flex'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}

    >
      <StyledRating
        max={3}

        name="highlight-selected-only"
        // defaultValue={4}
        IconContainerComponent={IconContainer}
        getLabelText={(value) => customIcons[value].label}
        highlightSelectedOnly
      />
    </Paper>





  </>

);