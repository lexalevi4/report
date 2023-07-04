import { Avatar, Box, Button, Divider, Typography } from '@mui/material';
import { ReactComponent as WhatsappSvg } from '../images/whatsapp.svg';
import { ReactComponent as TelegramSvg } from '../images/telegram.svg';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
function Agent({ user }) {


    // console.log(window.innerWidth);

    return (<>
        <Box
            height={50}
        ></Box>

        <Divider
            className="my-10"
        />

        <Box
            className='m-3 p-2  items-center flex'
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >

            <Avatar


                alt={user.title}
                src={user.avatar}
                sx={{ width: '50vw', height: '50vw', maxHeight: 300, maxWidth: 300 }}
            >
            </Avatar>

        </Box>
        <Box
            className='items-center flex'
            style={{
                // display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography
                variant="h6"
            >
                Ваш агент
            </Typography>

        </Box>


        <Box
            className=' items-center flex text-center'
            style={{
               
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >

            <Typography
                variant="h5"
            >
                {user.title}
            </Typography>
        </Box>

        <Box
            className=' items-center flex'
            style={{
                // display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >



            <Button
                startIcon={<LocalPhoneIcon />}
                style={{
                    textTransform: 'none',
                }}
                href={'tel:' + user.phone}

                className="mx-2 my-8"
                variant="text"
            >
                {user.phone}
            </Button>
        </Box>
        {/* <Box
            className=' items-center flex m-0'
            style={{
                // display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Button
                target='_blank'


                style={{
                    textTransform: 'none',
                    minWidth: 40
                }}
                // href={'https://wa.me/' + (user.phone).replace(/\D/gi,'') }
                href={
                    window.innerWidth < 600 ?
                        'whatsapp://send?phone=' + (user.phone).replace(/\D/gi, '') :
                        'https://web.whatsapp.com/send/?phone=' + (user.phone).replace(/\D/gi, '') + '&text&type=phone_number&app_absent=0'
                }
                // 79263978507

                className="my-0 p-0 "
                variant="text"
            >
                <WhatsappSvg className="m-0" width="30px" height="30px" />

            </Button>
            <Button
                target='_blank'
                href={'https://t.me/+' + (user.phone).replace(/\D/gi, '')}
                style={{
                    textTransform: 'none',

                    minWidth: 40
                }}

                className="my-0 p-0"
                variant="text"
            >
                <TelegramSvg className="m-0" width="30px" height="30px" />
            </Button>



        </Box> */}
    </>);
}

export default Agent;