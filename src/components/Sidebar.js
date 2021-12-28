import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import CssBaseline from "@mui/material/CssBaseline"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import MovieCreationIcon from "@mui/icons-material/MovieCreation"
import AddReactionIcon from "@mui/icons-material/AddReaction"
import RecentActorsIcon from "@mui/icons-material/RecentActors"
import GroupIcon from "@mui/icons-material/Group"
import TheatersIcon from "@mui/icons-material/Theaters"
import { createTheme, ThemeProvider } from "@mui/material"
import { Link } from "react-router-dom"
import LoginIcon from "@mui/icons-material/Login"
import { useContext } from "react"
import JobsContext from "../utils/jobsContext"
import HomeIcon from "@mui/icons-material/Home"
import WorkSharpIcon from "@mui/icons-material/WorkSharp"
import ApartmentIcon from "@mui/icons-material/Apartment"
import AssignmentIcon from '@mui/icons-material/Assignment';
import SchoolIcon from '@mui/icons-material/School';

const drawerWidth = 240

export default function PermanentDrawerLeft() {
  const { logout, profile } = useContext(JobsContext)
  if (!profile) return null
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          primary: { main: "rgb(102, 157, 246)" },
          background: { paper: "rgb(0, 0, 0)" },
        },
      })}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <WorkSharpIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="My Jobs dashboard" sx={{ color: "white" }} />
          </ListItem>
        </List>

        <img class="rounded-circle" width={80} src={profile.avatar} data-holder-rendered="true" />
        <h5 style={{ color: "white", marginTop: "10px" }}>
          {profile.firstName} {profile.lastName}{" "}
        </h5>

        <List>
          <Link to="/" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <GroupIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Users" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/company" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <ApartmentIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Companies" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/skills" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <AssignmentIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Skills" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/fields" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemIcon>
                <SchoolIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Fields" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          
        </List>
        <Divider />

        {!localStorage.tokenDashboardJobs ? (
          <List style={{ marginTop: "auto" }}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="login" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          </List>
        ) : (
          <List style={{ marginTop: "auto" }}>
            <ListItem button onClick={logout}>
              <ListItemIcon>
                <LoginIcon sx={{ color: "white", textDecoration: "none" }} />
              </ListItemIcon>
              <ListItemText primary="logout" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </List>
        )}
      </Drawer>
    </ThemeProvider>
  )
}
