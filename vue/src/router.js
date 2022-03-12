import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import Map from "./components/MainMap";

Vue.use(VueRouter);


//commit 확인
//VueRouter 클래스 함수로 라우터 객체를 생성한다.
//routes는 경로와 컴포넌트로 이루어진 컬렉션이다. 이 맵을 보고 라우터가 경로에 따라 , 그에 맞는 컴포넌트를 렌더링 한다.
const router = new VueRouter({
  mode: "history",
  routes: [{
      path: "/",
      component: Home
    },
    {
      path: "/about",
      component: About
    },
      {
          path: "/Map",
          component: Map
      }
  ]
});


//생성한 vueRouter 인스턴스 익스포트 하기
export default router;