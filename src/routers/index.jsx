import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { layoutRoutes } from '../config/layoutRoutes';
import LayoutContainer from '../Layouts/LayoutContainer';
function AppRoute(props) {
    return (
        <Router>
            <Routes >
                <Route path='/'>
                    {layoutRoutes.map(({ path, title, component, isFooter, isHeader, isPrivate, isSidebar }) => (
                        <Route
                            key={title}
                            path={path}
                            element={
                                <LayoutContainer
                                    component={component}
                                    isHeader={isHeader}
                                    isFooter={isFooter}
                                    isSidebar={isSidebar}
                                    isPrivate={isPrivate}
                                    title={title}
                                />
                            }
                        />
                    ))}
                </Route>

            </Routes>
        </Router>
    );
}

export default AppRoute;