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
                    <div className={s.blog_edit}>
                            <Field type="text" name="fullName" validate={validate} className={`${s.profile_title} ${s.profile_title_field}`} />
                            {errors.fullName && touched.fullName && <div>{errors.fullName}</div>}

                            <Field min="3" type="text" as={'textarea'} name="aboutMe" className={`${s.form_textarea} ${s.profile_text}`} validate={validate} />
                            {errors.aboutMe && touched.aboutMe && <div>{errors.aboutMe}</div>}


                            <b>
                                lookingForAJob
                                <Field type="checkbox" name="lookingForAJob" />
                            </b>


                            <Field type="text" as={'textarea'} name="lookingForAJobDescription" className={`${s.form_textarea} ${s.form}`} validate={validate} />
                            {errors.lookingForAJobDescription && touched.lookingForAJobDescription && <div>{errors.lookingForAJobDescription}</div>}

                    </div>
                    Contacts
                    {Object.keys(profile.contacts).map(key => {
                        return <div key={key} className={s.contacts}>
                            {key}:
                            <Field type="text" name={`contacts.` + key} />
                        </div>

                    })}
                    <button type="submit"></button>
                </Form>
            )}
        </Formik>
    </div>
}

{/* <div className={s.block_info}>
    <div className={s.aboutMe_blog}>
        
        <div className={s.blog_item}>
            <p className={s.profile_title_item1}>О себе</p>
            <p className={s.profile_text}>{profile.aboutMe}</p>
        </div>

        <div className={s.blog_item}>
            <p className={s.profile_title_item}>В поисках работы: {profile.lookingForAJob ? 'да' : 'нет'} </p>

        </div>

        <div className={s.blog_item}>
            <p className={s.profile_title_item3}>Описание</p>
            <p className={s.profile_text}>{profile.lookingForAJobDescription}</p>
        </div>
    </div>
</div> */}




function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1, 3}\\.){3}\\d{1, 3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
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