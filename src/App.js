import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomeComponent';
import Register from './components/RegisterComponent';
import Login from './components/LoginComponent';
import Dashboard from './components/DashboardComponent';
import CreateProperty from './components/CreatepropertyComponent';
import EditProperty from './components/EditpropertyComponent';
import SearchProperties from './components/SearchpropertyComponent';
import PrivateRoute from './components/PrivateRouteComponent';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/dashboard"
                    element={
                        // <PrivateRoute>
                            <Dashboard />
                        // </PrivateRoute>
                    }
                />
                <Route
                    path="/properties/new"
                    element={
                        // <PrivateRoute>
                            <CreateProperty />
                        // </PrivateRoute>
                    }
                />
                <Route
                    path="/properties/edit/:id"
                    element={
                        // <PrivateRoute>
                            <EditProperty />
                        // </PrivateRoute>
                    }
                />
                <Route path="/search" element={<SearchProperties />} />
            </Routes>
        </Router>
    );
}

export default App;