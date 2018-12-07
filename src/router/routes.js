export default [
  {
    path: "/",
    // redirect: "/home",
    name: "home",
    meta: {
      title: "首页",
      icon: require("@/assets/image/home.png")
    },
    component: () => import("@/views/Home")
  },
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/404",
    name: "notFound",
    component: () => import("@/components/notFound")
  },
  {
    path: "/skill",
    name: "skill",
    meta: {
      title: "学习",
      icon: require("@/assets/image/skill.png")
    },
    component: () => import("@/views/Skill")
  },
  {
    path: "/zone",
    name: "zone",
    meta: {
      title: "Zone",
      icon: require("@/assets/image/zone.png")
    },
    component: () => import("@/views/Zone"),
    children: [
      {
        path: "/",
        component: () => import("@/views/Zone/Acu")
      },
      {
        path: "me",
        component: () => import("@/views/Zone/Me")
      }
    ]
  },
  {
    path: "/article",
    name: "article",
    meta: {
      title: "笔记",
      icon: require("@/assets/image/article.png")
    },
    component: () => import("@/views/Article"),
    children: [
      {
        path: "/",
        component: () => import("@/views/Article/List")
      },
      {
        path: ":id",
        component: () => import("@/views/Article/content/index")
      }
    ]
  }
];
