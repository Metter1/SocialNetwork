import React from 'react'
import { Form, Formik, Field } from 'formik';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';


const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <div>
                <h2>LOGIN PLS</h2>
            </div>
            <LoginForm login={props.login} captchaUrl={props.captchaUrl} error={props.error}/>
            {props.loginSuccess && <Error />}
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <Formik
            initialValues={{ email: '', password: '', remember: '' }}
            onSubmit={(data, actions) => {
                props.login(data.email, data.password, data.remember, data.captcha).then().catch(e =>{
                    
                })

            }}

        >
            {
                ({ errors, touched, isValidating }) => (
                    <Form>
                        {props.error && <div>{props.error}</div>}
                        <Field type="text" name="email" />
                        <Field type="password" name="password" />
                        <Field type="checkbox" name="remember" />
                        {props.captchaUrl && <img src={props.captchaUrl} />}
                        {props.captchaUrl && <Field type="text" name="captcha" validate={captchaValidate}/>}
                        {errors.captcha && touched.captcha ? <div>{errors.captcha}</div> : ''}
                        <button type="submit"></button>
                    </Form>

                )}
        </Formik>
    )
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
    if(!value){
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
// data.email, data.password, data.remember
// 'ryoldenshi1232@gmail.com', 'ghbdtnrhjn1', true