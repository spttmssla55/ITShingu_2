import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from "./RouteFor/routes";
import Header from "./Header";
import LoginForm from './login'; // 로그인 페이지 import

const renderRoutes = (routes) => {
    return routes.map((route, index) => {
        // 서브 라우트가 있는 경우 중첩 라우팅 처리
        if (route.routes) {
            return (
                <Route key={index} path={route.path} element={<route.component />}>
                    {renderRoutes(route.routes)}
                </Route>
            );
        }

        return <Route key={index} path={route.path} element={<route.component />} />;
    });
};

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                {renderRoutes(routes)}
                <Route path="/login" element={<LoginForm />} /> {/* 로그인 경로 추가 */}
            </Routes>
        </Router>
    );
}

export default App;
