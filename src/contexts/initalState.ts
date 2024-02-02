import { Text } from "../shared/constants"

export const initialState = {
    isLoading: false, 
    data: [[]], 
    paginatedData: [], 
    pageNum: 1, 
    totalPages: 0,
    pageSize: 50, 
    today: new Date('December 17, 1995 03:24:00'),
    apiError: false,
    pageTitle: Text.headerTitle
}