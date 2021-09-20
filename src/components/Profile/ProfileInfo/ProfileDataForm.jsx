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
                })
            }}
        >
            {() => (
                <Form>
                    <div className={s.field_blog}>
                        <span className={s.field_text}>Имя:</span>
                        <Field type="text" name="fullName" validate={validate}>
                            {
                                ({
                                    field,
                                    meta: { touched, error }
                                }) => <input type="text" autocomplete="off" className={touched && error ? `${s.profile_title} ${s.profile_title_field} ${s.error}`
                                    : `${s.profile_title} ${s.profile_title_field}`} {...field} />
                            }
                        </Field>
                    </div>

                    <div className={s.field_blog}>
                        <span className={s.field_text}>О себе:</span>
                        <Field type="text" name="aboutMe" validate={validate}>
                            {
                                ({
                                    field,
                                    meta: { touched, error }
                                }) => <textarea type="text" className={touched && error ? `${s.form_textarea} ${s.profile_title_field} ${s.error}`
                                    : `${s.form_textarea} ${s.profile_title_field}`} {...field} />
                            }
                        </Field>
                    </div>

                    <div className={s.field_blog}>
                        <span className={s.field_text}>Описание:</span>
                        <Field type="text" name="lookingForAJobDescription" validate={validate}>
                            {
                                ({
                                    field,
                                    meta: { touched, error }
                                }) => <textarea type="text" className={touched && error ? `${s.form_textarea} ${s.profile_title_field} ${s.error}`
                                    : `${s.form_textarea} ${s.profile_title_field}`} {...field} />
                            }
                        </Field>
                    </div>

                    <div className={s.field_blog}>
                        <span className={s.field_text}>
                            В поисках работы:
                        </span>
                        <Field type="checkbox" name="lookingForAJob" />
                    </div>


                    <div className={s.field_line}>
                        <span className={s.field_title}>Contacts:</span>
                        <span className={s.contact_example}>http://*.*</span>
                    </div>
                    {Object.keys(profile.contacts).map(key => {
                        return <div key={key} className={s.field_blog}>
                            <span className={s.field_text}>{key}:</span>
                            <Field type="text" name={`contacts.` + key} validate={validURL}>
                            {
                                ({
                                    field,
                                    meta: { touched, error }
                                }) => <input type="text" autocomplete="off" key={key} className={touched && error ? `${s.profile_title_field} ${s.error}`
                                    : `${s.profile_title_field}`} {...field} />
                            }
                            </Field>
                        </div>

                    })}
                    <button className={s.form_btn} type="submit">Сохранить</button>
                </Form>
            )}
        </Formik>
    </div>
}

function validURL(inputURL) {
    let error;
    let reg = /https?:\/\/w{0,3}\w*?\.(\w*?\.)?\w{2,3}\S*|www\.(\w*?\.)?\w*?\.\w{2,3}\S*|(\w*?\.)?\w*?\.\w{2,3}[\/\?]\S*/
    if (!(reg.test(inputURL)|| inputURL.length === 0)) {
    error = 'error'
    }
    return error;
}

function validate(value) {
    let error;
    if (value.length < 1) {
        error = 'error';
    }
    return error;
}