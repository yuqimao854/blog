import type{  FC,  ReactNode } from "react"
import { IssueContentBaseFields } from "../types"
 


export const PostItem:FC<IssueContentBaseFields> = (props:IssueContentBaseFields) =>{
    console.log(props)
    const {title} = props
    return <div> {title} </div>
}
