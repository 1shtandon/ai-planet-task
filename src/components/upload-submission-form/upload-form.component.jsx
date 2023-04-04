import React, { useState } from 'react';
import './upload-form.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { uploadSubmissionAction } from '../../store/Submission-List/submission-list.action';
import { useNavigate } from 'react-router-dom';

const defaultFormValues = {
    title: '',
    summary: '',
    description: '',
    coverImage: null,
    hackathonName: '',
    hackathonStartDate: '',
    hackathonEndDate: '',
    githubSubmissionLink: '',
    otherLinks: '',
    timeOfSubmission: new Date().getTime()
};

const UploadSubmissionForm = () => {
    const [formValues, setFormValues] = useState(
        defaultFormValues
    );
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value, type } = event.target;
        if (type === 'file') {
            const file = event.target.files[0];
            getBase64(file).then((file64) => {
                setFormValues({ ...formValues, [name]: file64 });
            });
        }
        else {
            if (name === 'description') {
                event.target.style.height = "7rem";
                event.target.offsetHeight < event.target.scrollHeight && (event.target.style.height = event.target.scrollHeight + "px");

            }
            setFormValues({ ...formValues, [name]: value });
        }
    };

    const dispatch = useDispatch();
    const submissionList = useSelector(state => state.submissionList.submissionList);


    const handleButtonClick = (event) => {
        setFormValues({ ...formValues, timeOfSubmission: new Date().getTime() });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateForm()) {
            alert('Please fill all the fields');
            return;
        }

        dispatch(uploadSubmissionAction(submissionList,
            formValues.title,
            formValues.summary,
            formValues.description,
            formValues.coverImage,
            formValues.hackathonName,
            formValues.hackathonStartDate,
            formValues.hackathonEndDate,
            formValues.githubSubmissionLink,
            formValues.otherLinks,
            formValues.timeOfSubmission));

        // give a success message
        alert('Submission uploaded successfully');
        resetForm();
        navigate("/");
    };

    const validateForm = () => {
        const { title, summary, description, coverImage, hackathonName, hackathonStartDate, hackathonEndDate } = formValues;

        if (hackathonStartDate > hackathonEndDate) {
            alert('Enter valid dates');
            return false;
        }

        return title && summary && description && coverImage && hackathonName && hackathonStartDate && hackathonEndDate;

    };

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const validateImage = (file) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                if (img.width >= 360 && img.height >= 360) {
                    resolve(true);
                } else {
                    reject('Minimum resolution of 360x360 required');
                }
            };
            img.onerror = () => {
                reject('Invalid image file');
            };
            img.src = URL.createObjectURL(file);
        });
    };

    const resetForm = () => {
        setFormValues(
            defaultFormValues
        );
    };


    return (
        <div className="upload-form-container" >
            <div className="upload-form-title">
                <h2>New Hackathon Submission</h2>
            </div>
            <div className="upload-form-input">
                <form onSubmit={handleSubmit}
                >
                    <div className='input-container'>
                        <label htmlFor="title">Title</label>
                        <input className='input-text'
                            type="text"
                            id="title"
                            name="title"
                            placeholder='Title of your submission'
                            value={formValues.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="summary">Summary</label>
                        <input className='input-text'
                            type="text"
                            id="summary"
                            name="summary"
                            placeholder='A short summary of your submission (this will be visible with your submission)'
                            value={formValues.summary}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="description">Description</label>
                        <textarea className='input-description'
                            // keep a limit on the number of characte
                            maxLength={3000}
                            type="text"
                            id="description"
                            name="description"
                            placeholder='Write a long description of your project. You can describe your idea and approach here.'
                            value={formValues.description}
                            onChange={handleChange}
                            required
                        />
                        <div className='description-count'>
                            <h1>{`${formValues.description.length}/3000 characters`}</h1>
                        </div>
                    </div>
                    <div className='input-container'>
                        <label htmlFor="coverImage">Cover Image</label>
                        <span id='img-sub'>Minimum resolution: 360px X 360px</span>
                        <input className='input-file'
                            type="file"
                            id="coverImage"
                            name="coverImage"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                validateImage(file)
                                    .then(() => handleChange(e))
                                    .catch((error) => {
                                        alert(error);
                                        e.target.value = null;
                                    });
                            }}
                            required
                        />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="hackathonName">Hackathon Name</label>
                        <input className='input-text'
                            type="text"
                            id="hackathonName"
                            name="hackathonName"
                            placeholder='Enter the name of the hackathon'
                            value={formValues.hackathonName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='date-container'>
                        <div className='input-container'>
                            <label htmlFor="hackathonStartDate">Hackathon Start Date</label>
                            <input className='input-date'
                                type="date"
                                id="hackathonStartDate"
                                name="hackathonStartDate"
                                placeholder='select'
                                value={formValues.hackathonStartDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='input-container'>
                            <label htmlFor="hackathonEndDate">Hackathon End Date</label>
                            <input className='input-date'
                                type="date"
                                id="hackathonEndDate"
                                name="hackathonEndDate"
                                value={formValues.hackathonEndDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className='input-container'>
                        <label htmlFor="githubSubmissionLink">Github Repository</label>
                        <input className='input-text'
                            type="url"
                            id="githubSubmissionLink"
                            name="githubSubmissionLink"
                            placeholder="Enter your submission's Github repository link"
                            value={formValues.githubSubmissionLink}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="otherLinks">Other Links</label>
                        <input className='input-text'
                            type="url"
                            id="otherLinks"
                            name="otherLinks"
                            placeholder="You can upload a video demo or URL of your demo app here."
                            value={formValues.otherLinks}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='horizontal-line'></div>
                    <button type="submit" className='upload-btn'
                        onClick={handleButtonClick}
                    >Upload Submission</button>
                </form >
            </div>
        </div >
    );
};

export default UploadSubmissionForm;
