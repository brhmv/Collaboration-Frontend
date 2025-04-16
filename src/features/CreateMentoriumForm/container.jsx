import React from 'react'
import Input from '../../components/Input'

function CreateMentoriumForm() {
    return (
        <form>
            <Input
                type="select"
                label="Select an option"
                options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" }
                ]}
                defaultValue="option1"
            />
        </form>
    )
}

export default CreateMentoriumForm
