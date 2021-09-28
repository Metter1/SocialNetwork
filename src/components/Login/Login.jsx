import React from 'react'
import { Form, Formik, Field } from 'formik';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import s from './login.module.css'

const Login = (props) => {
    

    return (
        <div>
            <LoginForm login={props.login} captchaUrl={props.captchaUrl} error={props.error}  />
            {props.loginSuccess && <Error />}
        </div>
    )
}

const LoginForm = (props) => {
    
    return (
        <Formik
            initialValues={{ email: '', password: '', remember: '' }}
            onSubmit={(data, actions) => {
                props.login(data.email, data.password, data.remember, data.captcha).then().catch(e => {
                })

            }}

        >
            {
                () => (
                    <Form>
                        <div className={s.parent}>
                            <div className={s.content}>
                                <div className={s.items}>
                                    <h1 className={s.title}>Вход</h1>
                                    {props.error ? <div className={s.error_text}>{props.error}</div> : <div className={s.error_help}>test</div>}
                                    <Field type="text" name="email" validate={validate}>
                                        {
                                            ({
                                                field,
                                                meta: { touched, error }
                                            }) => <input id='mail' type="text" placeholder='Введите email' className={touched && error ? `${s.form_input} ${s.error}`
                                                : `${s.form_title} ${s.form_input}`} {...field} />
                                        }
                                    </Field>
                                    <Field type="password" name="password" validate={validate}>
                                        {
                                            ({
                                                field,
                                                meta: { touched, error }
                                            }) =>
                                                <input id='password' type="password" placeholder='Введите пароль' className={touched && error ? `${s.form_input} ${s.error}`
                                                    : `${s.form_title} ${s.form_input}`} {...field} />

                                        }
                                    </Field>
                                    <div className={s.checkbox_item}>
                                        <span className={s.checkbox_text}>Запомнить меня</span>
                                        <Field type="checkbox" name="remember" />
                                    </div>
                                </div>

                                <button type="submit" className={s.button}>Войти</button>
                                {props.captchaUrl && <img className={s.img} src={props.captchaUrl} alt='captcha' />}
                                {props.captchaUrl && <Field autoComplete='off' className={s.captcha} type="text" name="captcha" validate={captchaValidate} />}
                            </div>
                        </div>

                    </Form>

                )}
        </Formik>
    )
}

function validate(value) {
    let error;
    if (value.length < 1) {
        error = 'error';
    }
    return error;
}

const Error = () => {
    return (
        <div>
            <h2 style={{ color: 'red' }}>Wrong password or login</h2>
        </div>
    )
}

function captchaValidate(value) {
    let error
    if (!value) {
        error = 'required'
    }
    return error;
}

const mapStateToProps = (state) => ({
    error: state.auth.error,
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
    loginSuccess: state.auth.loginSuccess
})

export default connect(mapStateToProps, { login })(Login)
