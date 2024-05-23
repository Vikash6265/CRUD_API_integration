import { configureStore } from "@reduxjs/toolkit";
import feedbacReducer from "./feedback/feedbackSlice";

const store = configureStore({
    reducer : {
        feedback : feedbacReducer
    }
});

export default store;