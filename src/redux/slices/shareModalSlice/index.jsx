import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    url: '',
    copied: false,
    contentType: 'project', // 'project' || 'mentorium'
    contentId: null,
};

export const shareModalSlice = createSlice({
    name: 'shareModal',
    initialState,
    reducers: {
        openShareModal: (state, action) => {
            state.isOpen = true;
            state.url = action.payload.url || window.location.href;
            state.contentType = action.payload.contentType || 'project';
            state.contentId = action.payload.contentId || null;
        },
        closeShareModal: (state) => {
            state.isOpen = false;
            state.copied = false;
        },
        setCopied: (state, action) => {
            state.copied = action.payload;
        },
        setUrl: (state, action) => {
            state.url = action.payload;
        },
    },
});


export const {
    openShareModal,
    closeShareModal,
    setCopied,
    setUrl
} = shareModalSlice.actions;

export const selectShareModalState = (state) => state.shareModal.isOpen;
export const selectShareModalUrl = (state) => state.shareModal.url;
export const selectShareModalCopied = (state) => state.shareModal.copied;
export const selectShareModalContentType = (state) => state.shareModal.contentType;
export const selectShareModalContentId = (state) => state.shareModal.contentId;

export default shareModalSlice.reducer;