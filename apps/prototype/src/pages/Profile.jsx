import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Avatar, 
  Grid, 
  Button, 
  Tabs,
  Tab,
  IconButton,
  Chip,
  Menu,
  MenuItem,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GridViewIcon from '@mui/icons-material/GridView';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FilterListIcon from '@mui/icons-material/FilterList';
import VerifiedIcon from '@mui/icons-material/Verified';

// Styled components
const ProfileContainer = styled(Box)(() => ({
  maxWidth: '935px',
  margin: '0 auto',
  padding: '30px 20px',
}));

const UserInfoContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '44px',
  gap: '30px',
}));

const UserAvatar = styled(Avatar)(() => ({
  width: '150px',
  height: '150px',
  border: '1px solid #dbdbdb',
}));

const UserInfo = styled(Box)(() => ({
  flex: 1,
}));

const UserHeader = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  marginBottom: '20px',
}));

const Username = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
}));

const ButtonsContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '8px',
  marginBottom: '20px',
}));

const StatsContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '40px',
  marginBottom: '20px',
}));

const StatItem = styled(Box)(() => ({
  display: 'flex',
  gap: '4px',
}));

const CategoryChips = styled(Box)(() => ({
  display: 'flex',
  gap: '8px',
  marginBottom: '20px',
}));

const ContentContainer = styled(Box)(() => ({
  borderTop: '1px solid #dbdbdb',
}));

const TabPanel = styled(Box)(() => ({
  padding: '16px 0',
}));

const ItemCard = styled(Box)(({ type }) => ({
  position: 'relative',
  paddingTop: '100%',
  backgroundColor: '#fafafa',
  borderRadius: '3px',
  overflow: 'hidden',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.9,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: type === 'new' ? '#4CAF50' : '#FF9800',
    opacity: 0.1,
  },
}));

const ItemImage = styled('img')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}));

const ItemOverlay = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0,0,0,0.3)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '12px',
  opacity: 0,
  transition: 'opacity 0.2s',
  '&:hover': {
    opacity: 1,
  },
}));

const Profile = () => {
  const [tabValue, setTabValue] = useState(0);
  const [category, setCategory] = useState('all');
  const [condition, setCondition] = useState('all');
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);

  const user = {
    username: "johndoe_marketplace",
    isVerified: true,
    bio: "Professional Real Estate Agent & Auto Parts Dealer",
    website: "www.johndoemarketplace.com",
    posts: 156,
    followers: 12500,
    following: 890,
    avatarUrl: "/api/placeholder/150/150",
    items: [
      {
        id: 1,
        type: 'real-estate',
        condition: 'new',
        imageUrl: "/api/placeholder/300/300",
        title: "Modern Apartment",
        price: "$250,000",
        isVideo: false,
      },
      {
        id: 2,
        type: 'auto-parts',
        condition: 'used',
        imageUrl: "/api/placeholder/300/300",
        title: "BMW Engine Parts",
        price: "$1,200",
        isVideo: true,
      },
      // Add more items as needed
    ],
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const filteredItems = user.items.filter(item => {
    if (category !== 'all' && item.type !== category) return false;
    if (condition !== 'all' && item.condition !== condition) return false;
    return true;
  });

  return (
    <ProfileContainer>
      <UserInfoContainer>
        <UserAvatar src={user.avatarUrl} alt={user.username} />
        <UserInfo>
          <UserHeader>
            <Username>
              <Typography variant="h5">{user.username}</Typography>
              {user.isVerified && (
                <VerifiedIcon color="primary" sx={{ width: 20, height: 20 }} />
              )}
            </Username>
          </UserHeader>
          
          <ButtonsContainer>
            <Button variant="contained" sx={{ borderRadius: '8px' }}>
              Edit Profile
            </Button>
            <Button variant="outlined" sx={{ borderRadius: '8px' }}>
              Share Profile
            </Button>
          </ButtonsContainer>

          <StatsContainer>
            <StatItem>
              <Typography variant="subtitle1" fontWeight="bold">
                {user.posts}
              </Typography>
              <Typography variant="subtitle1">listings</Typography>
            </StatItem>
            <StatItem>
              <Typography variant="subtitle1" fontWeight="bold">
                {user.followers.toLocaleString()}
              </Typography>
              <Typography variant="subtitle1">followers</Typography>
            </StatItem>
            <StatItem>
              <Typography variant="subtitle1" fontWeight="bold">
                {user.following.toLocaleString()}
              </Typography>
              <Typography variant="subtitle1">following</Typography>
            </StatItem>
          </StatsContainer>

          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            {user.bio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.website}
          </Typography>
        </UserInfo>
      </UserInfoContainer>

      <CategoryChips>
        <Chip
          label="All Categories"
          onClick={() => setCategory('all')}
          color={category === 'all' ? 'primary' : 'default'}
        />
        <Chip
          label="Real Estate"
          onClick={() => setCategory('real-estate')}
          color={category === 'real-estate' ? 'primary' : 'default'}
        />
        <Chip
          label="Auto Parts"
          onClick={() => setCategory('auto-parts')}
          color={category === 'auto-parts' ? 'primary' : 'default'}
        />
        <IconButton onClick={handleFilterClick}>
          <FilterListIcon />
        </IconButton>
      </CategoryChips>

      <Menu
        anchorEl={filterAnchorEl}
        open={Boolean(filterAnchorEl)}
        onClose={handleFilterClose}
      >
        <MenuItem onClick={() => { setCondition('all'); handleFilterClose(); }}>
          All Conditions
        </MenuItem>
        <MenuItem onClick={() => { setCondition('new'); handleFilterClose(); }}>
          New Only
        </MenuItem>
        <MenuItem onClick={() => { setCondition('used'); handleFilterClose(); }}>
          Used Only
        </MenuItem>
      </Menu>

      <ContentContainer>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab icon={<GridViewIcon />} label="LISTINGS" />
          <Tab icon={<VideoLibraryIcon />} label="VIDEOS" />
          <Tab icon={<BookmarkBorderIcon />} label="SAVED" />
        </Tabs>

        <TabPanel>
          <Grid container spacing={1}>
            {filteredItems.map((item) => (
              <Grid item xs={4} key={item.id}>
                <ItemCard type={item.condition}>
                  <ItemImage src={item.imageUrl} alt={item.title} />
                  <ItemOverlay>
                    <Typography variant="subtitle2" color="white">
                      {item.title}
                    </Typography>
                    <Typography variant="h6" color="white" fontWeight="bold">
                      {item.price}
                    </Typography>
                    {item.isVideo && (
                      <VideoLibraryIcon sx={{ color: 'white', position: 'absolute', top: 12, right: 12 }} />
                    )}
                  </ItemOverlay>
                </ItemCard>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </ContentContainer>
    </ProfileContainer>
  );
};

export default Profile;