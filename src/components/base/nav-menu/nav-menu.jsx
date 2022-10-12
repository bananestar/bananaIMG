import {
	Avatar,
	Box,
	Grid,
	InputAdornment,
	List,
	ListItem,
	ListItemText,
	Stack,
	TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SearchBar = styled(TextField)(() => ({
	'& fieldset': {
		borderRadius: '25px',
	},
}));

const NavMenu = () => {
	const [value, setValue] = useState('');
	const [menu01, setMenu01] = useState(false);
	const [menu02, setMenu02] = useState(false);
	const [menu03, setMenu03] = useState(false);
	const [menu04, setMenu04] = useState(false);
	const location = useLocation();

	useEffect(() => {
		switch (location.pathname) {
			case '/':
				setMenu01(true);
				setMenu02(false);
				setMenu03(false);
				setMenu04(false);
				break;
			case '/photo':
				setMenu01(false);
				setMenu02(true);
				setMenu03(false);
				setMenu04(false);
				break;
			case '/video':
				setMenu01(false);
				setMenu02(false);
				setMenu03(true);
				setMenu04(false);
				break;
			case '/collection':
				setMenu01(false);
				setMenu02(false);
				setMenu03(false);
				setMenu04(true);
				break;
			default:
				setMenu01(true);
				setMenu02(false);
				setMenu03(false);
				setMenu04(false);
				break;
		}
	}, [location]);

	return (
		<Box sx={{ minHeight: '110px', display:'flex', justifyContent:'center', alignItems:'center' }} >
			<Grid container sx={{ py: '10px', px: '20px' }}>
				<Grid item container spacing={2}>
					<Grid item>
						<Avatar alt="logo" src="../../../../public/logo.jpg" sx={{ width: 56, height: 56 }} />
					</Grid>
					<Grid item>
						<SearchBar
							value={value}
							onChange={({ target }) => setValue(target.value)}
							fullWidth
							size="small"
							placeholder="Search photos"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon />
									</InputAdornment>
								),
							}}
						/>
					</Grid>
				</Grid>
				<Grid item>
					<List component={Stack} direction="row" spacing={2}>
						<ListItem
							disablePadding
							component={Link}
							to="/"
							sx={{
								textDecoration: 'none',
								minHeight: '50px',
								borderBottom: menu01 ? 2 : 'none',
								color: 'inherit',
							}}
						>
							<ListItemText primary="Home" />
						</ListItem>
						<ListItem
							disablePadding
							component={Link}
							to="/photo"
							sx={{
								textDecoration: 'none',
								minHeight: '50px',
								borderBottom: menu02 ? 2 : 'none',
								color: 'inherit',
								'&:hover': { borderBottom: 2 },
							}}
						>
							<ListItemText primary="Photo" />
						</ListItem>
						<ListItem
							disablePadding
							component={Link}
							to="/video"
							sx={{
								textDecoration: 'none',
								minHeight: '50px',
								borderBottom: menu03 ? 2 : 'none',
								color: 'inherit',
								'&:hover': { borderBottom: 2 },
							}}
						>
							<ListItemText primary="Video" />
						</ListItem>
						<ListItem
							disablePadding
							component={Link}
							to="/collection"
							sx={{
								textDecoration: 'none',
								minHeight: '50px',
								borderBottom: menu04 ? 2 : 'none',
								color: 'inherit',
								'&:hover': { borderBottom: 2 },
							}}
						>
							<ListItemText primary="Collection" />
						</ListItem>
					</List>
				</Grid>
			</Grid>
		</Box>
	);
};

export default NavMenu;
