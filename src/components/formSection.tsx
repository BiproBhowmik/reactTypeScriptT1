import axios from 'axios'
import React, { useState } from 'react'

const FormSection = () => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        title: "",
        // image: ""
        image: null
    })

    const handleChange = (event: { target: { name: string; value: string } }) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }
    const handleImageChange = async (event: { target: { name: string; files: any } }) => {
        // console.log(event.target.files[0]);

        const formData = new FormData();

        formData.append(
            "file",
            event.target.files[0]
          );

        const res = await axios.post("http://localhost:3333/uploadFile", formData)
        
        // console.log(res.data.response);

        if (res) {
            setInput({
                ...input,
                image: res.data.response
            })
        }

        
    }

    const handleClick = async () => {
        if (input.name && input.email && input.title && input.image) {

            const res = await axios.post("http://localhost:3333/storePeople", { ...input })
            if (res.status == 200) {

                // updatePeopleData( res.data )
                setInput({
                    name: "",
                    email: "",
                    title: "",
                    // image: ""
                    image: null
                })
            }

        } else{
            alert("Empty Fild Not Allowed!!")
        }
    }



    return (
        <div className="_react_form_wrapper">
            <div className="_react_form_wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 mx-auto">
                            <div className="_react_form_content">
                                <div className="_react_form_content_inner">
                                    <div className="row g-3">
                                        <div className="col-md-12">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input type="text" className="form-control" name="name" value={input.name} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                                            <input type="email" className="form-control" name="email" value={input.email} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input type="text" className="form-control" name="title" value={input.title} onChange={handleChange} />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="image" className="form-label">Image URL</label>
                                            {/* <input type="text" className="form-control" name="image" value={input.image} onChange={handleChange} /> */}
                                            <input type="file" className="form-control" onChange={handleImageChange} />
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <button type="submit" className="btn btn-primary d-block w-100 py-2" onClick={handleClick}>Add +</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FormSection