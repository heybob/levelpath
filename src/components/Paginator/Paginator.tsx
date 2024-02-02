import React from "react"
import { useContext, useEffect, useState } from "react"
import { WikiContext } from "../../contexts/WikiContext"
import './Paginator.css'
import { Button } from "../Button/Button"

type PaginatorProps = {
    handlePageChange: Function
}

export function Paginator({handlePageChange}: PaginatorProps) {
    const {state} = useContext(WikiContext);
    const {pageNum, totalPages}  = state;
    const [rows, setRows] = useState<React.JSX.Element[]>([]);

    useEffect(() => {
    }, [rows]);

    useEffect(() => {
        function generatePagination() {
            let newRows = [];
            if(totalPages > 0) {
                for(let i = 1; i <= totalPages; i++) {
                    newRows.push((<Button key={i} name={i.toString()} clickHandler={() => handlePageChange(i)} disabled={pageNum === i} />))
                }
                setRows(newRows);
            }
        }
        generatePagination();
    }, [totalPages, pageNum, handlePageChange])

    return (
        <div className='paginator'>
            {rows}
        </div>
    )
}