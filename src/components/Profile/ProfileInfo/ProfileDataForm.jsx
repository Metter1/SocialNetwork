import { React } from 'react';
import s from '../profile.module.css'
import { Form, Formik, Field } from 'formik';


export default function ProfileDataForm({ profile, saveProfile, setEditMode }) {
    return <div className={s.block_info}>
        <Formik
            initialValues={{
                aboutMe: `${profile.aboutMe ? `${profile.aboutMe}` : ''}`,
                fullName: `${profile.fullName ? `${profile.fullName}` : ''}`,
                lookingForAJob: profile.lookingForAJob,
                lookingForAJobDescription: `${profile.lookingForAJobDescription ? `${profile.lookingForAJobDescription}` : ''}`,
                contacts: {
                    facebook: profile.contacts.facebook || '',
                    github: profile.contacts.github || '',
                    instagram: profile.contacts.instagram || '',
                    mainLink: profile.contacts.mainLink || '',
                    twitter: profile.contacts.twitter || '',
                    vk: profile.contacts.vk || '',
                    website: profile.contacts.website || '',
                    youtube: profile.contacts.youtube || '',
                }
            }}
            onSubmit={(data) => {
                console.log(data)
                saveProfile(data).then(
                    () => {
                        setEditMode(false)
                    }
                ).catch(e => {
                    console.log(e)
                })
            }}
        >
            {({ errors, touched, isValidating }) => (
                <Form>
                    <Field min="3" type="text" as={'textarea'} name="aboutMe" className={`${s.form_textarea} ${s.form}`} validate={validate} />
                    {errors.aboutMe && touched.aboutMe && <div>{errors.aboutMe}</div>}
                    <Field type="text" as={'textarea'} name="lookingForAJobDescription" className={`${s.form_textarea} ${s.form}`} validate={validate} />
                    {errors.lookingForAJobDescription && touched.lookingForAJobDescription && <div>{errors.lookingForAJobDescription}</div>}
                    <Field type="text" name="fullName" validate={validate} className={s.form} />
                    {errors.fullName && touched.fullName && <div>{errors.fullName}</div>}
                    <b>
                        lookingForAJob
                        <Field type="checkbox" name="lookingForAJob" />
                    </b>
                    Contacts
                    {Object.keys(profile.contacts).map(key => {
                        return <div key={key} className={s.contacts}>
                            {key}:
                            <Field type="text" name={`contacts.` + key}  />
                        </div>
                        
                    })}
                    <button type="submit"></button>
                </Form>
            )}
        </Formik>
    </div>
}


function validateContact(value) {
    let error;
    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }

    if (!value) {
        error = `required`
    } else if (!validURL(value)){
        error = 'Invalid'
    }
    return error
}

function validate(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (value.length < 3) {
        error = 'Invalid';
    }
    return error;
}