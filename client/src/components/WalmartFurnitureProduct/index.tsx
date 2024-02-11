import { Box, Button, Paper, Stack, Typography, useTheme } from '@mui/material';
import { WalmartProduct as ItemType } from '@/types/walmart';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

const WalmartProduct = ({ item }: { item: ItemType }) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const searchText = params.get('item');
  const { breakpoints } = useTheme();
  const mediumSizeMatches = useMediaQuery(breakpoints.up('md'));
  const toDetails = () => {
    navigate('/product/walmart/' + item.Id, {
      state: { searchText: searchText }
    });
  };
  return (
    <Paper
      sx={{
        width: { xs: 180, sm: 180, md: 250 },
        height: { xs: 180, sm: 180, md: 250 },
        padding: { xs: '5px', md: '15px' },
        margin: { xs: '0 10px', md: '0 10px' }
      }}
      elevation={3}
    >
      <Box
        sx={{
          width: { xs: '100%', md: 250 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start'
        }}
      >
        <Box
          sx={{
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            margin: { xs: '0 0', md: '5px 0' }
          }}
        >
          <Box
            component="img"
            sx={{ height: { xs: 70, sm: 70, md: 150 } }}
            src={item.ImageUrl}
            alt=""
          />
        </Box>
        <Box>
          <Typography sx={{ fontSize: '10px' }}>walmart</Typography>
        </Box>
        <Box
          sx={{
            justifyContent: 'start',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '5px 0'
          }}
        >
          <Box
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              width: '100%',
              height: '33px',
              lineHeight: '15px'
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '10px', md: '11px' },
                fontWeight: { xs: 400, md: 600 }
              }}
            >
              {item.Name}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            alignItems: { xs: 'start', sm: 'start', md: 'center' },
            justifyContent: 'space-between',
            margin: { xs: '0 0', sm: '0 0', md: '5px 0' }
          }}
        >
          <Stack
            direction="row"
            sx={{ gap: '5px', margin: { xs: '5px 0', sm: '5px 0', md: '0 0' } }}
          >
            {item.OriginalPrice !== item.CurrentPrice ? (
              <Typography
                sx={{
                  fontSize: { xs: '11px', sm: '11px', md: '13px' },
                  color: 'green'
                }}
              >
                ${item.CurrentPrice}
              </Typography>
            ) : (
              <></>
            )}
            {item.OriginalPrice === '' ? (
              <></>
            ) : (
              <Typography
                sx={{
                  fontSize: { xs: '11px', sm: '11px', md: '13px' },
                  textDecoration: 'line-through'
                }}
              >
                ${item.OriginalPrice}
              </Typography>
            )}
          </Stack>
          <Button
            variant="contained"
            onClick={toDetails}
            sx={{
              // backgroundColor: 'primary.main',
              fontSize: { xs: '8px', sm: '10px', md: '10px' },
              width: { xs: '10px', sm: '10px', md: '100px' },
              height: { xs: '20px', sm: '20px', md: '25px' }
            }}
          >
            {mediumSizeMatches ? 'View Deals' : 'View'}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};
export default WalmartProduct;
