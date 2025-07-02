import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    language: 'ar'
}

const languageSlice = createSlice({ 
    name: 'language', 
    initialState,
    reducers: { 
        changeLanguage: (state) => { 
            state.language = state.language === 'ar' ? 'en' : 'ar'
        },
        setLanguage: (state, action) => { 
            state.language = action.payload
        }
    }
})

export const {changeLanguage, setLanguage} = languageSlice.actions;
export default languageSlice.reducer;