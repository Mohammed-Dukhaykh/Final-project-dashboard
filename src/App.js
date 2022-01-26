import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Sidebar from "./components/Sidebar"
import Company from "./pages/Company"
import Fields from "./pages/Fields"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Skills from "./pages/Skills"
import Users from "./pages/Users"
import JobsContext from "./utils/jobsContext"
import firebase from "./utils/firebase"

function App() {
  const [users, setUsers] = useState([])
  const [profile, setProfile] = useState(null)
  const [company, setCompany] = useState([])
  const [jobs, setJobs] = useState([])
  const [posts, setPosts] = useState([])
  const [skills, setSkills] = useState([])
  const [fields, setFields] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getCompany()
    getJobs()
    getPosts()
    getSkills()
    getFields()
    if (localStorage.tokenDashboardJobs) {
      getUsers()
      getProfile()
    }
  }, [])

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/auth/login-admin", adminBody)
      localStorage.tokenDashboardJobs = response.data
      toast.success("login success")
      getProfile()
      getUsers()
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const logout = () => {
    try {
      localStorage.removeItem("tokenDashboardJobs")
      setProfile(null)
      navigate("/login")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/auth", {
      headers: {
        Authorization: localStorage.tokenDashboardJobs,
      },
    })
    setUsers(response.data)
  }
  const getProfile = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/profile", {
      headers: {
        Authorization: localStorage.tokenDashboardJobs,
      },
    })
    setProfile(response.data)
  }
  const getCompany = async () => {
    const response = await axios.get("http://localhost:5000/api/company")
    setCompany(response.data)
  }
  const getJobs = async () => {
    const response = await axios.get("http://localhost:5000/api/jobs")
    setJobs(response.data)
  }
  const getPosts = async () => {
    const response = await axios.get("http://localhost:5000/api/posts")
    setPosts(response.data)
  }
  const deleteUser = async userId => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/${userId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardJobs,
        },
      })
      toast.success("User is Deleted")
      getUsers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const addUser = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const avatarImage = form.elements.avatar.files[0]
      const avatarRef = firebase.storage().ref("photo").child(`${avatarImage.lastModified}-${avatarImage.name}`)
      await avatarRef.put(avatarImage)
      const AvatarUrl = await avatarRef.getDownloadURL()
      const adminBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: AvatarUrl ,
      }
      await axios.post("http://localhost:5000/api/auth/signup-admin", adminBody, {
        headers: {
          Authorization: localStorage.tokenDashboardJobs,
        },
      })
      toast.success("The User is Added")
      getUsers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteCompany = async companyId => {
    try {
      await axios.delete(`http://localhost:5000/api/company/${companyId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardJobs,
        },
      })
      toast.success("The Company is Delete")
      getCompany()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const getSkills = async () => {
    const response = await axios.get("http://localhost:5000/api/skills")
    setSkills(response.data)
  }
  const editSkills = async (e, skillsId) => {
    e.preventDefault()
    try {
      const form = e.target
      const skillsBody = {
        skill: form.elements.skills.value,
      }
      await axios.put(`http://localhost:5000/api/skills/${skillsId}`, skillsBody, {
        headers: {
          Authorization: localStorage.tokenDashboardJobs,
        },
      })
      getSkills()
      toast.success("The Skill is Update")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteSkills = async skillsId => {
    try {
      await axios.delete(`http://localhost:5000/api/skills/${skillsId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardJobs,
        },
      })
      getSkills()
      toast.success("The Skill is Delete")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const addSkill = async e => {
    try {
      e.preventDefault()
      const form = e.target
      const skillsBody = {
        skill: form.elements.skill.value,
      }
      await axios.post("http://localhost:5000/api/skills", skillsBody, {
        headers: {
          Authorization: localStorage.tokenDashboardJobs,
        },
      })
      getSkills()
      toast.success("The Skill is Added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const getFields = async () => {
    const response = await axios.get("http://localhost:5000/api/interesting")
    setFields(response.data)
  }
  const editField = async (e, fieldId) => {
    try {
      e.preventDefault()
      const form = e.target
      const fieldBody = {
        name: form.elements.field.value,
      }
      await axios.put(`http://localhost:5000/api/interesting/${fieldId}`, fieldBody, {
        headers: {
          Authorization: localStorage.tokenDashboardJobs,
        },
      })
      getFields()
      toast.success("The Field is Update")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteField = async filedId => {
    try {
      await axios.delete(`http://localhost:5000/api/interesting/${filedId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardJobs,
        },
      })
      getFields()
      toast.success("The Field is Delete")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const addField = async e => {
    try {
      e.preventDefault()
      const form = e.target
      const fieldBody = {
        name: form.elements.field.value,
      }
      await axios.post("http://localhost:5000/api/interesting", fieldBody, {
        headers: {
          Authorization: localStorage.tokenDashboardJobs,
        },
      })
      getFields()
      toast.success("The Field is Added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const store = {
    login,
    users,
    logout,
    company,
    jobs,
    posts,
    profile,
    deleteUser,
    addUser,
    deleteCompany,
    skills,
    editSkills,
    deleteSkills,
    addSkill,
    fields,
    editField,
    deleteField,
    addField,
  }

  return (
    <JobsContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            <Route path="/" element={localStorage.tokenDashboardJobs ? <Home /> : <Navigate to="/login" />} />
            <Route path="/users" element={localStorage.tokenDashboardJobs ? <Users /> : <Navigate to="/login" />} />
            <Route path="/skills" element={localStorage.tokenDashboardJobs ? <Skills /> : <Navigate to="/login" />} />
            <Route path="/company" element={localStorage.tokenDashboardJobs ? <Company /> : <Navigate to="/login" />} />
            <Route path="/fields" element={localStorage.tokenDashboardJobs ? <Fields /> : <Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </Box>
    </JobsContext.Provider>
  )
}

export default App
