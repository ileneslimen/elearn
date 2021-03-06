import axios from "axios";
import { setAlert } from "./alert";
import { GET_PROFILE, GET_PROFILES, PROFILE_ERROR, CLEAR_PROFILE, ACCOUNT_DELETED } from "./types";

// get current user's profile
export const getCurrentProfile = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/profile/me");
        dispatch({
            type: GET_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: "fail", status: err.response.status },
        });
    }
};
// Create or Update Profile
export const CreateProfil = (formData, history, edit = false) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await axios.post("/api/profile", formData, config);
        dispatch({
            type: GET_PROFILE,
            payload: res.data,
        });
        dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));
        if (!edit) {
            history.push("/dashboard");
        }
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: "fail", status: err.response.status },
        });
    }
};
//delete profile && account
export const deleteAccount = () => async (dispatch) => {
    if (window.confirm("Are you sure ? This is can NOT be undone!")) {
        try {
             await axios.delete("/api/profile");
            dispatch({ type: CLEAR_PROFILE });
            dispatch({ type: ACCOUNT_DELETED });
            dispatch(setAlert("Your account has been permanantly deleted"));
        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: "fail", status: err.response.status },
            });
        }
    }
};
// get all profiles
// Get all profiles
export const getProfiles = () => async (dispatch) => {
    dispatch({ type: CLEAR_PROFILE });

    try {
        const res = await axios.get("/api/profile");

        dispatch({
            type: GET_PROFILES,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: "fail" },
        });
    }
};
//get profil by id
export const getProfilById = (userId) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/profile/user/${userId}`);
        dispatch({
            type: GET_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: "fail", status: err.response.status },
        });
    }
};
