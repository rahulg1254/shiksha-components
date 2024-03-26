import React from 'react';
import { CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import { CohortCardProps } from '../utils/Interfaces';

const CohortCard: React.FC<CohortCardProps> = ({ showBackground, isRemote, cohortName }) => {
  const theme = useTheme<any>();

  const boxStyling={
    display: 'flex',
    height: 56,
    border: `1px solid ${theme.palette.warning.A100}`,
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: theme.palette.warning.A400,
  }

  const cardMedia={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '54px',
    height: '56px',
    borderRadius: '8px 0px 0px 8px',
    backgroundColor: !showBackground ? theme.palette.warning.A400 : theme.palette.primary.light,
  }

  const iconMedia={
    alignSelf: 'center',
    marginLeft: 'auto',
    height: '1rem',
    width: '1rem',
    marginRight: 2,
    display: !showBackground ? 'none' : 'block'
  }

  return (
    <Box sx={boxStyling}>
      <CardMedia
        sx={cardMedia}
        title="Class Image"
      >
        {isRemote ? <SmartDisplayIcon /> : <ApartmentIcon />}
      </CardMedia>
      <CardContent>
        <Typography variant='h2' marginRight="auto" fontWeight={400}>
          {!showBackground
            ? isRemote
              ? 'New Remote Class'
              : 'New Physical Class'
            : `${cohortName}`}
        </Typography>
      </CardContent>
      <ArrowForwardIosIcon sx={iconMedia} />
    </Box>
  );
};

export default CohortCard;