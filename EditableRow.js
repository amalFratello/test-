import React from 'react'
import { MdCancel } from "react-icons/md"
import './Style.css';
import { BsFillBookmarkCheckFill } from "react-icons/bs"
export const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick, handleEditFromSubmit }) => {
    return (
        <>
            <tr>
                <td> <input type="text" name="compname" defaultValue={editFormData.compname} onChange={handleEditFormChange} /></td>


                <td> <input type="text" name="email" defaultValue={editFormData.email} onChange={handleEditFormChange} /></td>


                <td> <input type="text" name="address" defaultValue={editFormData.address} onChange={handleEditFormChange} /></td>


                <td> <input type="text" name="phone" defaultValue={editFormData.phone} onChange={handleEditFormChange} /></td>

                <td> <input type="text" name="comptype" defaultValue={editFormData.comptype} onChange={handleEditFormChange} /></td>

                <td className="TD2">
                    <BsFillBookmarkCheckFill onClick={handleEditFromSubmit} />
                </td>

                <td className="TD2">
                    <MdCancel onClick={handleCancelClick} />
                </td>

            </tr>
        </>
    )
}
export default EditableRow;