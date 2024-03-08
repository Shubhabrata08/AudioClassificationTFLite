import React from 'react'
import {Box,Grid} from '@mui/material';
import { Pieactive } from './Pieactive';
import { Pieactive2 } from './Pieactive2';
import { Pieactive3 } from './Pieactive3';
import {Barchart} from './Barchart';
import {Barchart2} from './Barchart2';
import {Barchart3} from './Barchart3';
//import { Linechart } from './Linechart';
// import { Scatterchart } from './Scatterchart';
// import {useNavigate} from 'react-router-dom'
// import { useEffect } from 'react';
// import axios from 'axios'
//import {Link as LinkComponent} from 'react-router-dom'
//import {AdminPanelSettings as AdminPanelSettingsIcon, Dashboard as DashboardIcon, ExitToApp as ExitToAppIcon, Group as GroupIcon,Menu as MenuIcon,Groups as GroupsIcon,ManageAccounts as ManageAccountsIcon,Message as MessageIcon,Close as CloseIcon} from "@mui/icons-material"
//import moment from 'moment'

// const Link = styled(LinkComponent)`
//  text-decoration:none;
//  border-radius:2rem;
//  padding: 1rem 2rem;
//  color:black;
//  &:hover{
//   color:rgba(0,0,0,0.54)
//  }
// `
// const adminTabs = [
//   {
//   name : "Dashboard",
//   path:"/dashboard",
//   icon:<DashboardIcon />
//   },
//   {
//     name : "Dashboard",
//     path:"/dashboard",
//     icon:<ManageAccountsIcon />
//   },
//   {
//     name : "Dashboard",
//     path:"/dashboard",
//     icon:<GroupsIcon />
//   },
//   {
//     name : "Dashboard",
//     path:"/dashboard",
//     icon:<MessageIcon />
//   }
// ]

// const SideBar = ({w = "100%"})=>{
//   const location = useLocation()
//   const logoutHandler = ()=>{

//   }
//   return(
//     <>
//     <Stack width = {w} direction = {"column"} p = {"3rem"} spacing={"3rem"}>
//        <Typography variant = "h5" textTransform={"uppercase"}>
//         Chattu
//        </Typography>
//        <Stack spacing = "1rem">
//           {
//             adminTabs.map((tab)=>(
//               <Link key={tab.path} to={tab.path} sx = {location.pathname === tab.path && {bgColor:"black",color:"white",":hover":{color:"white"}}}>
//                 <Stack direction={"row"} alignItem={"center"} spacing={"1rem"}>
//                  {tab.icon}
//                  <Typography fontSize={"1.2rem"}>{tab.name}</Typography>
//                 </Stack>
//               </Link>
//             ))
//           }
//               <Link onClick={logoutHandler}>
//                 <Stack direction={"row"} alignItem={"center"} spacing={"1rem"}>
//                  <ExitToAppIcon />
//                  <Typography>Logout</Typography>
//                 </Stack>
//               </Link>
//        </Stack>
//     </Stack>
//     </>
//   )
// }
// const AdminLayout = ({children})=>{
//     const [isMobile,setIsMobile] = useState(false) 
//     const handleMobile = ()=> setIsMobile(!isMobile)
//     const handleClose = ()=> setIsMobile(false)
//    return(
//     <>
//     <Grid container minHeight = {"100vh"}>
//       <Box sx={{ display : {xs : "block",md : "none"},position : "fixed",right : "1rem",top : "1rem"}}>
//         <IconButton onClick = {handleMobile}>
//           {isMobile ? <CloseIcon /> : <MenuIcon />}
//         </IconButton>
//       </Box>
//        <Grid item md = {4} lg = {3} sx = {{display : {xs : "none",md:"block"}}} >
//         <SideBar />
//        </Grid>
//        <Grid item xs = {12} md = {8} lg = {9} sx = {{bgcolor :"#f5f5f5"}}>
//           {children}
//        </Grid>
//        <Drawer open = {isMobile} onClose={handleClose}>
//           <SideBar w = "50vw" />
//        </Drawer>
//     </Grid>
//     </>
//    )
// }
export function Dashboard() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     navigate('/login');
  //     return; // Exit early if token is not present
  //   }

  //   axios.get('http://localhost:5000/devices/', {
  //     headers: {
  //       Authorization: `Bearer ${token}` // Correct way to send token in headers
  //     }
  //   })
  //   .then(res => {
  //     console.log(res.data);
  //     navigate('/dashboard')
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     navigate('/');
  //   });
  //   // eslint-disable-next-line
  // }, []); // Empty dependency array ensures the effect runs only once

  // const SearchField = styled("input")`
  // padding:1rem 2rem;
  // width:20vmax;
  // border:none;
  // outline:none;
  // border-radius:1.5rem;
  // background-color:#f1f1f1;
  // font-size:1.1rem;
  // `
  // const CurveButton=styled("button")`
  // padding:1rem 2rem;
  // border:none;
  // outline:none;
  // border-radius:1.5rem;
  // cursor:pointer;
  // background-color:black;
  // color:white;
  // font-size:1.1rem;
  // &:hover{
  //   background-color:rgba(0,0,0,0.8)
  // }
  // `

  // const AppBar = ()=>{
  //   <Paper elevation={3} sx={{padding:"2rem",margin:"2rem 0",borderRadius:"1rem"}}>
  //     <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
  //       <AdminPanelSettingsIcon sx={{fontSize:"3rem"}}/>
  //       <SearchField placeholder="Search..." />
  //       <CurveButton>Search</CurveButton>
  //     <Box flexGrow={1} />
  //       <Typography display={{xs:"none",lg:"none"}}>
  //         {moment().format('MMMM Do YYYY,h:mm:ss a')}
  //       </Typography>
  //     </Stack>
  //   </Paper>
  // }
  return (
    <>
     {/* <AdminLayout>
      <Container component={"main"}>
        {AppBar}
        <Stack direction={"row"} spacing={"2rem"} flexWrap={"wrap"}>  
          <Paper>
            <Typography >Last Messages</Typography>
             {"Chat"}
          </Paper>
          <Paper elevation={3} sx={{padding:"2rem 3.5rem",borderRadius:"1rem",width:"100%",maxWidth:"45rem"}}>
            {"Doughnut Chart"}
            <Stack>
              <GroupIcon></GroupIcon><Typography>vs</Typography>
            </Stack>
          </Paper>
        </Stack>
      </Container>
     </AdminLayout> */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '230vh',backgroundColor : 'rgb(255,255,255)' ,marginLeft:'35px',marginTop:'20px'}}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={10}>    
      <Grid item xs={12} md={6}>
        <Box
          height={400}
          width = "110%"
          my={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ border: '2px solid grey' }}
        >
         <Barchart />
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box
          height={400}
          width = "70%"
          my={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ border: '2px solid grey' }}
        >
          <Pieactive />
        </Box>
      </Grid>
      </Grid>
        </Grid>
      <Grid item xs={12}>
        <Grid container spacing={10}>
        

      
      <Grid item xs={12} md={6}>
        <Box
          height={400}
          width = "110%"
          my={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ border: '2px solid grey' }}
        >
         <Barchart2 />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={400}
          width = "70%"
          my={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ border: '2px solid grey' }}
        >
          <Pieactive2 />
        </Box>
      </Grid>
        </Grid>
      </Grid>
    
      <Grid item xs={12}>
        <Grid container spacing={10}>
        

      
      <Grid item xs={12} md={6}>
        <Box
          height={400}
          width = "110%"
          my={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ border: '2px solid grey' }}
        >
         <Barchart3 />
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box
          height={400}
          width = "70%"
          my={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ border: '2px solid grey' }}
        >
          <Pieactive3 />
        </Box>
      </Grid>
        </Grid>
      </Grid>
    
      {/* <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              height={200}
              width = "60%"
              my={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{ border: '2px solid grey' }}
            >
              <Linechart />
            </Box>
          </Grid>
           <Grid item xs={12} md={6}>

            <Box
              height={200}
              width = "60%"
              my={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{ border: '2px solid grey' }}
            >
              <Scatterchart />
            </Box>
          </Grid>
        </Grid>
      </Grid> */}
    </Grid>
    </div>
    </>
  )
}
