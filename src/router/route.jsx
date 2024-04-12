import Login from "@/views/Login/Login"
import Edit from "@/views/Edit/Edit"
import Detail from "@/views/Detail/Detail"
import My from "@/views/My/My"
import NotFound from "@/views/NotFound/NotFound"
import RouterAuth from "./RouterAuth"
import Regist from "../views/Login/Regist"
import Add from "../views/Add/Add"
import HomePage from "../views/Home/HomePage"
import SearchPage from "../views/Home/SearchPage"

// 路由列表
const routeList = [
  {
    path: "/",
    element: <RouterAuth><HomePage /></RouterAuth>,
  },
  {
    path: "/search/:query",
    element: <SearchPage />,
  },
  {
    path: "/detail/:travelId",
    element: <Detail />,
  },
  {
    path: "/edit/:travelId",
    element: <Edit />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/regist",
    element: <Regist />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/My",
    element: <My />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routeList
