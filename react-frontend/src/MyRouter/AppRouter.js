import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

import SingleStuDetailsPage from "../components/app_components/StuDetailsPage/SingleStuDetailsPage";
import StuDetailProjectLayoutPage from "../components/app_components/StuDetailsPage/StuDetailProjectLayoutPage";
//  ~cb-add-import~

const AppRouter = () => {
    return (
        <Routes>
            {/* ~cb-add-unprotected-route~ */}
            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
<Route path="/stuDetails/:singleStuDetailsId" exact element={<SingleStuDetailsPage />} />
<Route path="/stuDetails" exact element={<StuDetailProjectLayoutPage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
        </Routes>
    );
}

const mapState = (state) => {
    const { isLoggedIn } = state.auth;
    return { isLoggedIn };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data)
});

export default connect(mapState, mapDispatch)(AppRouter);
